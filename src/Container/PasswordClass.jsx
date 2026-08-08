import React, { Component } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

class PasswordClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggle:''
        }
    }


    render() {
        return (
            <>
                <input type={this.state.toggle ? "password" : "abc"} placeholder='enter password' />
                <button onClick={() => this.setState({toggle:!this.state.toggle})}>

                    {
                        this.state.toggle ? <FaEye /> : <FaEyeSlash />
                    }


                </button>
            </>
        );
    }
}

export default PasswordClass;