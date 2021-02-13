import React, { useState } from "react";

import CSS from "./App.css";
import NewDataForm from "./NewDataForm";

const App = () => {
  return (
    <React.Fragment>
      <div className={CSS.layout}>
        <NewDataForm />
      </div>
    </React.Fragment>
  );
};

export default App;
