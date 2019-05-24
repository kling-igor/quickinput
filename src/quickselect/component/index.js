import React from 'react'
import styled from 'styled-components'
import { MenuItem, Dialog, Classes, Intent } from '@blueprintjs/core'
import { Suggest } from '@blueprintjs/select'
import { toJS } from 'mobx'

require('./bp3.css')

const ItemIconStyle = styled.img`
  margin-right: 4px;
`

const TitleMenuItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const SubtitleMenuItemStyle = styled.span`
  font-size: 12px;
  opacity: 0.7;
`

function escapeRegExpChars(text) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}

function highlightText(text = '', query) {
  let lastIndex = 0
  const words = query
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(escapeRegExpChars)
  if (words.length === 0) {
    return [text]
  }
  const regexp = new RegExp(words.join('|'), 'gi')
  const tokens = []
  while (true) {
    const match = regexp.exec(text)
    if (!match) {
      break
    }
    const length = match[0].length
    const before = text.slice(lastIndex, regexp.lastIndex - length)
    if (before.length > 0) {
      tokens.push(before)
    }
    lastIndex = regexp.lastIndex
    tokens.push(
      <strong key={lastIndex} style={{}}>
        {match[0]}
      </strong>
    )
  }
  const rest = text.slice(lastIndex)
  if (rest.length > 0) {
    tokens.push(rest)
  }
  return tokens
}

export class QuickSelect extends React.Component {
  state = {
    intent: Intent.PRIMARY,
    isOpen: true
  }

  renderMenuItem = ({ icon, title, subtitle }, query) => {
    return (
      <TitleMenuItemStyle>
        {!!icon && <ItemIconStyle height="16" width="16" src={icon} />}
        <span>
          {highlightText(title, query)}
          {!!subtitle && (
            <>
              <span> </span>
              <SubtitleMenuItemStyle>{highlightText(subtitle, query)}</SubtitleMenuItemStyle>
            </>
          )}
        </span>
      </TitleMenuItemStyle>
    )
  }

  renderItem = (item, { handleClick, modifiers, query }) => {
    if (!modifiers.matchesPredicate) {
      return null
    }

    const { title, subtitle } = item

    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        key={`${title}/${subtitle || ''}`}
        onClick={handleClick}
        text={this.renderMenuItem(item, query)}
        textClassName="menu-item"
      />
    )
  }

  onQueryChange = query => {
    // тут можно, например, вызывать колбек для перехода на строку редактора
  }

  handleValueChange = value => {
    this.setState({ isOpen: false })
    this.props.onSelect(value)
  }

  renderInputValue = inputValue => {
    return inputValue
  }

  render() {
    const { placeholder, hint } = this.props

    return (
      <Dialog
        autoFocus={true}
        className={this.props.darkTheme ? 'bp3-dark' : ''}
        isOpen={this.state.isOpen}
        transitionDuration={0}
        // backdropClassName="backdrop"
        inputProps={{ small: true, fill: true }}
        onClosed={this.props.onClosed}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        onClose={() => {
          this.setState({ isOpen: false })
        }}
      >
        <div
          ref={ref => {
            this.divRef = ref
          }}
          className={Classes.DIALOG_BODY}
          style={{
            width: 500,
            height: hint ? 64 : 32 //  /* если выбор из списка, то маленькая (32), если ручной ввод и требуется подсказка, то большая 64 */
          }}
        >
          <Suggest
            items={this.props.items}
            itemRenderer={this.renderItem}
            itemListPredicate={this.props.filterItems}
            onQueryChange={this.onQueryChange}
            closeOnSelect={true}
            openOnKeyDown={false}
            resetOnClose={false}
            resetOnQuery={true}
            resetOnSelect={false}
            inputValueRenderer={this.renderInputValue}
            noResults={<MenuItem disabled={true} text="No results found" />}
            onItemSelect={this.handleValueChange}
            usePortal={false}
            popoverProps={{
              minimal: true,
              // portalContainer: this.divRef,
              targetClassName: 'dialog-input',
              popoverClassName: 'popover'
            }}
            inputProps={{
              inputRef: el => {
                !!el && el.focus()
              },
              small: true,
              fill: true,
              intent: this.state.intent,
              className: 'quickOpenInput',
              placeholder
            }}
          />
        </div>
      </Dialog>
    )
  }
}
