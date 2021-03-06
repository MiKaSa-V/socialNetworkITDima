import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/Profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Messages' activeClassName={classes.active}>Messages</NavLink>
            </div>
            {/* className={`${classes.nav} ${classes.item}`}  - если нужно добавить два класса*/}
            <div className={classes.item}>
                <NavLink to='/Music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/News' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
        </nav>
    );

}
export default NavBar;
