import React, { useState } from 'react';

function DropDownList(props) {

    const [country, setCountry] = useState()

    return (
        <div>
            <select name={country} id="ddl" onChange={(a) => setCountry(a.target.value)}>
                <option value="0">---Select Anyone---</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="Japan">Japan</option>
                <option value="Korea">Korea</option>
            </select>

            {
                country && (
                    <h3>My country is {country}</h3>
                )
            }

        </div>
    );
}

export default DropDownList;