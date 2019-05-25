import React, { PureComponent } from 'react'

import { GlobalStyle } from './style'
import { QuickSelect } from './quickselect/component'

import { Input, QuickPick, InputUnique } from './quickselect'

const items = [
  { label: 'alpha.js', detail: 'src', icon: 'assets/material-icons/git.svg' },
  { label: 'bravo.js', detail: 'src', icon: 'assets/material-icons/babel.svg' },
  { label: 'charlie.js', detail: 'src', icon: 'assets/material-icons/nodejs.svg' },
  { label: 'delta.js', detail: 'src', icon: 'assets/material-icons/file.svg' }
]

const filenameValidator = input => /^[\w\-]*\.[A-Za-z]{2,4}$/.test(input)
const jsonFilenameValidator = input => /^[\w\-]+\.json$/.test(input)
const jsFilenameValidator = input => /^[\w\-]+\.js$/.test(input)

const controllerFilenameValidator = input => /^[\w\-]+(\.js)?$/.test(input)

// const filterItemsNoSpaces = (query, items) => {
//   const filteredQuery = query.replace(/\s*|\..*$/gi, '')
//   const filteredItems = items.filter(({ label, detail }) => {
//     return label.toLowerCase().indexOf(filteredQuery.toLowerCase()) >= 0
//   })

//   return filteredItems
// }

export default class App extends PureComponent {
  state = {
    selectedValue: null
  }

  onValueSelect = value => {
    this.setState({ selectedValue: value })
  }

  render() {
    return (
      <>
        <GlobalStyle />

        {/* ввод значения только из списка  */}
        {/* <QuickSelect
          items={items}
          noResultsText="No results found"
          darkTheme={true}
          onClosed={() => {
            console.log('closed:', this.state.selectedValue.label)
          }}
          onSelect={this.onValueSelect}
          placeHolder="Select an item"
        /> */}

        {/* ввод нового значения с подсказкой уже существующих */}
        {/* <QuickSelect
          shouldCreateNewItems={true}
          inputValidator={jsFilenameValidator}
          items={items}
          darkTheme={true}
          onClosed={() => {
            console.log('closed:', this.state.selectedValue.label)
          }}
          onSelect={this.onValueSelect}
          placeHolder="Provide controller name (Press 'Enter' to confirm or 'Esc' to cancel)"
        /> */}

        {/* ввод значения без подсказок - это вообще не QuickPick */}
        {/* <QuickSelect
          shouldCreateNewItems={true}
          shouldRenderCreateNewItem={false}
          inputValidator={controllerFilenameValidator}
          items={[]}
          darkTheme={true}
          onClosed={() => {
            console.log('closed:', this.state.selectedValue.label)
          }}
          onSelect={this.onValueSelect}
          placeHolder="Provide controller name (Press 'Enter' to confirm or 'Esc' to cancel)"
        /> */}

        <Input
          placeHolder="Provide controller name (Press 'Enter' to confirm or 'Esc' to cancel)"
          validateInput={controllerFilenameValidator}
          onSelect={value => console.log(value)}
        />

        {/* <QuickPick
          items={items}
          placeHolder="Provide controller name (Press 'Enter' to confirm or 'Esc' to cancel)"
          noResultsText="No result found..."
          onSelect={value => console.log(value)}
        /> */}

        {/* <InputUnique
          items={items}
          placeHolder="Provide controller name (Press 'Enter' to confirm or 'Esc' to cancel)"
          validateInput={controllerFilenameValidator}
          onSelect={value => console.log(value)}
        /> */}
      </>
    )
  }
}
