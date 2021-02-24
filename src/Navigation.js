import React, { useContext } from "react";

import css from "./Navigation.module.css";
import { MenuToggleContext } from "./NavigationContext";

import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Toolbar from "@material-ui/core/Toolbar";

// Properties:
// options: List of options that are to be shown in the menu.
// trigger: function reference that may cause the menu to toggle.
const NavigationComponent = (props) => {
  const menuOptions = props.options;
  const { menuOpened, toggleMenuTo } = useContext(MenuToggleContext);

  function renderMenuOptions() {
    return (
      <React.Fragment>
        {menuOptions.map((option, index) => {
          return (
            <ListItem button key={index} className={css.itemIcon}>
              <ListItemIcon>{option.icon}</ListItemIcon>
            </ListItem>
          );
        })}
      </React.Fragment>
    );
  }

  // renders the menu options inside the navigation.
  return (
    <React.Fragment>
      <Hidden smDown>
        <Drawer variant="permanent">
          <Toolbar />
          <Toolbar />
          <div className={css.drawerContainer}></div>
          <List>{renderMenuOptions()}</List>
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <SwipeableDrawer
          open={menuOpened}
          onClose={() => toggleMenuTo(false)}
          onOpen={() => toggleMenuTo(true)}
        >
          <List>{renderMenuOptions()}</List>
        </SwipeableDrawer>
      </Hidden>
    </React.Fragment>
  );
};

export default NavigationComponent;
