import { Shield, CreditCard, Zap, BarChart3, Layers, Sparkles } from 'lucide-react'

const items = [
  {
    title: 'Instant Issuing',
    desc: 'Spin up virtual and physical cards with granular controls in minutes.',
    icon: CreditCard,
    className: 'row-span-2',
    gradient: 'from-indigo-500/30 to-fuchsia-500/20',
  },
  {
    title: 'Bank-grade Security',
    desc: 'PCI-DSS compliant infrastructure with end-to-end encryption.',
    icon: Shield,
    gradient: 'from-emerald-500/20 to-cyan-500/10',
  },
  {
    title: 'Blazing Performance',
    desc: 'Sub-100ms APIs built on globally distributed edge networks.',
    icon: Zap,
    gradient: 'from-amber-500/20 to-orange-500/10',
  },
  {
    title: 'Analytics & Insights',
    desc: 'Real-time dashboards to track spend, risk and growth.',
    icon: BarChart3,
    className: 'col-span-2',
    gradient: 'from-fuchsia-500/20 to-indigo-500/10',
  },
  {
    title: 'Modular APIs',
    desc: 'Compose your own fintech stack with flexible building blocks.',
    icon: Layers,
    gradient: 'from-blue-500/20 to-violet-500/10',
  },
  {
    title: 'Delightful UX',
    desc: 'Glassmorphic UI with modern patterns and accessibility baked in.',
    icon: Sparkles,
    gradient: 'from-pink-500/20 to-purple-500/10',
  },
]

export default function Bento() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),rgba(24,24,27,0))] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[1fr] gap-4 lg:gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`group ${item.className ?? ''} rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6 hover:bg-white/10 transition-colors`}
            >
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${item.gradient} grid place-items-center border border-white/10` }>
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{item.desc}</p>

              <div className="mt-6 h-28 rounded-xl bg-zinc-900/40 border border-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
