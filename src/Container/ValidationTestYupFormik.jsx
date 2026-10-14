import React, { useEffect, useState } from 'react';
import { Formik, Form } from "formik";
import TextBox from '../component/TextBox';
import { date, number, object, string } from 'yup';
import { FaTrashCan } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";
import EmailTextBox from '../component/EmailTextBox';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeruser } from '../redux/action/form.action';

function ValidationTestYupFormik(props) {

    const [alldata, setAlldata] = useState([])
    const [edit, setEdit] = useState(null)

    let yupSchema = object({
        name: string().required(),
        age: number().required().max(90, "Age must be less from 90"),
        dob: date().required().max(new Date(), 'Age must me less than current date'),
        email: string().required()
    })

    const dispatch=useDispatch()

    const userAddData=useSelector(state=>state.formData)

    console.log(userAddData);

    const handleDelete=(id)=>{
        console.log(id);
        
        dispatch(removeruser(id))
    }
    
    // useEffect(() => {
    //     let uData = JSON.parse(localStorage.getItem("UserData"))

    //     if (uData) {
    //         setAlldata(uData)
    //     }
    //     console.log(uData);
    // }, [])

    // const handleDelete = (id) => {
    //     let delData = alldata.filter((v) => v.id != id)

    //     console.log(delData);

    //     setAlldata(delData)

    //     localStorage.setItem("UserData", JSON.stringify(delData))

    //     // let delIndex = alldata.filter((v) => v.id == id)
    //     // let x = [...alldata]
    //     // console.log( delIndex);
    //     // x.splice( delIndex, 1)
    //     // console.log(x);

    //     // setAlldata(x)

    //     // localStorage.setItem("UserData", JSON.stringify(x))

    // }

    // const handleEdit = (id, FormikData) => {
    //     let editIndex = alldata.find((v) => v.id == id)
    //     console.log(editIndex);

    //     FormikData.setValues(editIndex)

    //     setEdit(id)

    // }

    return (
        <div>
            <h2>Form Using Yup Formik validation</h2>
            <Formik

                initialValues={{
                    name: '',
                    age: '',
                    dob: '',
                    email: ''
                }}
                validationSchema={yupSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);

                   dispatch(adduser({...values, id: crypto.randomUUID()}))

                    // let obj = {
                    //     id: crypto.randomUUID(),
                    //     ...values
                    // }

                    // let localdata = JSON.parse(localStorage.getItem("UserData"))

                    // if (edit === null) {
                    //     if (localdata) {
                    //         localdata.push(obj)
                    //         localStorage.setItem("UserData", JSON.stringify(localdata))
                    //         setAlldata(localdata)
                    //     } else {
                    //         localStorage.setItem("UserData", JSON.stringify([obj]))
                    //         setAlldata([obj])
                    //     }
                    // } else {
                    //     let index = alldata.findIndex((v) => v.id === edit)

                    //     console.log(index);

                    //     localdata[index]=obj

                    //     localStorage.setItem("UserData", JSON.stringify(localdata))
                    //     setAlldata(localdata)

                    //     setEdit(null)

                    // }

                    // resetForm();



                    // localdata.push(obj)

                    // localStorage.setItem("UserData", JSON.stringify(localdata))

                    // setAlldata(localdata)

                }}
            >
                {
                    (FormikData) => (
                        <>
                            <Form>
                                <TextBox type="text" label="name" name="name" />
                                <TextBox type="text" label="age" name="age" />
                                <TextBox type="date" label="" name="dob" />
                                <EmailTextBox type="email" label="email" name="email" />
                                <button type='submit'>Submit</button>
                            </Form>

                            <div className="displayResult">
                                <table border={2}>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Dob</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                    {
                                        userAddData?.userData?.map((v, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{v.name}</td>
                                                <td>{v.age}</td>
                                                <td>{v.dob}</td>
                                                <td>{v.email}</td>
                                                <td>
                                                    <FaTrashCan onClick={() => handleDelete(v.id)} />
                                                    <TiPencil onClick={() => handleEdit(v.id)} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </table>

                            </div>
                        </>
                    )
                }

            </Formik>

        </div>

    );
}

export default ValidationTestYupFormik;