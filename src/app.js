import React, { PureComponent } from 'react'

import { GlobalStyle } from './style'
import { QuickSelect } from './quickselect/component'

const items = [
  { title: 'alpha', subtitle: 'src' },
  { title: 'bravo', subtitle: 'src' },
  { title: 'charlie', subtitle: 'src' },
  { title: 'delta', subtitle: 'src' }
]

export default class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <QuickSelect
          items={items}
          darkTheme={false}
          onClosed={() => {
            console.log('onClosed')
          }}
          onSelect={value => {
            console.log('SELECT:', value)
          }}
          placeholder="Select an item"
        />
      </>
    )
  }
}
