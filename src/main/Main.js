import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/Home'
import Example1 from '../examples/1/Example1'

const Main = () => (
    <main>
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-12">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/example-1" component={Example1} />
                    </Switch>
                </div>
            </div>
        </div>
    </main>
)

export default Main