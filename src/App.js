import React, { useState } from "react";
import "./App.module.css";

// Project components.
import Header from "./Header";
import Navigation from "./Navigation";
import { MenuToggleContext } from "./NavigationContext";

// material-ui components.
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import ArticlesIcon from "@material-ui/icons/AppsOutlined";
import AboutIcon from "@material-ui/icons/InfoOutlined";

const App = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [navOptions, setNavOptions] = useState([
    { name: "Home", icon: <HomeIcon /> },
    { name: "Articles", icon: <ArticlesIcon /> },
    { name: "About", icon: <AboutIcon /> },
  ]);

  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <MenuToggleContext.Provider
          value={{
            menuOpened: menuVisibility,
            toggleMenuTo: setMenuVisibility,
          }}
        >
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item md={2}>
            <Navigation options={navOptions} />
          </Grid>
        </MenuToggleContext.Provider>
      </Grid>
    </React.Fragment>
  );
};

export default App;
