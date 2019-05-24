import React, { PureComponent } from 'react'

import { GlobalStyle } from './style'
import { QuickSelect } from './quickselect/component'

const items = [
  { title: 'alpha', subtitle: 'src', icon: 'assets/material-icons/git.svg' },
  { title: 'bravo', subtitle: 'src', icon: 'assets/material-icons/babel.svg' },
  { title: 'charlie', subtitle: 'src', icon: 'assets/material-icons/nodejs.svg' },
  { title: 'delta', subtitle: 'src', icon: 'assets/material-icons/file.svg' }
]

const filterItems = (query, items) => {
  const filteredItems = items.filter(({ title, subtitle }) => {
    const text = `${title}/${subtitle || ''}`
    return text.toLowerCase().indexOf(query.toLowerCase()) >= 0
  })

  return filteredItems
}

const filterItems2 = (query, items) => {
  const filteredItems = items.filter(({ title, subtitle }) => {
    return title.toLowerCase().indexOf(query.toLowerCase()) >= 0
  })

  return filteredItems
}

export default class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />

        {/* ввод знычения из списка 
        
        <QuickSelect
          items={items}
          filterItems={filterItems}
          darkTheme={true}
          onClosed={() => {
            console.log('onClosed')
          }}
          onSelect={value => {
            console.log('SELECT:', value)
          }}
          placeholder="Select an item"
        />
         */}

        <QuickSelect
          unique={true}
          filterItems={filterItems2}
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
