import dayjs from 'dayjs'
import { CategoriesList } from '../types/categories'

export const createEventInitialState = {
  title: '',
  host: '',
  localization: '',
  address: '',
  description: '',
  categories: [
    CategoriesList.sport,
    CategoriesList.music,
    CategoriesList.education,
    CategoriesList.business,
    CategoriesList.food,
  ],
  category: CategoriesList.sport,
  imageUrl: '',
  day: dayjs().format('YYYY-MM-DD'),
  hour: '13:00',
}