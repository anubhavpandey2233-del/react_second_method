import React, { useEffect, useState } from 'react';

function TimerFunctionlifecycle(props) {

    //1
    const [time, setTime] = useState(new Date())
  

    const tick = () => {
        setTime(new Date)
    }


    useEffect(() => {
        //3 componentDidMount
       const timeRef= setInterval(tick, 1000)

        //4 componentDidUpdate
        // dependency array ->example=> [time]->when dependency not empty.
        //dependency array-> state/props -> value change -> useEffect dunction called.

        //5 ComponentWillUpdate
        return () => {
            clearInterval(timeRef)
        }


    }, [])

    // for Example 
    // useEffect(() => {
      
    //     //4 componentDidUpdate
    //     // dependency array ->example=> [time]->when dependency not empty.
    //     //dependency array-> state/props -> value change -> useEffect dunction called.

       
    // }, [time])



    //2
    
    return (
        <div>
            <p>
                {
                    time.toLocaleTimeString()
                }
            </p>
        </div>
    );
}

export default TimerFunctionlifecycle;