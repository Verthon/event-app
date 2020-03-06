import React from 'react'
import styled from 'styled-components'
import { ICategory } from '../interfaces'

const Category = (props: ICategory) => {
  return (
    <CategoryWrapper>
      <IconWrapper>
        <Icon>{props.emoji}</Icon>
      </IconWrapper>
      <Name>{props.category}</Name>
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.div`
  background-color: #f6f9f9;
  min-width: 70px;
`

const IconWrapper = styled.div`
  background-color: #dde0e0;
`

const Icon = styled.span`
  font-size: 1.5rem;
`

const Name = styled.p`
  color: var(--ion-color-primary);
`

export default Category
