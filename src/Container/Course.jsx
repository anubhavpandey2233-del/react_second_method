import React, { useState } from 'react';
import Fees from './Fees';
import FeesSecond from './FeesSecond';

function Course(props) {

    const [course,setCourse]=useState('')

    return (
        <div>
            <h1>Using Function</h1>
            <select name="course" onChange={(e)=>setCourse(e.target.value)}>
                <option value="0">--Select Course--</option>
                <option value="FullStack">Full Stack</option>
                <option value="DataAnalytics">Data Analytics</option>
                <option value="Python">Python</option>
            </select>

            <h3>
                My course is:
                {
                    course
                }
            </h3>

            {/* <Fees fees={course}/> */}
            <FeesSecond  feesSecond={course}/>
        </div>
    );
}

export default Course;