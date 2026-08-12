import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ChangeBackground(props) {

    const [toggle, setToggle] = useState('black')
    console.log(toggle);


    return (
        <div style={{ backgroundColor: toggle === 'black'? 'black' : 'white', height: '100vh' }}>
            {/* <Button variant="secondary" onClick={() => setToggle(!toggle)}>ChangeBackground</Button> */}

            <Form.Select aria-label="Default select example" onChange={(e)=>setToggle(e.target.value)}>
                <option value="0">--select Background--</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                
            </Form.Select>

        </div>
    );
}

export default ChangeBackground;