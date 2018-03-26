import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'

class Example2 extends React.Component {
    constructor() {
        super()
        this.store = createStore(this.playlist)
        this.store.subscribe(() => {
            console.log('subscribe', this.store.getState())
        })
    }

    playlist(state = [], action) {
        if (action.type === 'ADD_TRACK') {
            return [...state, action.payload]
        }

        return state
    }

    addTrack() {
        this.store.dispatch({type: 'ADD_TRACK', payload: 'Smells like spirit'})
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" />
                </div>
                <div className="input-group">
                    <button onClick={this.addTrack.bind(this)}>Add track 🎶</button>
                </div>
            </div>
        )
    }
}

export default Example2