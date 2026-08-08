import React, { Component } from 'react';

class ChangeCount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    // handleIncrement() {

    //     this.setState(count + 1)
    // }

    // handledecrement() {
    //     this.setState(count - 1)
    // }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({count:this.state.count - 1})} disabled={this.state.count === 1}>-</button>
                {this.state.count}
                <button onClick={() => this.setState({count:this.state.count + 1})} disabled={this.state.count === 5}>+</button>
            </div>
        );
    }
}

export default ChangeCount;