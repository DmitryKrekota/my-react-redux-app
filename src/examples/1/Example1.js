import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'

class Example1 extends React.Component {
    playlist(state = [], action) {
        if (action.type === 'ADD_TRACK') {
            return [...state, action.payload]
        }

        return state
    }

    runExample() {
        if (!this.store) {
            this.store = createStore(this.playlist)
            this.store.subscribe(() => {
                console.log('subscribe', this.store.getState())
            })
        }

        this.store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit'})
        this.store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman'})
    }

    render() {
        return (
            <div className="row justify-content-center">
                <button onClick={this.runExample.bind(this)}>Click me and see console 🍕</button>
            </div>
        )
    }
}

export default Example1