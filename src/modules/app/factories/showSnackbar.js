import {set, merge, debounce} from 'cerebral/operators'
import {state} from 'cerebral/tags'

const snackbarDebounce = debounce.shared()

function showSnackbar (text, ms, type = 'normal') {
  if (!ms) {
    return [
      merge(state`app.snackbar`, {text, type})
    ]
  }

  return [
    merge(state`app.snackbar`, {text, type}),
    snackbarDebounce(ms), {
      continue: [
        set(state`app.snackbar`, null)
      ],
      discard: []
    }
  ]
}

export default showSnackbar
