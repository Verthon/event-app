export enum CategoriesList {
  sport = 'Sport',
  music = 'Music',
  education = 'Education',
  business = 'Business',
  food = 'Food',
}

export type CategoryType = {
  key: number
  filterFunction: Function
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