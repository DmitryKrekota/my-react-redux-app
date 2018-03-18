import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'

render(<div>Hello!</div>, document.getElementById('app'))

function playlist(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [...state, action.payload]
    }

    return state
}

const store = createStore(playlist)

store.subscribe(() => {
    console.log('subscribe', store.getState())
})

store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit'})
store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman'})