import { Form, Formik } from 'formik';
import React from 'react';
import TextBox from '../component/TextBox';
import { object, string } from 'yup';

function LearnFormikYup1(props) {

    let yupSchema = object({
        email: string().required(),
        firstName: string().required(),
        lastName: string().required(),
        country:string().required(),
    })

    const ContryData = [
       {value:'' ,label:'Select Country'},
       {value:'USA' ,label:'USA'},
       {value:'India' ,label:'India'}

    ]

    return (
        <Formik
            initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                country:''
            }}
            validationSchema={yupSchema}
            onSubmit={(values, actions) => {
                console.log(values);

            }}
        >

            <Form>
                <TextBox name="firstName" type="text" label="First Name" />
                <TextBox name="lastName" type="text" label="Last Name" />
                <TextBox name="email" type="email" label="Email" />
                <TextBox name="country" ContryData={ContryData} select/>
                <button type="submit">Submit</button>
            </Form>

        </Formik>
    );

}


export default LearnFormikYup1;