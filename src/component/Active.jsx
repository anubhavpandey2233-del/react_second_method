import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useField } from 'formik';


function Active({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={<Switch {...field} />

                    }
                    label="Label"
                />

            </FormGroup>
            <p className='error'>
                {
                    meta.error && meta.touched ? meta.error : ''
                }
            </p>
        </>
    );
}

export default Active;