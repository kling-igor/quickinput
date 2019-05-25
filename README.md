https://code.visualstudio.com/api/references/vscode-api
https://atom.io/docs/api/v1.37.0/AtomEnvironment

```
vision.workspace.showQuickPick(makeValues, {
  placeHolder: 'Input controller filename...'
})
.then(selected => {})

const validateInput = (input) => {
  // test input
  // if ok return null or undefined
  // else return human readable message
}

vision.workspace.showInputBox(
{
  placeHolder:'Input controller filename...',
  validateInput
  })
  .then(value => {

  }
)
```
