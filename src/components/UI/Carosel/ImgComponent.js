import React from 'react';
import classes from './ImgComponent.module.css';


const ImgComponent = ({src}) => {
    return(
        <img src={src} alt="CaroselImage" className={classes.imgStyles}></img>
    )
}

export default ImgComponent;