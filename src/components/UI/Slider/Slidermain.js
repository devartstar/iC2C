import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import classes from "./slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineRight} from "react-icons/ai";

// const slidermain=(props)=>{
//     return(
//         <div>
           
//                 {
//                     (props.text).map(item=>{
//                         return(
//                             <React.Fragment>
                            
//                             <Sliderrr
//                             title={item.title}
//                             />
                            
//                             </React.Fragment>
//                         )
//                     })
//                 }
            
//         </div>
//     );

//};

//export default slidermain;

// function NextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
 

export default function sslider(props)
{
    // const ArrowLeft = (props) => (
    //     <button
    //         {...props}
    //         className={'prev text-center'}/>
    // );
    const { className, style, onClick } = props;
    const ArrowRight = (props) => (
        
        <button
            {...props}
            className={`${classes.next} text-center float-right pb-3`}><AiOutlineRight /></button>
    );
    var settings={
        dots:false,
        infinte:true,
        speed:500,
        arrows:true,
        overflowy:false,
        slidesToShow: 4,
        //prevArrow:<ArrowLeft/>,
        nextArrow:<ArrowRight/>,
     // prevArrow: $('classes.slick-prev'),
        // nextArrow: $('classes.slick-next')
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };
    return(
        <div className={` ${classes.contain} mt-5 pb-3`}>
            <Slider {...settings}>
                
                {
                    
                    (props.text).map(item=>{
                          return(
                                <React.Fragment>                              
                                <Col className={classes.column}>
                              <a href="/internship/curated"  className={` text-center ${classes.titleslider}`}><span className="text-center">{item.title}</span></a>
                              </Col>
                              </React.Fragment>

                          )
                    })
                    
            }
        
            </Slider>
        </div>
    );
}