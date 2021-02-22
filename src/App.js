import React from "react";
import css from "./App.module.css";

// material-ui components.
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";

const App = () => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <AppBar position="static" className={css.header}>
            <ToolBar>
              <IconButton edge="start" size="medium">
                <MenuIcon className={css.menu_icon} />
              </IconButton>
              <Typography variant="h4">
                <box component="span" className={css.heading}>
                  Offbeats Insights
                </box>
              </Typography>
            </ToolBar>
          </AppBar>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          Left
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          Main
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          Right
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default App;
