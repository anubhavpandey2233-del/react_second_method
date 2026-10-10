import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';


function TextBoxx({ type, label, ...props }) {
    const [field, meta] = useField(props);
    console.log(field);
    console.log(props);
    
    

    return (
        <div>
            <TextField
                {...field}
                {...props}
                error={meta.error && meta.touched}
                margin="normal"
                id="name"
                label={label}
                type={type}
                fullWidth
                helperText={meta.error && meta.touched ? meta.error : ''}
            >

            </TextField>
        </div>
    );
}

export default TextBoxx;