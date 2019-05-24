import React, { PureComponent } from 'react'

import { GlobalStyle } from './style'
import { QuickSelect } from './quickselect/component'

const items = [
  { title: 'alpha', subtitle: 'src', icon: 'assets/material-icons/git.svg' },
  { title: 'bravo', subtitle: 'src', icon: 'assets/material-icons/babel.svg' },
  { title: 'charlie', subtitle: 'src', icon: 'assets/material-icons/nodejs.svg' },
  { title: 'delta', subtitle: 'src', icon: 'assets/material-icons/file.svg' }
]

export default class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <QuickSelect
          items={items}
          darkTheme={true}
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
