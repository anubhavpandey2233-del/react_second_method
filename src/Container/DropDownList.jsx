import React, { useState } from 'react';
import City from './City';

function DropDownList(props) {

    const [countryName,setCountryName]=useState('')

    //Fragment
    return (
        <>
        <div>
            <select name="country" onChange={(e)=>setCountryName(e.target.value)}>
                <option value="0">--select Anyne--</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
            </select>
        </div>
        <h3>My Country is:{countryName}</h3>

        <City cityName={countryName}/>
        </>
    );
}

export default DropDownList;