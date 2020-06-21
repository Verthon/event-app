import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { createMemoryHistory } from 'history'
import Account from './index'
import store from '../../store'
import { theme } from '../../theme/Theme'

const history: any = createMemoryHistory()

test('It renders Account component', () => {
  const { getByText, container } = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Account history={history} location={null} match={null} />
      </ThemeProvider>
    </Provider>
  )
  fireEvent.submit(getByText('logout'))
  //expect(container.innerHTML).toHaveTextContent('Events')
})
