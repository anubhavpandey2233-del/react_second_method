import React from 'react';

function City(props) {

    console.log(props.cityName);
    

    return (
        <div>
            <h5>My city is:
                {
                    props.cityName==='India' ? 'surat' :
                    props.cityName==='Canada' ? 'Toronto':
                    props.cityName==='UK' ? 'London' : ''
                }
            </h5>
        </div>
    );
}

export default City;