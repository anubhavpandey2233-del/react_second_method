import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

function CustomCheckBox({label, data1, ...props}) {

    const [field, meta, helper] = useField(props);
    console.log(field);
    console.log(data1);
    console.log(helper);

    const { setValue } = helper


    return (
        <FormGroup label={label} >
           
            {
                data1?.map((v) => (
                    <FormControlLabel
                        control={
                        <Checkbox
                           {...props}
                           {...field}
                           value={v.value}
                            checked={field.value.includes(v.value)}
                            onChange={(e) => {
                                const { checked, value } = e.target

                                console.log(checked, value);

                                if (checked) {
                                    setValue([...field.value, value])
                                } else {
                                    setValue(field.value?.filter(v => v != value))
                                }
                            }}

                        />}
                         label={v.label}
                    />
                ))
            }
            <p className='error'>
                {
                    meta.error && meta.touched ? meta.error : ''
                }
            </p>

        </FormGroup>
    );
}

export default CustomCheckBox;