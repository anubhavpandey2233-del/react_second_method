import React from 'react';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

function EmailTextBox({ label, type, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div>
            <TextField
                {...field}
                {...props}
                margin="normal"
                error={meta.error && meta.touched}
                id="name"
                label={label}
                type={type}
                fullWidth
                helperText={meta.error && meta.touched?meta.error:''}
            >
            </TextField>
        </div>
    );
}

export default EmailTextBox;