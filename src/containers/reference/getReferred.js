import React, { useState } from "react";
import "./getReferred.css";
import Footer from "../../components/Footer/Footer/Footer";
import Layout from "../../hoc/Layout/Layout";
import { Modal, Row, Col, Button } from "react-bootstrap";
import style from "../../containers/Podcast/Podcast.module.css";

//import Header from '../../components/Navigation/Header';
//import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
//import carousel1 from "/images/carosel.svg";
//import Carosel from '../../components/UI/Carosel/Carosel' ;
function GetReferredStudents(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
       {/*} <Modal.Title id="contained-modal-title-vcenter">
          Referral Form
  </Modal.Title>*/}
      </Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-1by1">
          <div className="">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQ5aqSQgolDjVM3Jw_iikOYUteEjYDNz6DujEr4py6TdY32Q/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function GetReferredLaterals(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
       {/*} <Modal.Title id="contained-modal-title-vcenter">
          Referral Form
  </Modal.Title>*/}
      </Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-1by1">
          <div className="">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdLxY9sN3Il1cIAg9unFHHdI5uei5LhRs2yAIV8DhZvS1DkxQ/viewform?embedded=true" width="640" height="3397" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function ReferSomeone(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
       {/*} <Modal.Title id="contained-modal-title-vcenter">
          Referral Form
  </Modal.Title>*/}
      </Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-1by1">
          <div className="">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekar_68ZsdigA4ghudDlYTDD1AKJNiEGjLK5lDYTTm7OxyRg/viewform?embedded=true" width="640" height="1403" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const Reffer = () => {
  const [modalShowRefree, setModalShowReferee] = React.useState(false);
  const [modalShowStudent, setModalShowStudent] = React.useState(false);
  const [modalShowWorking, setModalShowWorking] = React.useState(false);

  return (
    <Layout>
    <div className="d-flex justify-content-center ">
    <Col className="size2">
      <Row>
        <div className="col-lg-5 container embed-responsive embed-responsive-4by3">
          <iframe
            className="youtube  "
            src="https://www.youtube.com/embed/mYPDTeTD3A0"
            allowfullscreen
          ></iframe>
        </div>
      </Row>
    <>
      <div className="  Getrefered align-bottom text-center">
          <Button
            className="mr-3 mt-3  btn btn-lg button"
            variant="outline-primary"
            onClick={() => setModalShowStudent(true)}
          >
            Get Referred for Students
          </Button>

          <Button
            className="btn mr-3 mt-3  btn-lg button "
            variant="outline-primary"
            onClick={() => setModalShowWorking(true)}
          >
          Get Referred for Laterals
          </Button>

          <Button
            className="btn mr-3 mt-3 btn-lg  button"
            variant="outline-primary"
            onClick={() => setModalShowReferee(true)}
          >
            Refer Someone
          </Button>

        </div>
          </>
        </Col>
    </div>

    <GetReferredStudents show={modalShowStudent} onHide={() => setModalShowStudent(false)} />
    <GetReferredLaterals show={modalShowWorking} onHide={() => setModalShowWorking(false)} />
    <ReferSomeone show={modalShowRefree} onHide={() => setModalShowReferee(false)} />

    
    <div className=" col-lg-8 col-md-10 col-sm-10 container justify-content-center "></div>
    <div className=" col-lg-8 col-md-10 col-sm-10 container justify-content-center ">
    <h4>
    Companies to choose from :
    </h4>
      <div className="col loader ">
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrF5TEV4J9VK9wMs?backgroundColor=gray&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
      </div>
    </div>


    <Footer />
    </Layout>
  );
};

export default Reffer;