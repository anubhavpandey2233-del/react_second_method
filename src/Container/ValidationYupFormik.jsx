import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { array, object, string } from 'yup';
import { useFormik } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Form from 'react-bootstrap/Form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';




const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


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



        gender: string()
            .required("Please select gender"),

        hobby: array().min(2, "Please select atleast 2 hobby"),


        profileImg: array()
            .test("profileImg", "Plese select only .png,.jpg,jpeg files", function (val) {
                const fileType = ["image/jpg", "image/jpeg", "image/png"]

                return val.every((v) => fileType.includes(v.type))
                console.log(val);

            })
            .test("profileImg", "Plese select files under 2MB", function (val) {
                return val.every((v) => v.size < 2 * 1024 * 1024)
            }),

            country:string().required("Please select any country.")
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            date: '',
            description: '',
            gender: '',
            hobby: [],
            profileImg: [],
            country:''
        },
        validationSchema: categorySchema,
        onSubmit: values => {
            console.log(values);

        },
    });
    console.log(formik.errors);

    //Destructuring
    const { handleSubmit, touched, handleChange, handleBlur, errors, values, setFieldValue, setFieldTouched } = formik

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

                            <FormGroup>
                                <FormControlLabel

                                    control={<Checkbox
                                        name='hobby'
                                        value='Criket'
                                        checked={values.hobby.includes('Criket')}
                                        onChange={(e) => {
                                            const { checked, value } = e.target

                                            console.log(checked, value);

                                            if (checked) {
                                                setFieldValue("hobby", [...values.hobby, value])
                                            } else {
                                                setFieldValue("hobby", values.hobby?.filter(v => v != value))
                                            }
                                        }}

                                    />} label="Criket"

                                />
                                <FormControlLabel

                                    control={<Checkbox
                                        name='hobby'
                                        value='Reading'
                                        checked={values.hobby.includes('Reading')}
                                        onChange={(e) => {
                                            const { checked, value } = e.target

                                            console.log(checked, value);

                                            if (checked) {
                                                setFieldValue("hobby", [...values.hobby, value])
                                            } else {
                                                setFieldValue("hobby", values.hobby?.filter(v => v != value))
                                            }
                                        }}
                                    />} label="Reading"

                                />
                                <FormControlLabel

                                    control={<Checkbox
                                        name='hobby'
                                        value='Music'
                                        checked={values.hobby.includes('Music')}

                                        onChange={(e) => {
                                            const { checked, value } = e.target

                                            console.log(checked, value);

                                            if (checked) {
                                                setFieldValue("hobby", [...values.hobby, value])
                                            } else {
                                                setFieldValue("hobby", values.hobby?.filter(v => v != value))
                                            }
                                        }}
                                    />} label="Music"

                                />
                                <p className='error'>
                                    {
                                        errors.hobby && touched.hobby ? errors.hobby : ''
                                    }
                                </p>
                            </FormGroup>

                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload files
                                <VisuallyHiddenInput
                                    name='profileImg'
                                    type="file"
                                    onChange={(event) => {
                                        const files = Array.from(event.target.files)
                                        setFieldValue("profileImg", files)
                                        console.log(files);

                                        setFieldTouched("profileImg", true, false)

                                    }
                                    }
                                    multiple
                                />
                            </Button>
                            <p className='error'>
                                {
                                    errors.profileImg && touched.profileImg ? errors.profileImg : ''
                                }
                            </p>
                            {
                                values.profileImg?.map((v) => (
                                    <img src={URL.createObjectURL(v)} alt="" width={"100px"} height={"100px"} />
                                ))
                            }

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name='country'
                                        value={values}
                                        label="Country"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'0'}>select contry</MenuItem>
                                        <MenuItem value={'india'}>INDIA</MenuItem>
                                        <MenuItem value={'usa'}>USA</MenuItem>
                                    </Select>
                                    <p className='error'>
                                        {
                                            errors.country && touched.country ? errors.country : ''
                                        }
                                    </p>
                                </FormControl>
                            </Box>

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