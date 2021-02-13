import React, { useEffect, useState } from "react";

import CSS from "./TextInputField.module.css";

// MaterialUI Components.
import TextField from "@material-ui/core/TextField";

// A simple text input field which is validated against the provided validator.
// The validator is a function that returns either true or false for validity.

// PROPERTIES
// state: State reference (from parent form component) having the structure as
// { value: fieldValue, setValue: function to update value}
// fieldname: name/label of the field.
// validator: function reference.
// css (optional): CSS for the component.
const TextInputFieldComponent = (props) => {
  const state = props.state;
  const fieldName = props.fieldname;
  const validator = props.validator;
  const baseStyling = props.css ? [props.css] : [CSS.default];

  // context provider which manages all the form data
  // in which this component is attached.
  const [isfieldValid, setFieldValidity] = useState(false);

  // field is always valid in case no validation function is provided.
  useEffect(() => {
    validator === undefined ? setFieldValidity(true) : setFieldValidity(false);
    console.log(isfieldValid);
  }, [validator]);

  // processing input field (including validation, if provided).
  const processInputField = (event) => {
    const newInputValue = event.target.value;
    state.setValue(newInputValue);

    // perform validation if a validation function is provided.
    if (validator !== undefined) setFieldValidity(validator(newInputValue));
  };

  return (
    <TextField
      label={fieldName}
      value={state.value}
      variant="standard"
      // classes are not working.
      className={
        isfieldValid
          ? [...baseStyling, CSS.valid_field].join(" ")
          : [...baseStyling, CSS.invalid_field].join(" ")
      }
      onChange={processInputField}
    />
  );
};

export default TextInputFieldComponent;
