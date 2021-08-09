import React from "react";
import {Col, Row, Form, Button} from "react-bootstrap";
import "./Footer.css";

//to be broken further in components
//also trnasition has to be decided
//placement and alignment should be in respect to percentage 

const Footer=()=>{
    return(
        <div className="container-fluid mt-5">
            <Row>
                <Col lg={6}>
                <div className="text-center heading mt-lg-5">Provide your valuable Feedback</div>
                <Row className="justify-content-center mt-3">
                    <Col lg={5}>
                    <Form.Control placeholder="Full Name" className="pt-2"/>
                    </Col>
                    <Col lg={5}>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={10}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Write your feedback here."/>
               </Form.Group>
               </Col>               
               </Row>
               <div class="button">
               <Button type="submit justify-content-center" className="buttonb">Submit Feedback</Button> </div>
                    </Col>
                <Col lg={6}>
                <div className="text-center heading mt-sm-5">Want to get our Latest Updates!</div>
                <Row className="justify-content-center mt-3">
                    <Col lg={5}>
                    <Form.Control placeholder="Full Name" className="pt-2"/>
                    </Col>
                    </Row>
                    <Row className="justify-content-center mt-3">
                    <Col lg={5}>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <div class="button">
               <Button type="submit justify-content-center" className="mt-lg-5 buttonb">Subscribe</Button> </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <div className="d-none d-lg-block">
            <Row className="justify-content-center secondsection ">
                <Col lg={4}>
                    <div className="num">
                        <img src="/images/logo(2).svg" alt="" className="numimg"/>
                        <div className="numtext ml-4">IC2C</div>
                    </div>
                    <div className="mt-3 address">
                        3rd Floor, LBS Hall Complex,<br/> Jaipur-123291
                        
                    </div>
                    <div className="mt-4 mail">
                    Email: ic2c@gmail.com
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="title mt-lg-2">
                        Curated Internships</div>
                        <ul className="mt-3 pl-0">
                            <li><a href="#">Software and IT</a></li>
                            <li><a href="#">Consultancy</a></li>
                             <li><a href="#">Core</a></li>
                             <li><a href="#">Business Development</a></li>
                             <li><a href="#"> Machine Learning</a></li>
                        </ul>
                    
                </Col>
                <Col lg={2}>
                    <div className="title mt-lg-2">
                        Videos
                    </div>
                    <ul className="mt-3 pl-0">
                            <li><a href="#">Software and IT</a></li>
                            <li><a href="#">Consultancy</a></li>
                             <li><a href="#">Core</a></li>
                        </ul>
                </Col>
                <Col lg={2}>
                    <div className="title mt-lg-2">
                        Podcasts
                    </div>
                    <ul className="mt-3 pl-0">
                            <li><a href="#">Software and IT</a></li>
                            <li><a href="#">Consultancy</a></li>
                             <li><a href="#">Business Development</a></li>
                             <li><a href="#"> Machine Learning</a></li>
                        </ul>
                    
                </Col>
                <Col lg={2}>
                    <div className="title mt-lg-2">
                        Competitions
                    </div>
                    <ul className="mt-3 pl-0">
                            <li><a href="#">Software and IT</a></li>
                            <li><a href="#">Consultancy</a></li>
                             <li><a href="#">Core</a></li>
                             <li><a href="#">Business Development</a></li>
                             <li><a href="#"> Machine Learning</a></li>
                        </ul>
                    
                </Col>
            </Row>
            <Row className="justify-content-center lastsection">
                <Col lg={11}>
                @2021 IC2C. All rights reserved
                </Col>
            </Row></div>
        </div>

   
    );

};

export default Footer; 
                                           