

import React from 'react';
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MenuItems.module.css"

const MenuItems = ({ name, url, ico, isToggled, toggle }) => {
    const toggleHandler = () => {
        const width = window.innerWidth;
        if (width < 400) {
            toggle(!isToggled);
        };
        return
    }
    
    return (
      <li>
        <NavLink
          to={url}
          className={classes.link}
                activeClassName={classes.active}
                onClick={toggleHandler}
        >
          {isToggled ? (
            <Fragment>
              <i className={`${ico} ${classes.icon}`}></i>
              {name}
            </Fragment>
          ) : (
            <i className={`${ico} ${classes.icon}`}></i>
          )}
        </NavLink>
      </li>
    );
}
 
export default MenuItems;