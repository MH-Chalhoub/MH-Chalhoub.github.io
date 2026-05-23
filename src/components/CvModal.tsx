import { useEffect, useRef } from 'react'
import { site } from '../content/site'
import styles from './CvModal.module.css'

type CvModalProps = {
  open: boolean
  onClose: () => void
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21h14" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 3h7v7M10 14L21 3M21 14v7H3V3h7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CvModal({ open, onClose }: CvModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { href, fileName } = site.cv
  const previewSrc = `${href}#toolbar=0&navpanes=0&view=FitH`

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const onCancel = (event: Event) => {
      event.preventDefault()
      onClose()
    }
    const onDialogClose = () => onClose()

    dialog.addEventListener('cancel', onCancel)
    dialog.addEventListener('close', onDialogClose)
    return () => {
      dialog.removeEventListener('cancel', onCancel)
      dialog.removeEventListener('close', onDialogClose)
    }
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div className={`${styles.panel} scrollSurfaceDark`}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>Resume</p>
            <h2 id="cv-modal-title" className={styles.title}>
              {site.name}
            </h2>
            <p className={styles.subtitle}>{site.role}</p>
          </div>

          <div className={styles.headerActions}>
            <a className={styles.downloadBtn} href={href} download={fileName}>
              <DownloadIcon />
              Download PDF
            </a>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close CV preview"
            >
              <CloseIcon />
            </button>
          </div>
        </header>

        <div className={styles.viewer}>
          <div className={styles.paperChrome}>
            <div className={styles.paperGlow} aria-hidden />
            <iframe
              className={styles.frame}
              src={previewSrc}
              title={`${site.name} CV preview`}
            />
          </div>
        </div>

        <footer className={styles.footer}>
          <a
            className={styles.openLink}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open full PDF in browser
            <ExternalIcon />
          </a>
          <span className={styles.hint}>Press Esc to close</span>
        </footer>
      </div>
    </dialog>
  )
}
