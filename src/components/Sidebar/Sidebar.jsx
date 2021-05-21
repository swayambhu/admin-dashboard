/** @format */

import classes from "./Sidebar.module.css";
import React, { Fragment, useState } from "react";
import MenuItems from "./MenuItems";


const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  const navItems = [
    {
      name: "Dashboard",
      url: "/dashboard",
      ico: "fas fa-tachometer-alt",
    },
    {
      name: "Expense Tracker",
      url: "/expense-tracker",
      ico: "fas fa-funnel-dollar",
    },
    {
      name: "To-Do List",
      url: "/to-do",
      ico: "fas fa-check",
    },
  ];

  const width = window.innerWidth;

  const toggle = val => {
    setIsToggled(val)
  }
  const renderedPages = navItems.map(({name, url, ico}, index) => (
    <MenuItems name={name} url={url} ico={ico} isToggled={isToggled} toggle={toggle} key={index}/>
  ))

  return (
    <Fragment>
      <nav className={classes.navbar}>
        <button onClick={toggleHandler} className={classes.toggle}>
          {!isToggled ? (
            <i className={`fas fa-bars ${classes.toggleBtn}`}></i>
          ) : (
              <i className={`fas fa-times ${classes.toggleBtn}`}></i>
          )}
        </button>
        <ul className={`${classes.list} ${width < 400 && !isToggled ? classes.visible : ''}`}>{renderedPages}</ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
