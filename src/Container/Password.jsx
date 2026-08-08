import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Password(props) {

    const [toggle, setToggle] = useState(true)

    return (
        <div>
          
            <input type={toggle ? "password" : "abc"} placeholder='enter password' />
            <button onClick={() =>setToggle(!toggle) }>

                {
                    toggle ? <FaEye /> :<FaEyeSlash />
                }
                   
                
            </button>
        </div>
    );
}

export default Password;