import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props) {
        super(props)
        this.state =
            { count: 0 }


    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {



        return (

            <div className='container' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <center>  <h1>count</h1>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.increment}>click</button>
                </center>
            </div>
        )
    }
}
