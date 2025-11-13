import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[680px] w-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.35),rgba(24,24,27,0))] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              New: BlueCard Pay API now in beta
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              The modern fintech platform for <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">digital payments</span>
            </h1>

            <p className="mt-4 text-lg text-zinc-300 max-w-xl">
              Launch cards, process payments, and manage risk with a single, secure platform. Beautifully designed. Built for developers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-zinc-900 text-sm font-medium px-5 py-3 hover:bg-zinc-200 transition-colors">
                Start free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium px-5 py-3 hover:bg-white/10 transition-colors">
                View docs
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-zinc-400">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-white/10 backdrop-blur border border-white/10" />
                ))}
              </div>
              <p className="text-sm">Trusted by 5,000+ teams</p>
            </div>
          </div>

          <div className="relative h-[520px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
