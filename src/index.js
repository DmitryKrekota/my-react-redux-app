import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import {HashRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = ['Smells like spirit', 'Enter Sandman']

function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [...state, action.payload]
    }

    return state
}

const store = createStore(playlist)

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('app')
)