import classes from './NavigationItems.module.css';
import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl, InputGroup} from "react-bootstrap";

const NavigationItems = () => {
    return (
        <div className={classes.item}>
            {/* This will contain all the Navigation Items */}
            <BrowserRouter>
                <Nav.Link href="/internship/curated" className={classes.link1}><p>Curated Internships</p></Nav.Link>
                <Nav.Link href="/referrals" className={classes.link1} ><p>Referrals</p></Nav.Link>
                <Nav.Link href="/about" className={classes.link1}><p>About Us</p></Nav.Link>
            </BrowserRouter>
        </div>
    );
};

export default NavigationItems;