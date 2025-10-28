import { sanityClient } from './sanityService'

// Types
export interface HomeContent {
  logo: any
  heroTitle: string
  heroLine: string
  heroLineSmall: string
  mapTitle: string
  mapImage: any
}

export interface MethologyContent {
  title: string
  lead: string
  triadTitle: string
  triadDescription: string
  blockTop: { emoji: string; title: string; content: string }
  blockLeft: { emoji: string; title: string; content: string }
  blockRight: { emoji: string; title: string; content: string }
  centerTitle: string
  centerDescription: string
  footerText1: string
  footerText2: string
  cards: Array<{ title: string; content?: string; items?: string[] }>
}

export interface ContactContent {
  title: string
  lead: string
  formTitle: string
  officeTitle: string
  companyName: string
  phone: string
  officePhoto: any
}

export interface EventsContent {
  title: string
  lead: string
  cardTitle: string
  cardDescription: string
  cardItems: string[]
  cardFooterTitle: string
  galleryTitle: string
  galleryDescription: string
  galleryItems: Array<{ image: any; alt: string }>
}

export interface InsightsContent {
  title: string
  lead: string
  bookTitle: string
  bookDescription: string
  bookKeyTopics: string[]
  bookLink: string
  bookLinkText: string
  bookCover: any
  articlesTitle: string
  articles: Array<{ title: string; description: string; url: string }>
}

export interface ServicesContent {
  title: string
  lead: string
  serviceItems: Array<{ title: string; short: string; details: any }>
  ctaText: string
}

export interface TeamContent {
  title: string
  lead: string
  founder: {
    photo: any
    name: string
    role: string
    bio: any[]
    linkedin: string
  }
  advisoryTitle: string
  advisoryMembers: Array<{
    photo: any
    name: string
    role: string
    bio: string
    linkedin: string
  }>
}

export interface VentureKingsContent {
  logo: any
  title: string
  lead: string
  whyCard: { title: string; items: string[] }
  howCard: { title: string; description: any[] }
  whoCard: { title: string; items: string[] }
  uniqueCard: { title: string; description: any[] }
  ctaTitle: string
  ctaDescription: any[]
}

export interface ServiceStrategicAdvisoryContent {
  title: string
  lead: string
  whatWeDoTitle: string
  whatWeDoItems: Array<{ title: string; description: string }>
  deliverablesTitle: string
  deliverablesItems: Array<{ title: string; description: string }>
  pills: string[]
  processTitle: string
  processSteps: Array<{ num: string; title: string; description: string }>
  engagementTitle: string
  engagementItems: Array<{ title: string; description: string }>
  faqTitle: string
  faqItems: Array<{ title: string; description: string }>
}

// Functions
export async function getHomeContent(): Promise<HomeContent | null> {
  try {
    return await sanityClient.fetch(`*[_type == "home"][0]`)
  } catch (error) {
    console.error('Error fetching home:', error)
    return null
  }
}

export async function getMethologyContent(): Promise<MethologyContent | null> {
  try {
    return await sanityClient.fetch(`*[_type == "methology"][0]`)
  } catch (error) {
    console.error('Error fetching methology:', error)
    return null
  }
}

export async function getContactContent(): Promise<ContactContent | null> {
  try {
    return await sanityClient.fetch(`*[_type == "contact"][0]`)
  } catch (error) {
    console.error('Error fetching contact:', error)
    return null
  }
}

export async function getEventsContent(): Promise<EventsContent | null> {
  try {
    return await sanityClient.fetch(`*[_type == "events"][0]`)
  } catch (error) {
    console.error('Error fetching events:', error)
    return null
  }
}

export async function getInsightsContent(): Promise<InsightsContent | null> {
  try {
    return await sanityClient.fetch(`*[_type == "insights"][0]`)
  } catch (error) {
    console.error('Error fetching insights:', error)
    return null
  }
}

export async function getServicesContent(): Promise<ServicesContent | null> {
  try {
    return await sanityClient.fetch(`*[_type == "services"][0]`)
  } catch (error) {
    console.error('Error fetching services:', error)
    return null
  }
}

export async function getTeamContent(): Promise<TeamContent | null> {
  try {
    return await sanityClient.fetch(`*[_type == "team"][0]`)
  } catch (error) {
    console.error('Error fetching team:', error)
    return null
  }
}

export async function getVentureKingsContent(): Promise<VentureKingsContent | null> {
  try {
    return await sanityClient.fetch(`*[_type == "ventureKings"][0]`)
  } catch (error) {
    console.error('Error fetching ventureKings:', error)
    return null
  }
}

export async function getServiceStrategicAdvisoryContent(): Promise<ServiceStrategicAdvisoryContent | null> {
  try {
    return await sanityClient.fetch(`*[_type == "serviceStrategicAdvisory"][0]`)
  } catch (error) {
    console.error('Error fetching serviceStrategicAdvisory:', error)
    return null
  }
}

