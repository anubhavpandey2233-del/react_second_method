import { FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

function RadioButtons({ label, radiobuttonsData, ...props }) {
    const [field, meta] = useField(props);
    console.log(props, "ok");
    

    return (
        <div>
            <FormControl>
                <FormLabel >Gender</FormLabel>
                <RadioGroup
                    {...field}
                    {...props}
                >
                </RadioGroup>
                {
                    radiobuttonsData.map((v, i) => (
                        <FormControlLabel
                            key={v.value}
                            value={v.value}
                            control={<Radio />}
                            label={v.label}
                        />
                    ))}

                <p className='error'>
                    {
                        meta.gender && meta.touched ? meta.gender : ''
                    }
                </p>
            </FormControl>
        </div>
    );
}

export default RadioButtons;