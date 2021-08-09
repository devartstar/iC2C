import React from 'react';
import classes from './Header.module.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../Sidebar/DrawerToggle/DrawerToggle';
import {Link, BrowserRouter} from 'react-router-dom';
import {Nav} from "react-bootstrap";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <BrowserRouter>
        <nav className={classes.DesktopOnly}>
            {/*<Link to={"/"} className={classes.link1}><p className={classes.link}>Home</p></Link>
            <Link to={"/about"} className={classes.link1}><p className={classes.link}>About Us</p></Link>
            */}
            <p className = {classes.passion}>YOUR FUTURE, OUR PASSION!!</p>
        </nav>
        </BrowserRouter>
    </header>
);

export default toolbar;