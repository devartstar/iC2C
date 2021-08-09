import React from 'react';
import Card from './Card/Card';
import {Row, Col} from "react-bootstrap";
import classes from './Cards.module.css';
import "./Cards.module.css";

const Cards = (props) => {
    
    return (
        <div className=" ml-5 mr-5 mt-5">
            <Row>
            {
                (props.cardData).map(item => {
                return(
                        <Col xl={6}>
                            <Card 
                                time={item.time} 
                                location ={item.location} 
                                type={item.type} 
                                img={item.image}
                                name={item.name}
                                desc={item.desc}
                                link={item.link}
                                extratext={item.extratext}
                            />
                        </Col>
                    )
                })
            }
            </Row>
        </div>
    );
};

export default Cards;