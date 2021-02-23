import React from "react";

// Material-UI components.
import SwipeableNav from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// Properties:
// options: List of options that are to be shown in the menu.
// trigger: function reference that may cause the menu to toggle.
const NavigationComponent = (props) => {
  const menuOptions = props.options;
  const { navVisibility, setNavVisibility } = props.visibility;

  // renders the menu options inside the navigation.
  const renderMenuOptions = () => {
    return (
      <List>
        {menuOptions.map((option, index) => {
          return (
            <ListItem
              button
              key={index}
              onClick={() => setNavVisibility(false)}
            >
              <ListItemText>{option}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <SwipeableNav
      open={navVisibility}
      onOpen={() => setNavVisibility(true)}
      onClose={() => setNavVisibility(false)}
    >
      {renderMenuOptions()}
    </SwipeableNav>
  );
};

export default NavigationComponent;
