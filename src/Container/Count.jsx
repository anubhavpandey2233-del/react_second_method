import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Count(props) {

    const [count, setCount] = useState(0)
    const c=useSelector(state=> state.counter)

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
            <h1>{c.count}</h1>
            <button onClick={() =>handledecrement()}disabled ={count==1}>-</button>
            {count}
            <button onClick={()=>handleIncrement()}disabled={count===5}>+</button>
        </div>
    );
}

export default Count;