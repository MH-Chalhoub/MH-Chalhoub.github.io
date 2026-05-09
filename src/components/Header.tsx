import { useState } from 'react'

interface HeaderProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['home', 'skills', 'projects', 'experience', 'contact']

  return (
    <header className="sticky top-0 z-50 bg-geoai-surface shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-geoai-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🤖</span>
            </div>
            <h1 className="text-2xl font-bold text-geoai-primary">GeoAI Engineer</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 capitalize ${
                  activeSection === item
                    ? 'bg-geoai-primary text-white shadow-md'
                    : 'text-geoai-neutral hover:bg-geoai-secondary hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-geoai-primary text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item)
                  setIsOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg capitalize transition-all ${
                  activeSection === item
                    ? 'bg-geoai-primary text-white'
                    : 'text-geoai-neutral hover:bg-geoai-secondary'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
