import { MenuItem, TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

function TextBox({ label, type, ContryData = [], ...props }) {
    const [field, meta] = useField(props);
    console.log(props);
    console.log(ContryData);



    return (
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
            {
                ContryData.map((v, i) => (
                    <MenuItem key={v.value} value={v.value}>
                        {v.label}
                    </MenuItem>
                ))}

        </TextField>

    )
}

export default TextBox;