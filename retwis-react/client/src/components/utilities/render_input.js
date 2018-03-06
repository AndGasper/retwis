import React from 'react';
import TextField from 'material-ui/TextField';
// Set the default text value to label if none were provided, else populate the fields with the old text
export default function renderInput({input, label, type, meta: {active, dirty, touched, error}}) {
    return (
        // <TextField errorText={(touched && !active && dirty && error) }
        // errorStyle={errorText}
        <TextField 
                   floatingLabelStyle={{color: "purple"}}
                   floatingLabelText={label}
                   hintText={label}
                   hintStyle={{color: "pink"}}
                   style={{margin: "1em"}}
                   type={type}
                   {...input}
        />
    )
}