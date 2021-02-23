import React, { useState } from "react";
import css from "./App.module.css";

// Project components.
import Navigation from "./Navigation";

// material-ui components.
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const App = () => {
  const [navVisibility, setNavVisibility] = useState(false);

  // function which closes/opens the navigation menu.
  function toggleMenu() {
    setNavVisibility(!navVisibility);
  }

  return (
    <React.Fragment>
      {/* Main container */}
      <Grid container spacing={1}>
        {/* Header */}
        <Grid item xs={12} md={12} lg={12}>
          <AppBar position="static">
            <ToolBar className={css.header}>
              {/* Menu Button (Icon) */}
              <IconButton edge="start" size="medium" onClick={toggleMenu}>
                <MenuIcon className={css.menu_icon} />
              </IconButton>

              {/* Swipeable Navigation (independent of where it is defined) */}
              <Navigation
                options={["Home", "About", "Articles"]}
                visibility={{ navVisibility, setNavVisibility }}
              />
              {/* Heading or site banner */}
              <Typography variant="h4">
                <span className={css.heading}>Offbeats Insights</span>
              </Typography>
            </ToolBar>
          </AppBar>
        </Grid>

        {/* Left Section */}
        <Grid item xs={2} md={1}>
          Left
        </Grid>

        {/* Main Section */}
        <Grid item xs={12} md={12} lg={7}>
          Main
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={12} lg={3}>
          Right
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default App;
