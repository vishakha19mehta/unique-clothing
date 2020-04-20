import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormInput = ({handleChange, ...otherProps}) =>
(
    <TextField onChange={handleChange} {...otherProps}/>
)

export default FormInput;