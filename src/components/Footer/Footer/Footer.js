import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./Footer.css";
import "./Footer.module.css";
import Modal from "react-bootstrap/Modal";
//to be broken further in components
//also trnasition has to be decided
//placement and alignment should be in respect to percentage
function Feedback(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/*<Modal.Title id="contained-modal-title-vcenter">FeedBack</Modal.Title>*/}
      </Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-1by1 ">
          <div className="">
            <iframe
              className="embed-responsive-item"
              src="https://docs.google.com/forms/d/e/1FAIpQLScq1dioBPBub2mV3JKIrm_marni-VCggtDRwSRfCPopXnx55Q/viewform?embedded=true"
              width="800"
              height="600"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
function Subscribe(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/*<Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>*/}
      </Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-1by1 ">
          <div className="">
            <iframe
              className="embed-responsive-item"
              src="https://docs.google.com/forms/d/e/1FAIpQLScIdqQtJHCN3O1Bt8NAh6vzG9hlL4zAzzTRCa3p0pOmg1ZZCg/viewform?embedded=true"
              width="800"
              height="600"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const Footer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowi, setModalShowi] = React.useState(false);
  const style = {
    fontSize: "23px",
  };
  const style1={
    paddingTop: "13px",
    color:"black",
    marginLeft:"100px"
  }
  return (
    <div className=" body col container-fluid ">
      {/*<div class="bgtext centered"></div>*/}
      <div>
        <Row>
          {/* <Col lg={5}>
            <div className="d-none d-lg-block">
              <Row className="justify-content-center secondsection ">
                <Col lg={4}>
                  <div className="num">
                    <img src="/images/logo(2).svg" alt="" className="numimg" />
                    <div className="numtext ">IC2C</div>
                  </div> */}
          {/* <div className=" address">
                    3rd Floor, LBS Hall Complex,
                    <br /> Jaipur-123291
                  </div> */}
          {/* <div className=" mail">Email: ic2c@gmail.com</div>
                </Col>
              </Row>
              <Row className="justify-content-center lastsection">
                <Col lg={11}>@2021 IC2C. All rights reserved</Col>
              </Row>
            </div>
          </Col> */}

          <Col>
            <div className="text-center heading ml-2">
              Connect With Us.
              <div class="icon-bar">
                <a
                  href="http://www.facebook.com/iC2Cindia"
                  class="icon facebook"
                  target="-blank"
                >
                  <i class="fa fa-facebook"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/icampus2corporate"
                  class="icon linkedin"
                  target="-blank"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
                <a
                  id="youtube1"
                  href="http://www.youtube.com/channel/UCZTd7LxOFsMR0LEOKurraTw"
                  class="icon youtube1"
                  target="-blank"
                >
                  <i class="fa fa-youtube"></i>
                </a>
                <a href="https://t.me/joinchat/atBZaIAQ_Zw5NWY1" class="icon telegram" target="-blank">
                  <i class="fa fa-telegram" style={style}></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <Col>
              <div className="text-center heading ">
                Provide your valuable Feedback
              </div>

              <div className="button">
                <Button
                  className="buttonMargin  button"
                  variant="outline-primary"
                  onClick={() => setModalShow(true)}
                >
                  Feedback
                </Button>
              </div>
              <Feedback show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
          </Col>

          <Col lg={4}>
            <div className="text-center heading ">
              Want to get our Latest Updates!
            </div>
            <div className="button">
              <Button
                className="buttonMargin button"
                variant="outline-primary"
                onClick={() => setModalShowi(true)}
              >
                Subscribe
              </Button>
            </div>

            <Subscribe show={modalShowi} onHide={() => setModalShowi(false)} />
          </Col>
        </Row>
      </div>
      <div style={style1} className="  justify-content-center lastsection">
        <p  lg={9}>
          @2021 IC2C. All rights reserved
        </p>
        <p lg={9}>
        <a href="https://drive.google.com/file/d/1LZj5YDRfO9samLdM6HUdec9PwUosfduq/view?usp=sharing" target="_blank">Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;