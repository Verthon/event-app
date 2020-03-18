export type EventType = {
  eventId: number,
  docId: string,
  name: string,
  host: string,
  localization: string,
  address: string,
  category: string,
  date: string,
  time: string,
  description: string,
  image: string,
  timestamp?: string,
}

export type CategoryType = {
  category: string,
  emoji: string,
}