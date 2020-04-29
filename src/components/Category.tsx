import React from 'react'
import styled from 'styled-components'
import { CategoryType, CategoryStyledProps } from '../types/categories'

const Category = ({
  filterFunction,
  emoji,
  category,
  active,
}: CategoryType) => {
  return (
    <CategoryWrapper type="button" onClick={filterFunction} active={active}>
      <IconWrapper active={active}>
        <Icon>{emoji}</Icon>
      </IconWrapper>
      <Name active={active}>{category}</Name>
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.button<CategoryStyledProps>`
  min-width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem 1.5rem 0;
  border-radius: 10px;
  background-color: ${props => (props.active ? '#7fd1ae' : '#f6f9f9')};
  box-shadow: 0 1px 3px hsla(0, 50%, 20%, 0.2);
`

const IconWrapper = styled.div<CategoryStyledProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  width: 45px;
  margin: 0.5rem 0 0 0;
  border-radius: 5px;
`

const Icon = styled.span`
  font-size: 1.5rem;
`

const Name = styled.p<CategoryStyledProps>`
  color: ${props =>
    props.active ? 'var(--ion-color-primary)' : 'var(--ion-color-primary)'};
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
`

export default Category
