import React, { useState } from "react";

// Project Components/Styles.
import TextInputField from "./utils/TextInputField";
import ListInputField from "./utils/ListInputField";
import CSS from "./NewDataForm.module.css";

// MaterialUI Components.
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// FORM FOR ADDING A NEW NOTE.
const NewDataFormComponent = (props) => {
  // states of the input fields.
  const [topic, setTopic] = useState("");
  const [objective, setObjective] = useState("");
  const [section, setSection] = useState("");
  const [packageName, setPackageName] = useState("");
  const [pointers, setPointers] = useState([]);

  return (
    <React.Fragment>
      <h2>Notes for {topic}</h2>
      <div className={CSS.form}>
        <form>
          {/** Topic label and its input type="text" field */}
          <TextInputField
            state={{ value: topic, setValue: setTopic }}
            fieldname="Topic"
            css={CSS.wide}
          />

          {/** Objective label and its input type="text" field */}
          <TextInputField
            state={{ value: objective, setValue: setObjective }}
            fieldname="Objective"
            css={CSS.wide}
          />

          {/** Section label and its input type="text" field */}
          <TextInputField
            state={{ value: section, setValue: setSection }}
            fieldname="Section"
            css={CSS.wide}
          />

          {/** Package label and its input type="text" field */}
          <TextInputField
            state={{ value: packageName, setValue: setPackageName }}
            fieldname="PackageName"
            css={CSS.wide}
          />

          {/** Pointers label and its input field */}
          <ListInputField
            state={{ value: pointers, setValue: setPointers }}
            fieldname="Pointers"
            css={CSS.wide}
          />

          <p>
            <Button color="primary" type="submit">
              Submit Topic
            </Button>
            <Button color="primary" type="reset">
              Reset
            </Button>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewDataFormComponent;
