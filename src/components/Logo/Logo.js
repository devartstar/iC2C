import React from 'react';
import ic2cLogo from '../../assets/images/Logo.png';
import classes from './Logo.module.css';


const logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={ic2cLogo} alt="MyBurger" />
    </div>
);

export default logo;