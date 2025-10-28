/**
 * Импорт Service Strategic Advisory
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

const content = {
  _type: 'serviceStrategicAdvisory',
  _id: 'serviceStrategicAdvisory-document',
  
  title: 'Strategic Advisory',
  lead: 'Funding strategy, financial modeling, and growth — practical and outcome-driven. We build the investor-ready story, model, and pipeline with your team.',

  whatWeDoTitle: 'What we do',
  whatWeDoItems: [
    {
      _key: 'item-1',
      title: 'Funding strategy',
      description: 'Right mix across equity, revenue-based, SPVs/notes, grants — matched to stage and goals.',
    },
    {
      _key: 'item-2',
      title: 'Financial modeling',
      description: 'Driver-based model with scenarios and unit economics. Ready for investor Q&A.',
    },
    {
      _key: 'item-3',
      title: 'Go-to-market & growth',
      description: 'ICP, funnel, conversion targets, channels, role-based value mapping.',
    },
    {
      _key: 'item-4',
      title: 'Narrative & materials',
      description: 'Clarify the story; assemble deck / one-pager / data room.',
    },
    {
      _key: 'item-5',
      title: 'Investor pipeline',
      description: 'Segmentation, CRM, touch sequence, status tracker.',
    },
    {
      _key: 'item-6',
      title: 'Board & metrics',
      description: 'Compact dashboard: traction, efficiency, sustainability.',
    },
  ],

  deliverablesTitle: 'Deliverables',
  deliverablesItems: [
    {
      _key: 'deliverable-1',
      title: 'Funding memo (+ deck)',
      description: 'Reasoned strategy with options, risks, and milestones.',
    },
    {
      _key: 'deliverable-2',
      title: 'Financial model',
      description: 'Scenarios, sensitivity, sample cap tables.',
    },
    {
      _key: 'deliverable-3',
      title: 'GTM plan',
      description: 'Experiment calendar, KPIs, ownership.',
    },
    {
      _key: 'deliverable-4',
      title: 'Investor list & CRM',
      description: 'Email templates, stages, follow-ups.',
    },
    {
      _key: 'deliverable-5',
      title: 'Data room checklist',
      description: 'Structure and readiness checklist.',
    },
  ],

  pills: [
    'Founder-first',
    'Data-driven',
    'Execution-ready',
  ],

  processTitle: 'Process',
  processSteps: [
    {
      _key: 'step-1',
      num: '01',
      title: 'Discovery',
      description: 'Context, objectives, constraints, preliminary strategy hypothesis.',
    },
    {
      _key: 'step-2',
      num: '02',
      title: 'Narrative & model',
      description: 'Key claims, financial model, metrics; quick GTM corrections.',
    },
    {
      _key: 'step-3',
      num: '03',
      title: 'Pipeline',
      description: 'Investor segmentation, outreach scripts, touch patterns.',
    },
    {
      _key: 'step-4',
      num: '04',
      title: 'Review & prep',
      description: 'Dry runs, materials polish, 90-day execution plan.',
    },
  ],

  engagementTitle: 'Engagement',
  engagementItems: [
    {
      _key: 'engagement-1',
      title: 'Sprint (2–4 weeks)',
      description: 'One decisive outcome: model, memo, deck, or pipeline.',
    },
    {
      _key: 'engagement-2',
      title: 'Quarter program',
      description: 'Round support end-to-end: strategy → execution → retro.',
    },
    {
      _key: 'engagement-3',
      title: 'Advisory retainer',
      description: 'Regular sessions and on-call support while you move the pipeline.',
    },
  ],

  faqTitle: 'FAQ',
  faqItems: [
    {
      _key: 'faq-1',
      title: 'What stages do you work with?',
      description: 'Pre-seed to Series B. Clear use-case and readiness matter more than stage.',
    },
    {
      _key: 'faq-2',
      title: 'Can you join investor calls?',
      description: 'Yes — we do dry runs and can join key meetings to support the narrative and numbers.',
    },
  ],
}

async function importContent() {
  console.log('🚀 Импортирую Service Strategic Advisory...')

  try {
    await client.createOrReplace(content)
    console.log('✅ Service Strategic Advisory импортирован!')
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importContent()

