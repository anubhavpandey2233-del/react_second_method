import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


function Calculator(props) {

    const [fisrtInput, setFirstInput] = useState();
    const [secondInput, setSecondInput] = useState();
    const [optr, setOptr] = useState();
    const [ans,setAns]=useState()


    const handleSubmit = () => {
        event.preventDefault()
        console.log(fisrtInput, secondInput, optr);

        let cal 

        if (optr == '+') {
            cal = fisrtInput + secondInput
        } else if (optr == '-') {
            cal = fisrtInput - secondInput
        }
        else if (optr == '*') {
            cal = fisrtInput * secondInput
        }
        else if (optr == '/') {
            cal = fisrtInput / secondInput
        }
     
        setAns(cal)
      

    }
    return (
        <div className='mt-4'>
            <form action="" onSubmit={() => handleSubmit()}>
                <input type="number" placeholder='enter value 1' onChange={(e) => setFirstInput(parseInt(e.target.value))} /><br /><br />
                <input type="number" placeholder='enter value 2' onChange={(e) => setSecondInput(parseInt(e.target.value))} /><br /><br />
                <Button variant="secondary" type={'submit'} value={'+'} style={{ marginRight: '10px' }} onClick={(e) => setOptr(e.target.value)}>+</Button>
                <Button variant="secondary" type={'submit'} value={'-'} style={{ marginRight: '10px' }} onClick={(e) => setOptr(e.target.value)}>-</Button>
                <Button variant="secondary" type={'submit'} value={'*'} style={{ marginRight: '10px' }} onClick={(e) => setOptr(e.target.value)}>*</Button>
                <Button variant="secondary" type={'submit'} value={'/'} style={{ marginRight: '10px' }} onClick={(e) => setOptr(e.target.value)}>/</Button>
                
            </form>
           <p>
            {
                ans
            }
           </p>
        </div>
    );
}

export default Calculator;