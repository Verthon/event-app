import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { createMemoryHistory } from 'history'
import Home from './index'
import { theme } from '../../theme/Theme'

const history: any = createMemoryHistory()

const text = 'Eventoo is a perfect place to build, manage and grow your events.'
test('It renders Home component', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Home history={history} location={null} match={null} />
    </ThemeProvider>
  )
  expect(getByText(text)).toBeInTheDocument()
  fireEvent.click(getByText('Explore'))
  expect(history.location.pathname).toBe('/events')
})
