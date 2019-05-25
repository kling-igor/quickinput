import React, { useState } from 'react'

import { QuickSelect } from './component'

export const Input = ({ placeHolder, validateInput = () => true, onSelect = () => {} }) => {
  return (
    <QuickSelect
      shouldCreateNewItems={true}
      shouldRenderCreateNewItem={false}
      inputValidator={validateInput}
      items={[]}
      darkTheme={true}
      onSelect={onSelect}
      placeHolder={placeHolder}
    />
  )
}

export const QuickPick = ({ items, placeHolder, noResultsText, onSelect = () => {} }) => {
  return (
    <QuickSelect
      items={items}
      noResultsText={noResultsText}
      darkTheme={true}
      onSelect={onSelect}
      placeHolder={placeHolder}
    />
  )
}

export const InputUnique = ({ items, placeHolder, validateInput, onSelect = () => {} }) => {
  return (
    <QuickSelect
      shouldCreateNewItems={true}
      inputValidator={validateInput}
      items={items}
      darkTheme={true}
      onSelect={onSelect}
      placeHolder={placeHolder}
    />
  )
}
