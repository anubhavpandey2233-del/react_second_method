import React from 'react';

function Fees(props) {
    console.log(props.fees);

    return (
        <div>
            <h4>Fees of this course is:
                {
                    props.fees === 'FullStack' ? 60000 :
                        props.fees === 'DataAnalytics' ? 70000 :
                            props.fees === 'Python' ? 50000 :''
                }
            </h4>
        </div>
    );
}

export default Fees;