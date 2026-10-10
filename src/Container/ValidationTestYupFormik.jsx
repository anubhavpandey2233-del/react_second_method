import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import TextBoxx from '../component/TextBox';
import { date, number, object, string } from 'yup';

function ValidationTestYupFormik(props) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [dob, setDob] = useState('')
    const [alldata, setAllData] = useState([])

    let yupSchema = object({
        name: string().required(),
        age: number().required().max(90, "Age must be less from 90"),
        dob: date().required().max(new Date(), 'Age must me less than current date')
    })

    //useEffect     localStorage

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("UserInfo"))

        if (userData) {
            console.log(userData);
            setAllData([userData])

            console.log(alldata);
        }


    }, [])

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    age: '',
                    dob: '',
                }}
                validationSchema={yupSchema}
                onSubmit={(values, actions) => {
                    event.preventDefault()
                    console.log(values);

                    localStorage.setItem("UserInfo", JSON.stringify([values]))

                    setAllData([values])
                }}
            >

                <Form >
                    <TextBoxx name="name" type="text" label="Name"

                    />
                    <TextBoxx name="age" type="text" label="Age"

                    />
                    <TextBoxx name="dob" type="date" label=""

                    />
                    <button type='submit'>Submit</button>
                </Form>

            </Formik>

            <div className="displayResult">
                <table border={2}>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Dob</th>
                    </tr>
                    {
                        alldata.map((v, i) => (
                            <tr>
                                <td>{v.name}</td>
                                <td>{v.age}</td>
                                <td>{v.dob}</td>
                            </tr>
                        ))
                    }
                </table>

            </div>
        </>
    );
}

export default ValidationTestYupFormik;