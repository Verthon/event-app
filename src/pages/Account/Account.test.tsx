import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { createMemoryHistory } from 'history'
import Account from './Account'
import store from '../../store'
import { theme } from '../../theme/Theme'

const history: any = createMemoryHistory()
const docData = { data: 'MOCK_DATA' }
const docResult = {
  // simulate firestore get doc.data() function
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

test('It renders Account component', async () => {
  const { getByText, container } = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Account history={history} location={null} match={null} />
      </ThemeProvider>
    </Provider>
  )
  expect(getByText('Please wait...')).toBeInTheDocument()
  const logoutButton = await screen.findByText('logout')
  if (logoutButton) {
    fireEvent.submit(getByText('logout'))
    expect(container.innerHTML).toHaveTextContent('Events')
  }
})
