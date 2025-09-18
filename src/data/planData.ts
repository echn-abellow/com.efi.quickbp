import type {
  ActionItem,
  FocusArea,
  HeroContent,
  Metric,
  Milestone,
  Objective,
  SWOTCategory,
} from '../types/plan';

export const heroContent: HeroContent = {
  title: 'QuickBP Growth Blueprint',
  subtitle:
    'Operational dashboard for aligning teams around revenue growth, market expansion, and efficient execution.',
  updatedAt: 'Updated 8:45 AM — Strategy review cadence: weekly',
  primaryCta: 'Share roadmap',
  secondaryCta: 'Export plan',
};

export const metrics: Metric[] = [
  {
    id: 'arr',
    label: 'Projected ARR',
    value: '$4.2M',
    change: 18.4,
    trend: 'up',
    description: '12-month forward looking run-rate including signed renewals.',
  },
  {
    id: 'pipeline',
    label: 'Qualified Pipeline',
    value: '$6.8M',
    change: 9.7,
    trend: 'up',
    description: 'Opportunities in commit + best-case stages for the next two quarters.',
  },
  {
    id: 'burn',
    label: 'Monthly Burn',
    value: '$310K',
    change: -6.3,
    trend: 'down',
    description: 'Cash utilization after efficiency initiatives and vendor negotiations.',
  },
];

export const objectives: Objective[] = [
  {
    id: 'obj-1',
    title: 'Launch AI-enabled planning suite',
    owner: 'Product',
    description: 'MVP in pilot with 6 design partners; targeting GA release in Q3.',
    progress: 72,
    dueQuarter: 'Q3 2025',
    status: 'on-track',
  },
  {
    id: 'obj-2',
    title: 'Expand enterprise pipeline',
    owner: 'Revenue',
    description: 'Land 12 enterprise logos with average contract value above $120K.',
    progress: 54,
    dueQuarter: 'Q4 2025',
    status: 'at-risk',
  },
  {
    id: 'obj-3',
    title: 'Improve gross margin to 74%',
    owner: 'Operations',
    description: 'Optimize hosting footprint and support workflows to lift margin.',
    progress: 63,
    dueQuarter: 'Q1 2026',
    status: 'on-track',
  },
];

export const milestones: Milestone[] = [
  {
    id: 'mile-1',
    quarter: 'Q2',
    title: 'Complete predictive analytics beta',
    description: 'Ship scenario modeling with top 3 requested metrics.',
    status: 'completed',
    owner: 'Product',
  },
  {
    id: 'mile-2',
    quarter: 'Q3',
    title: 'Revenue enablement playbooks',
    description: 'Codify pricing, objection handling, and procurement guides.',
    status: 'in-progress',
    owner: 'Revenue Ops',
  },
  {
    id: 'mile-3',
    quarter: 'Q3',
    title: 'Partnership integrations',
    description: 'Deliver two-way sync with HubSpot and Netsuite planning modules.',
    status: 'in-progress',
    owner: 'Alliances',
  },
  {
    id: 'mile-4',
    quarter: 'Q4',
    title: 'Series B readiness',
    description: 'Audit KPIs, finalize data room, and publish 24-month model.',
    status: 'upcoming',
    owner: 'Finance',
  },
];

export const swotMatrix: SWOTCategory[] = [
  {
    title: 'Strengths',
    items: [
      'Integrated forecasting + execution workflows resonate with operators.',
      'Team features reduce planning cycle time by 32% in pilot accounts.',
      'Data platform built on modular services supports enterprise scale.',
    ],
  },
  {
    title: 'Weaknesses',
    items: [
      'Limited professional services capacity for complex implementations.',
      'Brand awareness still low outside of SaaS vertical peers.',
    ],
  },
  {
    title: 'Opportunities',
    items: [
      'Mid-market CFOs prioritizing agile scenario planning tools.',
      'Channel partnerships with ERP consultancies expanding reach.',
      'AI-assisted planning narrative resonates with board stakeholders.',
    ],
  },
  {
    title: 'Threats',
    items: [
      'Legacy vendors accelerating acquisitions to close product gaps.',
      'Procurement scrutiny on software ROI remains elevated.',
    ],
  },
];

export const focusAreas: FocusArea[] = [
  {
    id: 'focus-1',
    title: 'Customer advisory council',
    summary: 'Formalize quarterly insight loop with top 10 accounts to shape roadmap.',
    horizon: 'Short Term',
    confidence: 78,
  },
  {
    id: 'focus-2',
    title: 'Vertical expansion: Fintech',
    summary: 'Tailor compliance automation and reporting templates for regulated teams.',
    horizon: 'Mid Term',
    confidence: 64,
  },
  {
    id: 'focus-3',
    title: 'Predictive services upsell',
    summary: 'Monetize forecasting expertise through packaged playbooks and workshops.',
    horizon: 'Long Term',
    confidence: 52,
  },
];

export const actionItems: ActionItem[] = [
  {
    id: 'act-1',
    title: 'Finalize success metrics for AI beta',
    owner: 'Product Marketing',
    dueDate: 'Jul 12',
    status: 'In Progress',
    impact: 'High',
    notes: 'Draft ready for exec review; aligning on adoption targets.',
  },
  {
    id: 'act-2',
    title: 'Negotiate usage-based pricing pilot',
    owner: 'Revenue Ops',
    dueDate: 'Jul 26',
    status: 'Not Started',
    impact: 'Medium',
    notes: 'Awaiting data from finance to finalize guardrails.',
  },
  {
    id: 'act-3',
    title: 'Publish integration certification path',
    owner: 'Alliances',
    dueDate: 'Aug 2',
    status: 'In Progress',
    impact: 'High',
    notes: 'Content outline complete; requires legal review.',
  },
  {
    id: 'act-4',
    title: 'Operationalize NPS closed loop',
    owner: 'Customer Success',
    dueDate: 'Aug 16',
    status: 'Blocked',
    impact: 'High',
    notes: 'Need system access from IT to connect survey platform.',
  },
];
