import React, { useState } from "react";
import "react-bootstrap";
import style from "./Podcast.module.css";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Button, Container } from "react-bootstrap";
import Iframe from "react-iframe";

function MydModalWithGrid(props) {
  const [open, setOpen] = React.useState(false);
  return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}
      >
        <p>
        </p>
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
      <div
        className={`${style.imagebox}`}
        onClick={() => setModalShow(true)}
        onMouseOver={handleShow}
      >
        <img src="./box.svg" className={`${style.image} w-75`} />
        <div className={`${style.imagetext}`}>{props.title}</div>
      </div>
      <MydModalWithGrid
        show={modalShow}
        onHide={() => setModalShow(false)}
        className={`${style.modalgrid}`}
        link1={props.link1}
        link2={props.link2}
        link3={props.link3}
      />
      {/* /*<Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Body className={`${style.titlemodal}`}>Click on the box to view more</Modal.Body>
          </Modal.Header>
        </Modal>*/}
    </div>
  );
};

export default Podcast;