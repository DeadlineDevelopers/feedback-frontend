import React from 'react';
import TextField from 'material-ui/TextField';

/* eslint-disable react/prop-types */

export const renderInput = ({ input, meta: { dirty, error }, ...custom }) => (
  <TextField
    id={input.name}
    errorText={dirty && error}
    {...input}
    {...custom}
  />
);

/* eslint-enable react/prop-types */
