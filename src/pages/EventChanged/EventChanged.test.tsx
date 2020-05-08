import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { createMemoryHistory } from 'history'
import EventChanged from './index'
import { theme } from '../../theme/Theme'

const history: any = createMemoryHistory()

const text = 'Your event has been edited succesfully.'
test('It renders EventChanged component', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <EventChanged history={history} location={null} match={null} />
    </ThemeProvider>
  )
  expect(getByText(text)).toBeInTheDocument()
  fireEvent.click(getByText('Back To Account'))
  expect(history.location.pathname).toBe('/account')
})
