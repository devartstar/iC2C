import React from 'react';
import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidebar.module.css';
// import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <>
            {/* <Backdrop show={props.open} clicked={props.closed} /> */}
            <div className={attachedClasses.join(' ')}>
                {/* <div className={classes.sidebarClose} onClick={props.closed}>X</div> */}
                {/* <div className={classes.Logo}>
                    <Logo />
                </div> */}
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;