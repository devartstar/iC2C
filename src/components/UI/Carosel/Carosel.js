import React, { useState } from 'react';
import classes from './Carosel.module.css';


const Carosel = (props) => {

    let sliderArr = props.slider;
    const [x,setX] = useState(0);

    const goLeft = () => {
        console.log(x);
        (x=== 0)?setX(-100*(sliderArr.length-1)):setX(x+100);
    }

    const goRight = () => {
        console.log(x);
        (x=== -100*(sliderArr.length-1))?setX(0):setX(x-100);
    }

    return (
        <div className={classes.slider}>
            {
                sliderArr.map((item,index)=>{
                    return(
                        <div key={index} className={classes.slide} style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button className={classes.goLeft} onClick={goLeft}></button>
            <button className={classes.goRight} onClick={goRight}></button>
        </div>
    );
};

export default Carosel;