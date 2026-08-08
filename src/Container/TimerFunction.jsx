import React, { useState } from 'react';

function TimerFunction(props) {

    const [time,setTime]=useState()

    

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimerFunction;