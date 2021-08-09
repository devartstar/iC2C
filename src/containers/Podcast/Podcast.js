import React,{useState} from 'react';
import 'react-bootstrap';
import style from "./Podcast.module.css";
import Modal from 'react-bootstrap/Modal';
import {Row,Col,Button,Container} from "react-bootstrap";
import Iframe from 'react-iframe';

function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered className="modals">
        <Modal.Header closeButton>

        </Modal.Header>
        {/*<Modal.Body className="show-grid">
          <Container>
  
          <Row>
          <Col xs={6} md={4} lg={4}>
          <Iframe src={props.link1} className={style.image2}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" scrolling="auto"/>
          {/* <Iframe url="http://www.youtube.com/embed/xDMP3i36naA" 
            className={style.image2}
            display="initial"
            />
            
          </Col>
          <Col xs={6} md={4} lg={4}>
          <Iframe src={props.link2} className={style.image2} display="initial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" scrolling="auto"/>
          
          </Col>
          <Col xs={12} md={4} lg={4}>
          <Iframe src={props.link3} className={style.image2}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" scrolling="auto"/>
          
          </Col>
        </Row>
          </Container>
          </Modal.Body> */}
      <Modal.Body className="show-grid">
        <Container>
          <Col>
            <Row>
              <Iframe
                src={props.link1}
                className={style.image2}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allow="fullscreen"
                scrolling="auto"
              />
              {/* <Iframe url="http://www.youtube.com/embed/xDMP3i36naA" 
            className={style.image2}
            display="initial"
            /> */}
            </Row>
            <Row>
              <Iframe
                src={props.link2}
                className={style.image2}
                display="initial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allow="fullscreen"
                scrolling="auto"
              />
            </Row>
            <Row>
              <Iframe
                src={props.link3}
                className={style.image2}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allow="fullscreen"
                scrolling="auto"
              />
            </Row>
          </Col>
        </Container>
      </Modal.Body>
      </Modal>
      
    );
  }
 
const Podcast = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="mt-4 ml-3 mt-5">
            
            <div className={`${style.imagebox}`} onClick={() => setModalShow(true)} onMouseOver={handleShow}>
            <img src="./box.svg" className={`${style.image} w-75` }/>
            <div className={`${style.imagetext}`}>{props.title}</div>
            </div>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} className={`${style.modalgrid}`} 
            link1={props.link1} link2={props.link2} link3={props.link3} />
            {/* /*<Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Body className={`${style.titlemodal}`}>Click on the box to view more</Modal.Body>
          </Modal.Header>
        </Modal>*/ }

        </div>
    );
};

export default Podcast;