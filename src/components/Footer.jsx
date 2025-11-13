export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
          <p className="text-sm text-zinc-400">© 2025 BlueCard, Inc. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Docs</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
