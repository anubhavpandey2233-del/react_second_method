import React, { Component } from 'react';
import CityClass from './CityClass';

class CountryClass extends Component {

    constructor(props) {
        super(props);
        
       this.state={
           
            countryName:''
        }
        
    }
    
    render() {
        return (
            <>
                <div>
                    <select name="country" onChange={(e)=>this.setState({countryName:e.target.value})}>
                        <option value="0">--select Anyone--</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
                <h3>My Country is :{this.state.countryName}</h3>

                <CityClass cityName={this.state.countryName}/>
               
            </>
        );
    }
}

export default CountryClass;