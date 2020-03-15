export interface EventModel {
  eventId: number,
  name: string,
  host: string,
  localization: string,
  category: string,
  date: string,
  time: string,
  description: string,
  image: string,
  timestamp?: string,
}

export type ICategory = {
  category: string,
  emoji: string,
}