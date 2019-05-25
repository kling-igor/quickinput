import React, { PureComponent } from 'react'

import { GlobalStyle } from './style'
import { QuickSelect } from './quickselect/component'

const items = [
  { title: 'alpha.js', subtitle: 'src', icon: 'assets/material-icons/git.svg' },
  { title: 'bravo.js', subtitle: 'src', icon: 'assets/material-icons/babel.svg' },
  { title: 'charlie.js', subtitle: 'src', icon: 'assets/material-icons/nodejs.svg' },
  { title: 'delta.js', subtitle: 'src', icon: 'assets/material-icons/file.svg' }
]

const filterItems = (query, items) => {
  const filteredItems = items.filter(({ title, subtitle }) => {
    const text = `${title}/${subtitle || ''}`
    return text.toLowerCase().indexOf(query.toLowerCase()) >= 0
  })

  return filteredItems
}

const filterItems2 = (query, items) => {
  const filteredQuery = query.replace(/\s*|\..*$/gi, '')
  const filteredItems = items.filter(({ title, subtitle }) => {
    return title.toLowerCase().indexOf(filteredQuery.toLowerCase()) >= 0
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
          noResultsText="No results found"
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
          shouldCreateNewItems={true}
          filterItems={filterItems2}
          items={items}
          noResultsText={null}
          darkTheme={true}
          onClosed={() => {}}
          onSelect={({ title }) => {
            console.log('SELECT:', title)
          }}
          placeholder="Controller name"
        />
      </>
    )
  }
}
