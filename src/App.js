import React from "react";

import CSS from "./App.module.css";
import NewDataForm from "./NewDataForm";

const App = () => {
  return (
    <div className={CSS.layout}>
      <NewDataForm />
    </div>
  );
};

export default App;
