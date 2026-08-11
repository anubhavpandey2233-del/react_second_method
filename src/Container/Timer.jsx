import React, { Component } from 'react';

class Timer extends Component {

    //1 Intial value 
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }
    tick = () => {

      this.timeRef= this.setState(this.state.time=new Date())

    }

    //3rd - all after component,mount,data fetch, timer update 

    componentDidMount = () => {
        setInterval(this.tick, 1000)
    }

    //4 it is used to do work when state/props value changed
    componentDidUpdate=(prevProps,prevState)=>{
        console.log("prevstate is:",prevState.time);
        console.log("preProps is:",this.state.time);
        
        if(prevState.time!=this.state.time){
            console.log("componentDidUpdate");
            
        }
    }

    //5 it is used to realsed occupied resources call when we move to another component
    componentWillUnmount=()=>{
        console.log("componentWillUnmount");
        clearInterval(this.timeRef)
        
    }

    //2 call Display = It render everyTime when state or props changed
    render() {
        // console.log(this.state.time);

        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Timer;