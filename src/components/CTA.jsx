import { ArrowRight, Lock } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 p-8 sm:p-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Start building with BlueCard today
              </h2>
              <p className="mt-2 text-zinc-300">
                Secure, scalable, and developer-friendly payments infrastructure.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-zinc-900 text-sm font-medium px-5 py-3 hover:bg-zinc-200 transition-colors">
                  Create account
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium px-5 py-3 hover:bg-white/10 transition-colors">
                  <Lock className="h-4 w-4" />
                  SSO enterprise
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-semibold text-white">99.99%</div>
                  <div className="text-xs text-zinc-400 mt-1">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white">120ms</div>
                  <div className="text-xs text-zinc-400 mt-1">Avg latency</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white">PCI</div>
                  <div className="text-xs text-zinc-400 mt-1">Level 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
