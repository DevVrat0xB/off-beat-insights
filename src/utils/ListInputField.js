import React, { useState } from "react";

// MaterialUI Components.
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// PROPERTIES
// state: State reference (from parent form component) having the structure as
// { value: fieldValue, setValue: function to update value}
// fieldname: Label of the field.
// desc: description/hint for each item field.
// validator: function referrence which validates each input item.
// css (optional): styling provided by the parent component.
const ListInputFieldComponent = (props) => {
  const state = props.state;
  const heading = props.fieldname ? props.fieldname : "Pointers";
  const fieldHint = props.desc ? props.desc : "Mention pointer";
  const validator = props.validator;
  const baseStyling = props.css;

  // stores the real-time value of a single list input field.
  const [listItemValue, setListItemValue] = useState("");
  const updateListItemValue = (event) => {
    const value = event.target.value;
    setListItemValue(value);
  };

  // stores all the created list items (as state is defined in parent component).
  const createListItem = () => {
    // TODO: Validate the pointer body.
    // saving the pointer at the last index.
    const itemIndex = state.value.length;
    const itemObj = { index: itemIndex, itemBody: listItemValue };
    state.setValue([...state.value, itemObj]);
    setListItemValue("");
  };

  return (
    <React.Fragment>
      {/** All the finalized pointers are shown here **/}
      <ul>
        {state.value.map((itemObj) => {
          return <li>{itemObj.itemBody}</li>;
        })}
      </ul>

      {/** Pointers label and its input type="text" field */}
      <p className={CSS.topMarginOnly}>
        <FormLabel>{heading}</FormLabel>
      </p>
      <TextField
        className={baseStyling}
        multiline
        rowsMax="5"
        label={fieldHint}
        variant="standard"
        onChange={updateListItemValue}
        value={listItemValue}
      />

      <Button color="primary" type="button" onClick={createListItem}>
        Add
      </Button>
    </React.Fragment>
  );
};

export default ListInputFieldComponent;
