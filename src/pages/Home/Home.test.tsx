import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, getByText } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { createMemoryHistory } from 'history'
import Home from './index'

const history = createMemoryHistory()

const text = 'Eventoo is a perfect place to build, manage and grow your events.'
test('It renders Home component', () => {
  const { getByText } = render(<Home history={history} location={null} match={null}/>)
  expect(getByText(text)).toBeInTheDocument()
})