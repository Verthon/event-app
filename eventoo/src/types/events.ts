export type EventType = {
  eventId: number,
  docId: string,
  title: string,
  host: string,
  localization: string,
  address: string,
  category: string,
  day: string,
  hour: string,
  description: string,
  featuredImage: string,
  date?: string,
}

export type CategoryType = {
  category: string,
  emoji: string,
}