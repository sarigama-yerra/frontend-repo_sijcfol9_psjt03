import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/50">
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center shadow-[0_0_40px_-10px_rgba(139,92,246,0.8)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold tracking-tight">BlueCard</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navItem('Product')}
              {navItem('Pricing')}
              {navItem('Docs')}
              {navItem('Company')}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-sm text-zinc-300 hover:text-white">Sign in</a>
              <a href="#" className="inline-flex items-center rounded-lg bg-white text-zinc-900 text-sm font-medium px-4 py-2 hover:bg-zinc-200 transition-colors">
                Get started
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-zinc-200">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4">
              <div className="flex flex-col gap-3">
                {navItem('Product')}
                {navItem('Pricing')}
                {navItem('Docs')}
                {navItem('Company')}
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="text-sm text-zinc-300 hover:text-white">Sign in</a>
                <a href="#" className="inline-flex items-center rounded-lg bg-white text-zinc-900 text-sm font-medium px-4 py-2">
                  Get started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
