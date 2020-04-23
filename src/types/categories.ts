export type CategoryType = {
  key: number
  filterFunction: any
  emoji: string
  category: string
  active: boolean
}

export type CategoryStyledProps = {
  readonly active: boolean
}