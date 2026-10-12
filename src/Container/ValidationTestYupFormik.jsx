import React, { useEffect, useState } from 'react';
import { Formik, Form } from "formik";
import TextBox from '../component/TextBox';
import { date, number, object, string } from 'yup';
import { FaTrashCan } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";

function ValidationTestYupFormik(props) {

    const [alldata, setAlldata] = useState([])

    let yupSchema = object({
        name: string().required(),
        age: number().required().max(90, "Age must be less from 90"),
        dob: date().required().max(new Date(), 'Age must me less than current date')
    })

    useEffect(() => {


        let uData = JSON.parse(localStorage.getItem("UserData"))

        if (uData) {
            setAlldata(uData)
        }
        console.log(uData);
    }, [])

    const handleDelete = () => {

    }

    const handleEdit = () => {

    }

    return (
        <div>
            <h2>Form Using Yup Formik validation</h2>
            <Formik

                initialValues={{
                    name: '',
                    age: '',
                    dob: '',
                }}
                validationSchema={yupSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    let UserData = {
                        id: crypto.randomUUID(),
                        ...values
                    }

                    localStorage.setItem("UserData", JSON.stringify([values]))

                    let newData = JSON.parse(localStorage.getItem("UserData"))

                    newData.push(values)

                    console.log(newData);

                    localStorage.setItem("UserData", JSON.stringify(newData))

                    setAlldata([...newData])


                }}
            >
                <Form>
                    <TextBox type="text" label="name" name="name" />
                    <TextBox type="text" label="age" name="age" />
                    <TextBox type="date" label="" name="dob" />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
            <div className="displayResult">
                <table border={2}>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Dob</th>
                        <th>Actions</th>
                    </tr>
                    {
                        alldata.map((v, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{v.name}</td>
                                <td>{v.age}</td>
                                <td>{v.dob}</td>
                                <td>
                                    <FaTrashCan onClick={() => handleDelete(v.id)} />
                                    <TiPencil onClick={() => handleEdit(v.id)} />
                                </td>
                            </tr>
                        ))
                    }
                </table>

            </div>
        </div>
    );
}

export default ValidationTestYupFormik;