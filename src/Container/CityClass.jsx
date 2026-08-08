import React, { Component } from 'react';

class CityClass extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }



    render() {
        return (
            <div>
                <h5>My city is:
                    {
                        this.props.cityName === 'India' ? 'surat' :
                            this.props.cityName === 'Canada' ? 'Toronto' :
                                this.props.cityName === 'UK' ? 'London' : ''
                    }
                </h5>
            </div>
        );
    }
}

export default CityClass;