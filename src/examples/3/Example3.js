import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'

class Example3 extends React.Component {
    constructor() {
        super()
        this.state = {
            inputTrack: ''
        }
    }

    updateInputTrack(event) {
        this.setState({inputTrack: event.target.value})
    }

    addTrack() {
        if (!this.state.inputTrack) {
            return
        }
        this.props.onAddTrack(this.state.inputTrack)
        this.setState({inputTrack: ''})
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
                <ul>{this.props.testStore.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
        )
    }
}

export default connect(
    state => ({testStore: state}),
    dispatch => ({
        onAddTrack: trackName => {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    })
)(Example3)