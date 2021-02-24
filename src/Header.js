import React, { useContext } from "react";

import css from "./Header.module.css";
import { MenuToggleContext } from "./NavigationContext";

// material-ui components.
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const { menuOpened, toggleMenuTo } = useContext(MenuToggleContext);

  return (
    <AppBar position="static">
      <ToolBar variant="dense" className={css.header}>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={() => toggleMenuTo(!menuOpened)}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h5">
          <span className={css.heading}>Offbeats Insights</span>
        </Typography>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
