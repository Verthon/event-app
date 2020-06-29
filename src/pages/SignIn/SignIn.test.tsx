import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { createMemoryHistory } from 'history'
import SignIn from './index'
import store from '../../store'
import { theme } from '../../theme/Theme'

const history: any = createMemoryHistory()

const text = 'Login in using your Facebook or Google account.'
test('It renders Home component', async() => {
  const { getByText } = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SignIn history={history} location={null} match={null} />
      </ThemeProvider>
    </Provider>
  )
  expect(getByText(text)).toBeInTheDocument()
})
