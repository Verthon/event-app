export type EventType = {
  eventId?: number
  docId: string
  title: string
  host: string
  localization: string
  address: string
  category: string
  day: string
  hour: string
  description: string
  featuredImage: string
  editMode: boolean
}

export type EventItemType = {
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
  editMode: boolean,
  deleteHandler?: any,
  editHandler?: any,
}

export type CategoryType = {
  category: string,
  emoji: string,
}

export type EventItemEditMode = {
  readonly editMode: boolean
}