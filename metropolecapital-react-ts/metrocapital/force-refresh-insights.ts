/**
 * Принудительное обновление Insights
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

const articles = [
  {
    title: 'Cryptocurrencies are Here to Stay: Dubai Has Spoken',
    description: '"Is the future of cryptocurrencies gold or dust?" Reflections from the World Government Summit in Dubai.',
    url: 'https://www.crowdfundinsider.com/2018/02/128684-cryptocurrencies-stay-dubai-spoken/',
  },
  {
    title: 'World Funding Summit Wrap Up: A Discussion with Victoria Silchenko on the Future of Finance',
    description: 'A discussion about the evolution of fintech and funding at the World Funding Summit in Los Angeles.',
    url: 'https://www.crowdfundinsider.com/2017/12/126126-world-funding-summit-wrap-discussion-victoria-silchenko-future-finance/',
  },
  {
    title: 'Eyes Wide Shut: ICOs as a New Path to Startup Fundraising (Password Required)',
    description: 'A definitive guide to ICOs, their risks, and how self-regulation is shaping the new fundraising landscape.',
    url: 'https://www.crowdfundinsider.com/2017/07/119526-eyes-wide-shut-icos-new-path-startup-fundraising-password-required/',
  },
  {
    title: 'Equity Crowdfunding is Here … And it\'s Total BS',
    description: 'A provocative essay on how equity crowdfunding challenges traditional finance and investor behavior.',
    url: 'https://www.crowdfundinsider.com/2017/01/95007-equity-crowdfunding-total-bs/',
  },
  {
    title: 'Equity Crowdfunding Evangelist Victoria Silchenko: We Have Witnessed Unprecedented Growth in Alternative Finance',
    description: 'An interview exploring the rapid rise of alternative finance and global fintech transformation.',
    url: 'https://www.crowdfundinsider.com/2016/11/92032-equity-crowdfunding-evangelist-victoria-silchenko-witnessed-unprecedented-growth-alternative-finance/',
  },
  {
    title: 'Raise Funds from the Public Without Going Public & May the 16th Be With You!',
    description: 'For the first time since 1933, SEC regulations allow privately-held companies to raise capital from the general public in exchange for companies\' shares – something that was only previously possible via the traditional path of an IPO.',
    url: 'https://www.crowdfundinsider.com/2016/05/85647-raise-funds-from-the-public-without-going-public-may-the-16th-be-with-you/',
  },
  {
    title: 'Regulation A+: Beyond the Hype and What\'s Next',
    description: 'Recently I\'ve been noticing a lot of hype in the entrepreneurial community regarding Reg A+ and there have been a lot of cheerful pitches about the new regulation that would allow young companies "to raise up to $50 million without the expense and complexity of a traditional IPO".',
    url: 'https://www.crowdfundinsider.com/2015/10/75554-regulation-a-beyond-the-hype-and-whats-next/',
  },
  {
    title: 'Start-ups Wars: The New Financing Force Awakens in 2016',
    description: '2016 marks the start of a new era in venture financing and capital formation and if you are an entrepreneur searching the galaxy for capital, well, to borrow a Star Wars saying - May the Force be With You.',
    url: 'https://www.huffpost.com/entry/startups-wars-the-new-fin_b_8878402',
  },
  {
    title: 'There\'s a New-Old Sheriff in Town: Royalty Financing for Young Ventures',
    description: 'Do you remember that story from the early \'90s when Arthur Fox pioneered royalty financing as a new form of venture capital? No, me neither. But the fact is that\'s when we got the first revenue based financing model operating here...',
    url: 'https://www.huffpost.com/entry/theres-a-newold-sheriff-i_b_9295908',
  },
  {
    title: 'So You Think You Can Invest: The Reality of Equity Crowdfunding Under a New Rule',
    description: 'If anything, May 16th, 2016 should be opened with the ringing of a bell, similar to the one at the New York Stock Exchange (NYSE),...',
    url: 'https://www.huffpost.com/entry/so-you-think-you-can-inve_b_9415392',
  },
  {
    title: 'Confessions of Venture Capitalists: How to Milk a Unicorn',
    description: 'Those who wonder what the hell is going on with the accelerating number of startups getting billion-dollar valuations and above, please raise MY hand.',
    url: 'https://www.huffpost.com/entry/confessions-of-venture-ca_b_8137356',
  },
  {
    title: 'Pot Investments Versus Angel Investments: It is Time to Worry, Ladies and Gentlemen.',
    description: 'The devil is in the data. How else do you explain the fact that $23.3 billion was invested in the marijuana penny stock market last year -- almost as much as the $24.1 billion total of angel investments over the same period.',
    url: 'https://www.huffpost.com/entry/pot-investments-versus-an_b_7830006',
  },
  {
    title: 'IPO for All or How to Create Your Own Currency',
    description: 'Okay, let me state upfront that I am completely biased when it comes to running a compelling business: for I believe if you happen to live in the 21st century, your company\'s stock should be worth money, and you should be able to turn around and sell it.',
    url: 'https://www.huffpost.com/entry/ipo-for-all-or-how-to-cre_b_7651438',
  },
  {
    title: 'So You Think You Can Go Public? (Re)Meet the OTC',
    description: 'I believe, if you run a modern company, your stock options should be worth money and you should be able to turn around and sell or exercise them. In other words, your company stocks should be able to become your own currency.',
    url: 'https://www.huffpost.com/entry/so-you-think-you-can-go-p_b_7433654',
  },
  {
    title: 'Fifty Shades of White: Raising Equity from the Public by Start-ups',
    description: 'Curious? I don\'t blame you - especially if you are an entrepreneur or an indie-producer in search of capital and have been patiently waiting for the JOBS act rules to come to life. In a rather surprising recent move, the Securities and Exchange Commission (SEC) chaired by...',
    url: 'https://www.huffpost.com/entry/fifty-shades-of-white-rai_b_6966268',
  },
  {
    title: 'Equity Crowdfunding Is Dead -- Long Live Equity Crowdfunding',
    description: 'In life, whatever it is we are seeking will not arrive in the form we are expecting. Such is the case with raising equity in a post JOBS Act market -- something that fascinated but at the same time confused many business owners.',
    url: 'https://www.huffpost.com/entry/equity-crowdfunding-is-de_b_6813872',
  },
  {
    title: 'How to Raise Capital But Preserve Your Equity: Royalty Based Crowdfunding (Interview With Arthur Lipper)',
    description: 'With nowadays technology which keeps simplifying revenue management while making crowdfunding platforms as commodities, I believe royalty based crowdfunding is set to be one of the most popular models in the next two-three years.',
    url: 'https://www.huffpost.com/entry/how-to-raise-capital-but_b_6253304',
  },
  {
    title: 'How to Fund Your Startup -- With VCs, Angels and Crowdinvesting',
    description: 'How to Fund Your Startup -- With VCs, Angels and Crowdinvesting',
    url: 'https://www.huffpost.com/entry/how-to-fund-your-startup_b_6097734',
  },
  {
    title: 'The King\'s Speech Writer David Seidler Speaks About Crowdfunding',
    description: 'Writer David Seidler Speaks About Crowdfunding',
    url: 'https://www.huffpost.com/entry/the-kings-speech-writer-d_b_4314890',
  },
  {
    title: 'Who Let the Dog Out: On New Crowdfunding Rules and Why It Is Time for Us to Wise Up',
    description: 'Who Let the Dog Out: On New Crowdfunding Rules and Why It Is Time for Us to Wise Up',
    url: 'https://www.huffpost.com/entry/who-let-the-dog-out-on-ne_b_4215647',
  },
  {
    title: 'Equity Crowdfunding and Advertising: Be Careful What You Wish For',
    description: 'Equity Crowdfunding and Advertising: Be Careful What You Wish For',
    url: 'https://www.huffpost.com/entry/equity-crowdfunding-and-a_b_3602770',
  },
  {
    title: 'In Crowd We Trust: My Trip to the White House \'Champions of Change\' Ceremony for Crowdfunding Pioneers',
    description: 'In Crowd We Trust: My Trip to the White House \'Champions of Change\' Ceremony for Crowdfunding Pioneers',
    url: 'https://www.huffpost.com/entry/in-crowd-we-trust-my-trip_b_3419250',
  },
  {
    title: 'Equity Crowdfunding: Next Generation of Angel Investors Is Not Sorry to Disrupt',
    description: 'Equity Crowdfunding: Next Generation of Angel Investors Is Not Sorry to Disrupt',
    url: 'https://www.huffpost.com/entry/equity-crowdfunding-next_b_3220914',
  },
  {
    title: 'Shift Happens: Social Impact of Crowdfunding and Why You Matter',
    description: 'Crowdfunding has fulfilled the need of fairness and compassion in our debt-ridden society, confirming that everyone can make a difference.',
    url: 'https://www.huffpost.com/entry/shift-happens-social-impa_b_3067048',
  },
  {
    title: 'On Creativeness and Why Crowdfunding Will Surpass the VC industry',
    description: 'According to the Kickstarter\'s data, there was $274 billion collected last year (+238 percent from 2011). In comparison, VC\'s invested $26.5 billion in 2012 (-10 percent from 2011). Do you see the difference?',
    url: 'https://www.huffpost.com/entry/on-creativeness-and-why-c_b_2851033',
  },
  {
    title: 'Conscience Is In, Greed Is Out and Crowdfunding Is On',
    description: 'For most entrepreneurs crowdfunding is not just an option anymore. It is a necessity. And as we all know, necessity is the mother of invention. Stay tuned.',
    url: 'https://www.huffpost.com/entry/crowdfunding-small-business_b_2625282',
  },
  {
    title: 'Crowdfunding Is Not an F-word',
    description: 'Equity crowdfunding (or crowdfund investing) is not operational and not legitimate in the United States yet and for those who are growing comfortable with the concept, there are three essential facts to remember.',
    url: 'https://www.huffpost.com/entry/crowdfunding_b_2275160',
  },
]

async function forceUpdate() {
  console.log('🔄 Перезаписываю Insights...')
  
  try {
    // Удаляем старый документ
    await client.delete('insights-document')
    console.log('✅ Старый документ удалён')
    
    // Создаём новый
    const newDoc = {
      _id: 'insights-document',
      _type: 'insights',
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
      articles: articles.map((article, index) => ({
        _key: `article-${index + 1}`,
        _type: 'article',
        title: article.title,
        description: article.description,
        url: article.url,
      })),
    }
    
    await client.create(newDoc)
    console.log(`✅ Создан новый документ с ${articles.length} статьями!`)
    console.log('🔄 Обнови Studio - теперь покажет все 27 статей!')
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

forceUpdate()

