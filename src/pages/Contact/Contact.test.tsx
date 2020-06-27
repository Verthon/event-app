import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import {
  render,
  screen
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import { createMemoryHistory } from 'history'
import Contact from './index'
import store from '../../store'
import { theme } from '../../theme/Theme'

const history: any = createMemoryHistory()
const docData = { data: 'MOCK_DATA' }
const docResult = {
  data: () => docData
}
const get = jest.fn(() => Promise.resolve(docResult))
const set = jest.fn()
const doc = jest.fn(() => {
  return {
    set,
    get
  }
})
const firestore = () => {
  return { doc }
}
firestore.FieldValue = {
  serverTimestamp: () => {
    return 'MOCK_TIME'
  }
}

test('Should print error message, when no name is provided', () => {
  const { getByText, getByRole } = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Contact history={history} location={null} match={null} />
      </ThemeProvider>
    </Provider>
  )
  fireEvent.submit(getByText('Submit'))
  getByRole('alert')
})

test('Should send message successfully', () => {
  const { getByText } = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Contact history={history} location={null} match={null} />
      </ThemeProvider>
    </Provider>
  )
  const nameInput = screen.getByPlaceholderText('name')
  const emailInput = screen.getByPlaceholderText('email')
  const messageInput = screen.getByPlaceholderText('message')
  fireEvent.ionChange(nameInput, 'Correct Name')
  fireEvent.ionChange(emailInput, 'correctemail@gmail.eu')
  fireEvent.ionChange(messageInput, 'Correct, long enough message')
  fireEvent.submit(getByText('Submit'))
  expect(history.location.pathname).toBe('/')
})
