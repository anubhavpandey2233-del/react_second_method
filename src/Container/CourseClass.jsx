import React, { Component } from 'react';
import FeesClass from './FeesClass';

class CourseClass extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            course:''
        }
    }
    

    render() {
        return (
            <div>
                <h1>Using Class</h1>
                <select name="course" onChange={(e) => this.setState({course: e.target.value})}>
                    <option value="0">--Select Course--</option>
                    <option value="FullStack">Full Stack</option>
                    <option value="DataAnalytics">Data Analytics</option>
                    <option value="Python">Python</option>
                </select>

                <h3>
                    My course is:
                    {
                        this.state.course
                    }
                </h3>

                {/* <Fees fees={course}/> */}
                <FeesClass feesClass={this.state.course} />
            </div>
        );
    }
}

export default CourseClass;