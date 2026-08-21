import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Form from 'react-bootstrap/Form';


function ValidationYupFormik(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    let categorySchema = object({
        name: string()
            .required("Please enter name...")
            .matches(/^[a-zA-Z ]+$/, "Please enter valid name"),

        email: string()
            .required("Please enter name...")
            .email("Please enter valid email"),

        number: string()
            .required("Please enter number")
            .length(10, "Number should be 10 digits")
            .matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/, "Please enter valid number"),

        date: string()
            .required()
            .test("date", "Invalid dob", function (dt) {
                console.log(dt);

                if (new Date > new Date(dt)) {
                    return true
                } else {
                    return false
                }
            }),

        description: string()
            .required("Please enter descrtiption...")
            .test("description", "Maximum 5 words are allowed", function (val) {
                console.log(val);

                let arr = val.split(" ");

                if (arr.length <= 5) {
                    return true
                } else {
                    return false
                }


            }),
        // .min(5,"Minimu 5 letter required")
        // .max(20,"Maximum 20 letter you can write")

        file: string()
            .required()
            .test("file", "Please choose file under given critegira", function (val) {

                const allowedfiles = ['image/jpeg', 'image/jpg', 'image/png']

                console.log(val.type, allowedfiles.includes(val.type));

                if (allowedfiles.includes(val.type)) {
                    return true;

                    if (val.size < 2 * 1024 * 1024) {
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    return false;
                }

            }),

        gender: string()
            .required("Please select gender"),

        hobbies: string()
            .required()
            .test("hobbies", "please select 2 hobby", function (val) {
                console.log(val);

            })

    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            date: '',
            description: '',
            file: '',
            gender: '',
            hobbies: ''
        },
        validationSchema: categorySchema,
        onSubmit: values => {
            console.log(values);

        },
    });
    console.log(formik.errors);

    //Destructuring
    const { handleSubmit, touched, handleChange, handleBlur, errors } = formik

    return (

        <Box>
            <h2 className='my-4'>Formik Yup Validation</h2>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Formik
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Formik</DialogTitle>
                    <DialogContent>

                        <form onSubmit={handleSubmit} id="subscription-form">
                            <TextField
                                error={errors.name && touched.name}
                                margin="normal"
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="standard"
                                helperText={errors.name && touched.name ? errors.name : ''}
                            />
                            <TextField
                                error={errors.email && touched.email}
                                margin="normal"
                                id="email"
                                name="email"
                                label="Email"
                                type="text"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="standard"
                                helperText={errors.email && touched.email ? errors.email : ''}
                            />

                            <TextField
                                error={errors.number && touched.number}
                                margin="normal"
                                id="number"
                                name="number"
                                label="Number"
                                type="number"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="standard"
                                helperText={errors.number && touched.number ? errors.number : ''}
                            />
                            <TextField
                                error={errors.date && touched.date}
                                margin="normal"
                                id="date"
                                name="date"
                                type="date"
                                fullWidth
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="standard"
                                helperText={errors.date && touched.date ? errors.date : ''}
                            />

                            <TextField
                                error={errors.description && touched.description}
                                margin="dense"
                                id="description"
                                name="description"
                                label="Description"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                multiline
                                rows={5}
                                helperText={errors.description && touched.description ? errors.description : ''}
                            />

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>File</Form.Label>
                                <Form.Control
                                    type="file"
                                    name='file'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p className='error'>
                                    {
                                        errors.file && touched.file ? errors.file : ''
                                    }
                                </p>
                            </Form.Group>

                            <FormControl>
                                <FormLabel id={`gender-label`}>Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby={`gender-label`}
                                    name="gender"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                                <p className='error'>
                                    {
                                        errors.gender && touched.gender ? errors.gender : ''
                                    }
                                </p>
                            </FormControl>

                            <FormGroup
                                name="hobbies"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <FormControlLabel control={<Checkbox />} label="Reading" />
                                <FormControlLabel control={<Checkbox />} label="Traveling" />
                                <FormControlLabel control={<Checkbox />} label="Singing" />

                                <p className='error'>
                                    {
                                        errors.hobbies && touched.hobbies ? errors.hobbies : ''
                                    }
                                </p>
                            </FormGroup>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" form="subscription-form">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </Box>
    );
}

export default ValidationYupFormik;