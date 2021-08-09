import React,{useState} from 'react';
import { BiTime } from 'react-icons/bi';
import {FaMapMarkerAlt} from "react-icons/fa";
import {GrUserWorker} from "react-icons/gr";
import {Row, Col} from "react-bootstrap";
import {Button} from "react-bootstrap";

import classes from "./Card.module.css";

function Linkkk(props)
{
  if(props.link)
           {
              return(
                <Button className={`${classes.apply} mt-4`} href={props.link}>Apply Now</Button>
              );
           } else {
             return null;
           }
           

}

const Carddd = (props) => {

  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        {props.extratext}
      </p>
  </div>
  const linkName=readMore?'Read Less ':'Read More'

    return(
    <div className={` ${classes.main} mt-5`}>
        <div className={`${classes.cd} `}>
          
              <div className="title1">
              <Row>
                <Col sm={4} xs={4}>
                  <Row className={`${classes.rows}`}>
                    <Col sm={4} md={5} lg={4} xs={5} classname={`${classes.icons} text-center`}>
            <BiTime className=" mr-2 ml-2 icon"/></Col>
            <Col sm={8} md={7} lg={8} xs={7} className={`${classes.textcolumn} pl-2`}>
            <span className={classes.textsss}>{props.time}</span></Col>
            </Row>
            </Col>
            <Col sm={4} xs={4}><Row>
              <Col sm={4} md={5} lg={4} xs={5} className="text-center iconcolumn">
            <FaMapMarkerAlt className=" mr-2 ml-2 icon"/></Col>
            <Col sm={8} md={7} lg={8} xs={7} className={`${classes.textcolumn} pl-2`}>
            <span className={classes.textsss}>{props.location}</span></Col>
            </Row>
            </Col>
            <Col sm={4} xs={4}><Row>
              <Col sm={4} md={5} lg={4} xs={5} className="text-center">
                             
            <GrUserWorker className="mr-2 ml-2 icon"/></Col>
            <Col sm={8} md={7} lg={8} xs={7} className={`${classes.textcolumn} pl-2 pr-0 w-100`}>
            <span className={`${classes.textsss} w-100`}>{props.type}</span></Col>
            </Row>
            </Col>
            </Row>
            <br/>
            </div>
              
             {/* <div className={classes.title1}>
              <Row>
                <Col classname="text-center">
                <span className={`${classes.icons}`}><BiTime className=" mr-2 ml-2 icon"/></span>
                <span className={`${classes.texts}`}>{props.time}</span>
                </Col>
                <Col classname="text-center">
                  <Row>
                    <Col className={classes.iconcolumn}>
                <span ><FaMapMarkerAlt className=" mr-2 ml-2 icon"/></span>
                </Col>
                <Col>
                <span className={`${classes.texts}`}>{props.location}</span>
                </Col>
                </Row>
                </Col>
                <Col classname="text-center">
                <span>                
                 <GrUserWorker className="mr-2 ml-2 icon"/> </span>
                 <span className={`${classes.texts}`}>{props.type}</span>
                </Col>
              </Row>

             </div> */}
              {/* <div className={`${classes.titleee} d-inline-flex flex-row w-100`}>
                <div className={classes.flexContainer}>
                <div className={`${classes.column} d-inline-flex flex-row`}>
                <span className={`${classes.icons}`}><BiTime className={`${classes.icon} mr-2 ml-2 `}/></span>
                <span className={`${classes.texts}`}>{props.time}</span>
                </div>
                <div className={`${classes.column} d-inline-flex flex-row`}>
                <span className={`${classes.icons}`}><FaMapMarkerAlt className={`${classes.icon} mr-2 ml-2 `}/></span>
                <span className={`${classes.texts}`}>{props.location}</span>
                </div>
                <div className={`${classes.column} d-inline-flex flex-row`}>
                <span className={`${classes.icons}`}><GrUserWorker className={`${classes.icon} mr-2 ml-2 `}/> </span>
                 <span className={`${classes.texts}`}>{props.type}</span>
                </div>


                </div>
              </div>
            <div> */}
              <Row>
                <Col lg={4}>
                  <div className="images">
                  <img src={props.image}  alt="company logo"/>
                  <span className={`${classes.companyname} mt-5`}>{props.name}</span>
                  </div>
                </Col>
                <Col lg={8}>
                  <div className={`${classes.description}`}>
                    Description</div>
                    <div className={`${classes.descbody} mt-2`}>{props.desc} <a className={classes.readmorelink}  onClick={()=>{setReadMore(!readMore)}}>...{linkName}</a>
                    {readMore && extraContent}
                  </div>
                </Col>
              </Row>
            
            </div>
            
            <Linkkk link = {props.link}/>
             {/* {
               this.isLink(props);
                //  function isLink(props)
                //  {
                //    if(props.link)
                //             {
                //                return(
                //                  <Button className={`${classes.apply} mt-4`} href={props.link}>Apply Now</Button>
                //                );
                //             }
                 
                //  }
               }  */}
          </div>
        

    

);
              }

export default Carddd;