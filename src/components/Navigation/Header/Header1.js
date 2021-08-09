import React from 'react';
import classes from './Header1.module.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../Sidebar/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <p>LOG IN</p>
            <p>SIGN UP</p>
        </nav>
        <searcher>
        <i class="fa fa-search" aria-hidden="true" className={classes.searcher}></i>
        </searcher>
    </header>
);

export default toolbar;