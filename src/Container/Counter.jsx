import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/action/counter.action';


function Counter(props) {

    const dispatch =useDispatch();

    const c=useSelector(state=> state.counter)

    const handleInc=()=>{
        dispatch(increment(5))
    }
    const handleDsc=()=>{
        dispatch(decrement(5))
    }

    return (
        <div>
            <button onClick={()=>handleInc()}>+</button>
            <span>{c.count}</span>
            <button onClick={()=>handleDsc()}>-</button>
        </div>
    );
}

export default Counter;