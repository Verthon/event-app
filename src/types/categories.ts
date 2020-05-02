export type CategoryType = {
  key: number
  filterFunction: any
  emoji: string
  category: string
  active: boolean
}

export type CategoryData = {
  docId: string,
  category: string,
  emoji: string
}

export type CategoryStyledProps = {
  readonly active: boolean
}