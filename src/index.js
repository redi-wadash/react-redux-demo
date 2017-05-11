import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import todoApp from './reducers'
import App from './components/App'

/*
 * Store is a Redux component that manages application's state.
 *
 * createStore has a signature of (reducer, enhancer) => store.
 */
const store = createStore(todoApp, composeWithDevTools(
    applyMiddleware(thunk)
))

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

/* Render your React components inside Redux Provider to integrate them with Redux. */
render(
    <Provider store={store}>
      <App />
    </Provider>,
    mountNode
)
