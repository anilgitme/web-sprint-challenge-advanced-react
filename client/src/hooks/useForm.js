// write your custom hook here to control your checkout form
import React, { useState } from 'react';

export const useForm = (initialValue, setShowsuccessMessage) => {

    const [values, setValues] = useState(initialValue); // using values because looking at the checkoutform thats whats being used
//change handler
    const handleChanges = event => {
        setValues({...values, [event.target.name]: event.target.value})
    };
//submit handler
    const handleSubmit = event => {
        event.preventDefault();
        setShowsuccessMessage(true); 
    };
    return [values, handleChanges, handleSubmit];
};

