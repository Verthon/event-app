import React from 'react'
import styled from 'styled-components'
//import { ICategory } from '../interfaces'

const Category = (props: any) => {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem 1.5rem 0;
  border-radius: 10px;
`

const IconWrapper = styled.div`
  background-color: #dde0e0;
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

const Name = styled.p`
  color: var(--ion-color-primary);
  font-size: 0.875rem;
  margin: 0.75rem 0 0.5rem 0;
`

export default Category
