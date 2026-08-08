import React, { Component } from 'react';

class FeesClass extends Component {
    constructor(props) {
        super(props);

        // let Courses = {
        //     "FullStack": {
        //         fees: "$600",
        //         duration: '12 months'
        //     },
        //     'DataAnalytics': {
        //         fees: "$300",
        //         duration: '6 months'
        //     },
        //     'Python': {
        //         fees: "$200",
        //         duration: '3 months'
        //     }
        // }

        this.state = {
            allFees: {
                "FullStack": {
                    fees: "$600",
                    duration: '12 months'
                },
                'DataAnalytics': {
                    fees: "$300",
                    duration: '6 months'
                },
                'Python': {
                    fees: "$200",
                    duration: '3 months'
                }
            }
        }

                console.log(this.props.feesClass);

    }

    
    

    render() {
        console.log(this.state.allFees, this.props.feesClass);
        
        return (
            <div>
                <p>Fess is:{this.state.allFees[this.props.feesClass]?.fees}</p>
                <p>Duration is:{this.state.allFees[this.props.feesClass]?.duration}</p>

            </div>
        );
    }
}

export default FeesClass;