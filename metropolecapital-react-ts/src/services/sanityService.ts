import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = '16c5vmgl'
const dataset = 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: undefined, // Public read, не нужен токен
})

// Image URL Builder
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Тип для About страницы
export interface AboutContent {
  title: string
  lead: string
  whyUs: {
    title: string
    description: string
    items: string[]
  }
  ourGoals: {
    title: string
    items: string[]
  }
  ourValues: {
    title: string
    description: string
  }
}

export async function getAboutContent(): Promise<AboutContent | null> {
  try {
    const data = await sanityClient.fetch(`*[_type == "about"][0]`)
    return data
  } catch (error) {
    console.error('Error fetching content from Sanity:', error)
    return null
  }
}

