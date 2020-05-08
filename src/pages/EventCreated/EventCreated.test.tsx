import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { createMemoryHistory } from 'history'
import EventCreated from './index'
import { theme } from '../../theme/Theme'

const history: any = createMemoryHistory()

const text = 'Your event has been added succesfully.'
test('It renders EventCreated component', () => {
  const { container, getByText } = render(
    <ThemeProvider theme={theme}>
      <EventCreated history={history} location={null} match={null} />
    </ThemeProvider>
  )
  expect(getByText(text)).toBeInTheDocument()
  fireEvent.click(getByText('Back To Home'))
  expect(container.innerHTML).toHaveTextContent('Events')
})