export const BUNDLES = [
  {
    id: 'single',
    tag: '1 BOTTLE',
    name: 'Try it',
    price: 39,
    per: '$39 / bottle',
    note: '30 capsules — one month',
    cadence: 'one time',
  },
  {
    id: 'triple',
    tag: '3 BOTTLES',
    name: 'Commit',
    price: 99,
    per: '$33 / bottle',
    note: '90 capsules — save $18',
    cadence: 'one time',
    popular: true,
  },
  {
    id: 'sub',
    tag: 'MONTHLY',
    name: 'Subscribe',
    price: 29,
    per: '$29 / month — save 25%',
    note: 'Skip or cancel anytime, one click',
    cadence: 'per month',
  },
]

export const INGREDIENTS = [
  { name: 'L-Theanine', dose: 200, unit: 'MG', note: 'Wakeful calm — smooths the edge without sedation.' },
  { name: 'Citicoline', dose: 250, unit: 'MG', note: 'Choline your neurons actually use. Attention and recall.' },
  { name: 'Rhodiola rosea', dose: 150, unit: 'MG', note: 'Standardized to 3% rosavins. Steadies the stress response.' },
  { name: 'Methyl B12', dose: 500, unit: 'MCG', note: 'Energy metabolism, minus the caffeine tax.' },
]

export const BENEFITS = [
  {
    icon: 'target',
    title: 'Locks in focus',
    body: '200 mg L-theanine + 250 mg citicoline per capsule — the pairing studied for attention under load.',
  },
  {
    icon: 'bolt',
    title: 'Lifts energy, skips the spike',
    body: 'Zero caffeine. Steady output supported by 500 mcg methyl-B12 — typical onset ~30 minutes.',
  },
  {
    icon: 'wave',
    title: 'Blunts the stress spiral',
    body: '150 mg rhodiola rosea, standardized to 3% rosavins — studied for fatigue under pressure.',
  },
  {
    icon: 'shield',
    title: 'Nothing you don’t need',
    body: '0 sugar, 0 fillers, 0 proprietary blends. Every batch third-party tested.',
  },
]

export const MARQUEE_WORDS = [
  'CALM FOCUS',
  'ZERO CAFFEINE',
  'ONSET ~30 MIN',
  'NO JITTERS',
  '200 MG L-THEANINE',
  'NO CRASH',
  'THIRD-PARTY TESTED',
  'ONE PINK PILL',
]

export const REVIEWS = [
  { quote: 'Two weeks in: my 3pm slump just doesn’t happen anymore.', initials: 'MK', name: 'Mara K.' },
  { quote: 'It’s like the volume knob on my brain finally works.', initials: 'JR', name: 'Jonas R.' },
  { quote: 'No jitters, no crash. I still drink coffee — I just don’t need it.', initials: 'AT', name: 'Ana T.' },
  { quote: 'The first supplement I’ve actually finished a bottle of.', initials: 'SB', name: 'Sam B.' },
  { quote: 'I take it before deep-work blocks. It’s a ritual now.', initials: 'DL', name: 'Dana L.' },
  { quote: 'Skeptical husband now steals mine. Ordering the 3-pack.', initials: 'RM', name: 'Rita M.' },
  { quote: 'Focus without the wired feeling. That’s the whole review.', initials: 'CP', name: 'Chris P.' },
  { quote: 'Kicked in on my commute. I noticed I wasn’t doomscrolling.', initials: 'NV', name: 'Nina V.' },
]

export const FAQS = [
  {
    q: 'What exactly is in it?',
    a: 'Everything is on the label, at full disclosure: 200 mg L-theanine, 250 mg citicoline, 150 mg rhodiola rosea extract (3% rosavins), and 500 mcg methylcobalamin (B12) per capsule. No caffeine, no sugar, no proprietary blends — the complete supplement-facts panel is printed on every bottle and in the product photos above.',
  },
  {
    q: 'Is it third-party tested?',
    a: 'Every batch. An independent ISO 17025-accredited lab verifies identity, potency, heavy metals, and microbials before anything ships. Want the certificate of analysis for your batch number? Email us — it’s one reply away.',
  },
  {
    q: 'How does the subscription work?',
    a: 'It renews monthly at $29 and ships automatically. Skip a month, pause, or cancel anytime in one click — from your account or straight from any receipt email. Canceling is exactly as easy as starting.',
  },
  {
    q: 'What if it doesn’t work for me?',
    a: 'You have 60 days. If you don’t notice a difference, email us and we refund every cent — no return shipment, no forms, no “are you sure” phone call.',
  },
  {
    q: 'When will it arrive?',
    a: 'Orders ship within 24 hours on business days. US delivery takes 2–5 business days, and shipping is free over $50 (so the 3-pack and the subscription always ship free).',
  },
  {
    q: 'Who shouldn’t take it?',
    a: 'Anyone under 18, and anyone pregnant or nursing, should skip it. If you take prescription medication — especially for mood, blood pressure, or thyroid — talk to your physician first.',
  },
]

export const DISCLAIMER =
  'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.'
