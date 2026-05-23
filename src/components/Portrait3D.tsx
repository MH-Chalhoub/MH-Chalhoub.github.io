import { useEffect, useRef, useState } from 'react'
import {
  ACESFilmicToneMapping,
  AmbientLight,
  Box3,
  DirectionalLight,
  HemisphereLight,
  Material,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import styles from './Hero.module.css'

type Portrait3DProps = {
  url: string
  alt: string
  onReady?: () => void
  onProgress?: (percent: number) => void
}

function fitCameraToObject(
  camera: PerspectiveCamera,
  object: import('three').Object3D,
  margin = 1.12,
) {
  const box = new Box3().setFromObject(object)
  const size = box.getSize(new Vector3())
  const center = box.getCenter(new Vector3())

  object.position.sub(center)

  const maxDim = Math.max(size.x, size.y, size.z)
  const fitHeightDistance = maxDim / (2 * Math.tan((Math.PI * camera.fov) / 360))
  const fitWidthDistance = fitHeightDistance / camera.aspect
  const distance = Math.max(fitHeightDistance, fitWidthDistance) * margin

  camera.position.set(0, 0, distance)
  camera.near = distance / 100
  camera.far = distance * 100
  camera.updateProjectionMatrix()

  return distance
}

function prepareModelMaterials(object: import('three').Object3D) {
  object.traverse((child) => {
    if (!(child instanceof Mesh)) return
    child.castShadow = false
    child.receiveShadow = false
    const materials = Array.isArray(child.material) ? child.material : [child.material]
    for (const material of materials) {
      if (material instanceof MeshStandardMaterial) {
        material.roughness = Math.min(Math.max(material.roughness, 0.55), 0.78)
        material.metalness = Math.min(material.metalness, 0.1)
        material.needsUpdate = true
      }
    }
  })
}

function setupPortraitLighting(scene: Scene, distance: number) {
  scene.add(new HemisphereLight(0xb4c8e8, 0x1e2a3e, 1.05))
  scene.add(new AmbientLight(0x4a5a72, 0.22))

  const key = new DirectionalLight(0xfff6eb, 0.52)
  key.position.set(-distance * 0.9, distance * 1.4, distance * 1.1)
  scene.add(key)

  const fill = new DirectionalLight(0xd4e2ff, 0.38)
  fill.position.set(distance * 1.1, distance * 0.35, distance * 1.2)
  scene.add(fill)

  const rim = new DirectionalLight(0x8eb4e8, 0.12)
  rim.position.set(0, distance * 0.6, -distance * 1.4)
  scene.add(rim)
}

export function Portrait3D({ url, alt, onReady, onProgress }: Portrait3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const callbacksRef = useRef({ onReady, onProgress })
  callbacksRef.current = { onReady, onProgress }

  useEffect(() => {
    const mount = containerRef.current
    if (!mount) return

    let disposed = false
    let frameId = 0

    const scene = new Scene()
    scene.background = null

    const camera = new PerspectiveCamera(32, 1, 0.1, 1000)
    const renderer = new WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = SRGBColorSpace
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.08
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    mount.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.enablePan = false
    controls.rotateSpeed = 0.65
    controls.autoRotate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    controls.autoRotateSpeed = 5

    function render() {
      renderer.render(scene, camera)
    }

    function tick() {
      if (disposed) return
      controls.update()
      render()
      frameId = requestAnimationFrame(tick)
    }

    function resize() {
      const el = containerRef.current
      if (!el) return
      const w = el.clientWidth
      const h = el.clientHeight
      if (w === 0 || h === 0) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
      render()
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)
    resize()

    const loader = new GLTFLoader()
    loader.load(
      url,
      (gltf) => {
        if (disposed) return
        prepareModelMaterials(gltf.scene)
        scene.add(gltf.scene)
        const distance = fitCameraToObject(camera, gltf.scene)
        setupPortraitLighting(scene, distance)

        controls.target.set(0, 0, 0)
        controls.minDistance = distance * 0.55
        controls.maxDistance = distance * 2.2
        controls.update()
        setReady(true)
        callbacksRef.current.onProgress?.(100)
        callbacksRef.current.onReady?.()
        tick()
      },
      (event) => {
        if (disposed || !event.lengthComputable || event.total === 0) return
        const modelShare = 92
        const base = 8
        const pct = base + Math.round((event.loaded / event.total) * modelShare)
        callbacksRef.current.onProgress?.(Math.min(pct, 99))
      },
      () => {
        if (!disposed) setReady(false)
      },
    )

    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
      controls.dispose()
      resizeObserver.disconnect()
      renderer.dispose()
      renderer.domElement.remove()
      scene.traverse((child) => {
        if (!(child instanceof Mesh)) return
        child.geometry.dispose()
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material]
        for (const material of materials) {
          ;(material as Material).dispose()
        }
      })
    }
  }, [url])

  return (
    <div
      ref={containerRef}
      className={styles.portraitCanvas}
      data-ready={ready}
      role="img"
      aria-label={alt}
      aria-busy={!ready}
    />
  )
}
