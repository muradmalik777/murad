import React from "react";
import "./sidebar.scss";
import { Drawer, List, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <>
      <Drawer anchor={"left"} open={true} variant={"permanent"} classes={{ paper: "sidebar", docked: "parent" }}>
        <List>
          {["home", "about", "experience", "projects", "contact"].map((item, index) => (
            <ListItem key={index} className={"menu-item"}>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={item === "home" ? "/murad" : "/murad/" + item}>
                {item}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
