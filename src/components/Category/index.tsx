import React from 'react'
import { CategoryType } from '../../types/categories'
import {Styled} from './Category.styles'

const Category = ({
  filterFunction,
  emoji,
  category,
  active,
}: CategoryType) => {
  return (
    <Styled.CategoryWrapper type="button" onClick={() => filterFunction()} active={active}>
      <Styled.IconWrapper active={active}>
        <Styled.Icon>{emoji}</Styled.Icon>
      </Styled.IconWrapper>
      <Styled.Name active={active}>{category}</Styled.Name>
    </Styled.CategoryWrapper>
  )
}

export default Category
