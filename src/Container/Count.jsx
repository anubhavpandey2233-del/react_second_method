import React, { useState } from 'react';

function Count(props) {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
            console.log("increment");
            setCount(count+1)
    }

    const handledecrement = () => {
        console.log("decrement");
        setCount(count-1)
    }

    return (
        <div>
            <button onClick={() =>handledecrement()}disabled ={count==1}>-</button>
            {count}
            <button onClick={()=>handleIncrement()}disabled={count===5}>+</button>
        </div>
    );
}

export default Count;