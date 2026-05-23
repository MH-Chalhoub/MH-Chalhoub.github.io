import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import styles from './CvModal.module.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

type CvPdfViewerProps = {
  url: string
}

export function CvPdfViewer({ url }: CvPdfViewerProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [numPages, setNumPages] = useState(0)
  const [pageWidth, setPageWidth] = useState(0)
  const [error, setError] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const updateWidth = () => {
      setPageWidth(Math.max(el.clientWidth - 16, 280))
    }

    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={scrollRef} className={`${styles.pdfScroll} scrollSurfaceDark`}>
      <Document
        file={url}
        loading={<p className={styles.pdfStatus}>Loading resume…</p>}
        error={
          <p className={styles.pdfStatus}>
            Could not load preview. Use Download PDF below.
          </p>
        }
        onLoadSuccess={({ numPages: pages }) => {
          setNumPages(pages)
          setError(false)
        }}
        onLoadError={() => setError(true)}
      >
        {!error &&
          numPages > 0 &&
          Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page-${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              className={styles.pdfPage}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
      </Document>
    </div>
  )
}
