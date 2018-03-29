import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'

class Example2 extends React.Component {
    constructor() {
        super()
        this.store = createStore(this.playlist.bind(this))
        this.store.subscribe(() => {
            this.forceUpdate()
        })
        this.state = {
            inputTrack: ''
        }
    }

    updateInputTrack(event) {
        this.setState({inputTrack: event.target.value})
    }

    playlist(state = [], action) {
        let result

        if (action.type === 'ADD_TRACK') {
            result = [...state, action.payload]
        } else {
            result = state
        }

        return result
    }

    addTrack() {
        if (!this.state.inputTrack) {
            return
        }
        this.store.dispatch({type: 'ADD_TRACK', payload: this.state.inputTrack})
        this.setState({inputTrack: ''})
    }

    generateKey(data) {
        return `${data}_${new Date().getTime()}`
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.inputTrack}
                        onChange={this.updateInputTrack.bind(this)}
                    />
                </div>
                <div className="input-group">
                    <button onClick={this.addTrack.bind(this)}>Add track 🎶</button>
                </div>
                <ul>{this.store.getState().map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
        )
    }
}

export default Example2