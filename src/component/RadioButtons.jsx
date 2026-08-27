import { FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';
import { useField } from 'formik';
import React from 'react';



function RadioButtons({ label, data, ...props }) {
    const [field, meta] = useField(props);
    // console.log(props, "ok", "okkk");
    console.log(field);
    console.log(meta);
    console.log(data);
    
    return (
        <div>
            <FormControl>
                <FormLabel id={`${label}-label`}>{label}</FormLabel>
                <RadioGroup
                    {...field}
                    aria-labelledby={`${label}-label`}

                >
                    {
                        data.map((v)=>(
                            <FormControlLabel value={v.value} control={<Radio />} label={v.label} />
                        ))
                    }
                </RadioGroup>
                <p className='error'>
                    {
                       meta.error && meta.touched ? meta.error : ''
                    }
                </p>
            </FormControl>
        </div>
    );
}

export default RadioButtons;