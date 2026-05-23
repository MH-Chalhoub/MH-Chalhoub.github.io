import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { CvModal } from '../components/CvModal'

type CvModalContextValue = {
  openCv: () => void
  closeCv: () => void
}

const CvModalContext = createContext<CvModalContextValue | null>(null)

export function CvModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openCv = useCallback(() => setOpen(true), [])
  const closeCv = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ openCv, closeCv }), [openCv, closeCv])

  return (
    <CvModalContext.Provider value={value}>
      {children}
      <CvModal open={open} onClose={closeCv} />
    </CvModalContext.Provider>
  )
}

export function useCvModal() {
  const ctx = useContext(CvModalContext)
  if (!ctx) {
    throw new Error('useCvModal must be used within CvModalProvider')
  }
  return ctx
}
