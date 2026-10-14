import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { date, number, object, string } from 'yup';
import { useFormik } from 'formik';
import { FaTrashCan } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";

function ValidationUseFormik(props) {

    const [alldata, setAlldata] = useState();
    const [edit, setEdit] = useState(null)

    let formSchema = object({
        name: string().required(),
        age: number().required(),
        dob: date().required(),
        email: string().required()

    })



    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            dob: '',
            email: ''
        },
        validationSchema: formSchema,
        onSubmit:( values,{resetForm}) => {

            console.log(values);

            let obj = {
                id: crypto.randomUUID(),
                ...values
            }

            let localdata = JSON.parse(localStorage.getItem("udata"));

            if (edit === null) {
                if (localdata) {
                    localdata.push(obj)
                    localStorage.setItem("udata", JSON.stringify(localdata))
                    setAlldata(localdata)
                } else {
                    localStorage.setItem("udata", JSON.stringify([obj]))
                    setAlldata([obj])
                }
            }else{
                let editindex=localdata.findIndex((v)=>v.id==edit)
                console.log(editindex);

                localdata[editindex]=obj

                localStorage.setItem("udata",JSON.stringify(localdata))

                setAlldata(localdata)
                
                setEdit(null)
            }

            resetForm()


        },
    })

    useEffect(() => {
        let userdata = JSON.parse(localStorage.getItem("udata"))

        if (userdata) {
            setAlldata(userdata)
        }
        console.log(userdata);


    }, [])

    const handleDelete = (id) => {
        let delIndex = alldata.filter((v) => v.id != id)
        console.log(delIndex);

        setAlldata(delIndex)

        localStorage.setItem("udata", JSON.stringify(delIndex))

    }

    const { handleBlur, handleChange, handleSubmit, errors, touched, setValues, values } = formik


    const handleEdit = (id) => {
        let editObj = alldata.find((v) => v.id == id)

        console.log(edit);

        console.log(editObj);

        console.log(setValues);

        setValues(editObj)

        setEdit(id)

    }

    // console.log(values);
    

    return (
        <div>
            <h3>Validation Using UseFormik() with localStorage</h3>


            <>
                <form action="" onSubmit={handleSubmit}>
                    <TextField
                        error={errors.name && touched.name}
                        value={values.name}
                        margin="normal"
                        id="name"
                        type='text'
                        name='name'
                        label='enter name'
                        onChange={handleChange}
                        helperText={errors.name && touched.name ? errors.name : ''}
                    >
                    </TextField>
                    <br />
                    <TextField
                        error={errors.age && touched.age}
                        value={values.age}
                        margin="normal"
                        id="age"
                        type='number'
                        name='age'
                        label='enter name'
                        onChange={handleChange}
                        helperText={errors.age && touched.age ? errors.age : ''}
                    >
                    </TextField>
                    <br />
                    <TextField
                        error={errors.dob && touched.dob}
                        value={values.dob}
                        margin="normal"
                        id="dob"
                        type='date'
                        name='dob'
                        label=''
                        onChange={handleChange}
                        helperText={errors.dob && touched.dob ? errors.dob : ''}
                    >
                    </TextField>
                    <br />
                    <TextField
                        error={errors.email && touched.email}
                        value={values.email}
                        margin="normal"
                        id="email"
                        type='email'
                        name='email'
                        label='enter email'
                        onChange={handleChange}
                        helperText={errors.email && touched.email ? errors.email : ''}
                    >
                    </TextField>

                    <br /><br />
                    <button type='submit'>Submit</button>
                </form>

                <div className="displayRecord">
                    <table border={2}>

                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>

                        {
                            alldata?.map((v, i) => (
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



        </div>
    );
}

export default ValidationUseFormik;