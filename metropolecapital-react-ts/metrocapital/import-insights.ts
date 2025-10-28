/**
 * Импорт Insights - только структура (статей много, добавьшь вручную)
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

const insightsContent = {
  _type: 'insights',
  _id: 'insights-document',
  title: 'Insights',
  lead: 'Articles, essays, and sharp commentary. Books, reports and practical frameworks for founders and capital partners.',
  
  bookTitle: 'A book by our founder, on smart funding for innovators',
  bookDescription: 'Raise and Rise is a goldmine of in-depth knowledge on modern capital sources and funding tools for startups. It covers venture capital, crowdfunding (including blockchain-based), royalty financing, family offices, and angel investors.',
  
  bookKeyTopics: [
    'How the digital economy works',
    'Why obtaining funding for a startup is so difficult',
    'Who really controls the global money supply',
    'Why Silicon Valley became the world\'s most powerful startup hub',
    'How venture capitalists make investment decisions',
    'Which type of crowdfunding makes the most sense for your venture',
    'How to raise capital without giving up equity',
    'Whether you can raise funds through issuing your own cryptocurrency',
    'Why building a platform can be a game-changer',
    'How to make the most meaningful impact with your venture',
  ],
  
  bookLink: 'https://www.amazon.com/Raise-Rise-Funding-Transformation-Blockchain-ebook/dp/B08H1CYCMY/',
  bookLinkText: 'Find Raise and Rise on Amazon',
  
  articlesTitle: 'Articles by the Founder',
  
  // Примеры статей (первые 3)
  articles: [
    {
      _key: 'article-1',
      _type: 'article',
      title: 'Cryptocurrencies are Here to Stay: Dubai Has Spoken',
      description: '"Is the future of cryptocurrencies gold or dust?" Reflections from the World Government Summit in Dubai.',
      url: 'https://www.crowdfundinsider.com/2018/02/128684-cryptocurrencies-stay-dubai-spoken/',
    },
    {
      _key: 'article-2',
      _type: 'article',
      title: 'World Funding Summit Wrap Up: A Discussion with Victoria Silchenko on the Future of Finance',
      description: 'A discussion about the evolution of fintech and funding at the World Funding Summit in Los Angeles.',
      url: 'https://www.crowdfundinsider.com/2017/12/126126-world-funding-summit-wrap-discussion-victoria-silchenko-future-finance/',
    },
    {
      _key: 'article-3',
      _type: 'article',
      title: 'Eyes Wide Shut: ICOs as a New Path to Startup Fundraising (Password Required)',
      description: 'A definitive guide to ICOs, their risks, and how self-regulation is shaping the new fundraising landscape.',
      url: 'https://www.crowdfundinsider.com/2017/07/119526-eyes-wide-shut-icos-new-path-startup-fundraising-password-required/',
    },
  ],
}

async function importInsights() {
  console.log('🚀 Импортирую Insights...')
  
  try {
    await client.createOrReplace(insightsContent)
    console.log('✅ Insights импортирован!')
    console.log('📝 В Studio можно добавить остальные статьи через "+ Add item"')
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importInsights()

