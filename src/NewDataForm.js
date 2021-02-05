import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CSS from "./NewDataForm.module.css";

const NewDataFormComponent = () => {
  return (
    <div className={CSS.form}>
      {/** Topic label and its input type="text" field */}
      <TextField label="Topic" variant="standard" className={CSS.wide} />

      {/** Objective label and its input type="text" field */}
      <TextField className={CSS.wide} label="Objective" variant="standard" />

      {/** Section label and its input type="text" field */}
      <TextField className={CSS.wide} label="Section" variant="standard" />

      {/** Package label and its input type="text" field */}
      <TextField className={CSS.wide} label="Package" variant="standard" />

      {/** Privileges label and its input type="text" field */}
      <p className={CSS.topMarginOnly}>
        <FormLabel>Privileges required for operations</FormLabel>
      </p>
      <p className={CSS.noTopMargin}>
        <FormControlLabel
          label="Creation"
          control={
            <Checkbox type="checkbox" name="privileges" value="Creation" />
          }
        ></FormControlLabel>

        <FormControlLabel
          label="Reading"
          control={
            <Checkbox type="checkbox" name="privileges" value="Reading" />
          }
        ></FormControlLabel>

        <FormControlLabel
          label="Modification"
          control={
            <Checkbox type="checkbox" name="privileges" value="Modification" />
          }
        ></FormControlLabel>

        <FormControlLabel
          label="Deletion"
          control={
            <Checkbox type="checkbox" name="privileges" value="Deletion" />
          }
        ></FormControlLabel>
      </p>

      {/** Pointers label and its input type="text" field */}
      <label>Pointers</label>
      <textarea name="pointers" rows="3"></textarea>

      {/** Operations label and its input type="text" field */}
      <TextField className={CSS.wide} label="Operation" variant="standard" />

      {/** Section label and its input type="text" field */}
      <TextField className={CSS.wide} label="Operation" variant="standard" />

      <Button color="primary" type="submit">
        Add
      </Button>
      <Button color="primary" type="reset">
        Reset
      </Button>
    </div>
  );
};

export default NewDataFormComponent;
