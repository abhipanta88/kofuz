export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For new businesses',
    price: 'Starting at $2.4k',
    priceNote: 'per engagement',
    description:
      'A tight, focused package to launch a new business with a credible identity and a site people trust.',
    includes: [
      'Logo & core identity',
      'One-page or marketing site',
      'Brand guidelines (lite)',
      'Launch social kit',
      'Two rounds of revisions'
    ],
    cta: { label: 'Start with Starter', href: '#contact' },
    featured: false
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For scaling companies',
    price: 'Starting at $10k',
    priceNote: 'per engagement',
    description:
      'For businesses that have traction and need a brand, product, and system that can match their next chapter.',
    includes: [
      'Full brand identity system',
      'Multi-page site or web app',
      'Content & campaign direction',
      'Marketing automation setup',
      'Performance analytics',
      'Ongoing design support'
    ],
    cta: { label: 'Plan your growth', href: '#contact' },
    featured: true
  },
  {
    id: 'momentum',
    name: 'Momentum',
    tagline: 'Full-service engagement',
    price: 'Custom pricing',
    priceNote: 'monthly retainer',
    description:
      'Embedded studio partnership — brand, product, automation, and growth under one roof with shared targets.',
    includes: [
      'Dedicated creative + dev team',
      'Quarterly brand & product roadmap',
      'CRM / workflow architecture',
      'Paid media & SEO program',
      'Reporting & strategy cadence',
      'Priority turnaround'
    ],
    cta: { label: 'Talk about Momentum', href: '#contact' },
    featured: false
  }
];
