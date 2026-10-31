import { Form, Formik } from 'formik';
import React from 'react';
import TextBox from '../component/TextBox';
import { array, boolean, object, string } from 'yup';
import RadioButtons from '../component/RadioButtons';
import CustomCheckBox from '../component/CustomCheckBox';
import FileUpload from '../component/FileUpload';
import Active from '../component/Active';

function LearnFormikYup1(props) {

    let yupSchema = object({
        email: string().required(),
        firstName: string().required(),
        lastName: string().required(),
        country: string().required(),
        gender: string().required(),
        hobby: array().min(2, "Please select atleast 2 hobby"),
        profile: array()
            .test("profileImg", "Plese select only .png,.jpg,jpeg files", function (val) {
                const fileType = ["image/jpg", "image/jpeg", "image/png"]

                return val.every((v) => fileType.includes(v.type))
                console.log(val);

            })
            .test("profileImg", "Plese select files under 2MB", function (val) {
                return val.every((v) => v.size < 1 * 1024 * 1024)
            }),
        active: boolean().oneOf([true], "Active")
    })

    const ContryData = [
        { value: '', label: 'Select Country' },
        { value: 'USA', label: 'USA' },
        { value: 'India', label: 'India' }

    ]

    const radiobuttonsData = [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
        { value: 'other', label: 'Other' }
    ]

    const hobbyData = [
        { value: 'cricket', label: 'Cricket' },
        { value: 'reading', label: 'Reading' },
        { value: 'music', label: 'Music' },
    ]

    return (
        <Formik
            initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                country: '',
                gender: '',
                hobby: [],
                profile: [],
                active: true
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
                <TextBox name="country" ContryData={ContryData} select />
                <RadioButtons name="gender" label="gender" data={radiobuttonsData} />
                <CustomCheckBox name="hobby" label="Hobby" data1={hobbyData} />
                <FileUpload name="profile" multiple={true} />
                <Active name="active" label="Active" />
                <br />
                <br />
                <button type="submit">Submit</button>
            </Form>

        </Formik>
    );

}


export default LearnFormikYup1;