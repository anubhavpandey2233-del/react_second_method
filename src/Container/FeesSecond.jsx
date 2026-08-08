import React from 'react';

function FeesSecond(props) {
    console.log(props.feesSecond);

    let Courses = {
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

    return (
        <div>
            <p>Fess is:{Courses[props.feesSecond]?.fees}</p>
            <p>Duration is:{Courses[props.feesSecond]?.duration}</p>
        </div>
    );
}

export default FeesSecond;