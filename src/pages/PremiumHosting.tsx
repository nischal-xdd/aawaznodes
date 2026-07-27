import { Check, Crown, Zap, Star } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'
import { cn } from '../lib/cn'

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/forever',
    desc: 'Perfect for trying out and small communities.',
    features: [
      '4GB RAM',
      '6GB Disk',
      '125% CPU',
      'Full Panel Access',
      'Community Support',
      'Java & Bedrock',
    ],
    variant: 'secondary' as const,
    popular: false,
  },
  {
    name: 'Starter',
    price: '₹199',
    period: '/month',
    desc: 'For growing communities that need more resources.',
    features: [
      '6GB RAM',
      '10GB Disk',
      '150% CPU',
      'Full Panel Access',
      'Priority Support',
      'Custom Domain',
      'Auto Backups',
    ],
    variant: 'primary' as const,
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹499',
    period: '/month',
    desc: 'Maximum performance for large communities.',
    features: [
      '8GB RAM',
      '16GB Disk',
      '200% CPU',
      'Full Panel Access',
      'Priority Support',
      'Custom Domain',
      'Auto Backups',
      'Dedicated Resources',
    ],
    variant: 'primary' as const,
    popular: false,
  },
]

export default function PremiumHosting() {
  return (
    <div className="py-20 md:py-28">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-medium text-orange uppercase tracking-wider mb-3">
              Premium Hosting
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Power up your server
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Upgrade to premium for more resources, better performance, and priority
              support.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.12}>
              <div
                className={cn(
                  'glass-panel p-7 h-full flex flex-col relative overflow-hidden transition-all duration-300',
                  plan.popular && 'border-orange/40 shadow-[0_0_40px_rgba(255,154,61,0.1)]',
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-orange text-bg text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                    <Star size={10} fill="currentColor" />
                    POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {plan.popular ? (
                      <Crown size={18} className="text-orange" />
                    ) : (
                      <Zap size={18} className="text-muted" />
                    )}
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-display font-bold">{plan.price}</span>
                    <span className="text-sm text-muted">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted">{plan.desc}</p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={14} className="text-green shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="/start-free"
                  variant={plan.variant}
                  className="w-full justify-center"
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Choose Plan'}
                </ButtonLink>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
