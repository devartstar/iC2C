import React,{Component} from "react";
import './about.css';
import ReactPlayer from 'react-player';
import Header from '../../components/Navigation/Header/Header';
import Footer from '../../components/Footer/Footer/Footer'
import Layout from '../../hoc/Layout/Layout';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Carosel from '../../components/UI/Carosel/Carosel';
import carousel1 from '../../assets/images/carosel.svg';
import carousel2 from '../../assets/images/carosel.svg';
import carousel3 from '../../assets/images/carosel.svg';
import ImgComponent from '../../components/UI/Carosel/ImgComponent';
import image512x from '../../assets/images/image-5-1@2x.png';
import image812x from "../../assets/images/image-8-1@2x.png";
import image612x from "../../assets/images/image-6-1@2x.png";
import image42x from "../../assets/images/image-4@2x.png";
import image72x from "../../assets/images/image-7@2x.png";
import {Row,Col} from "react-bootstrap";


class AboutUs extends Component {
  state = {
      // import the JSON file and include the content of it in the state variable
      // pass this information to the several other pages
      carosel:[
          <ImgComponent src={carousel1}/>
      ]
    }

    render(){

      return(
        <Layout>
        <div className="container">
          <div>
          <Carosel slider = {this.state.carosel} ></Carosel>
          </div>

          <div className="videointro text-center mt-5">
         <ReactPlayer
         url="https://www.youtube.com/embed/ASExJ2ZnH5s?rel=0"/>
       </div>
       <div className="whatweoffer text-center mt-md-5">
         What we Offer?
         </div>
        <div className="subheading ml-5">For Students</div>
        <Row className="mt-md-5">
          <Col md={4} sm={6} className="text-center">
          <img className="image" src={image512x}  />
          <div className="text mt-md-3">Get Hired By Companies</div>
          </Col>

          <Col md={4} sm={6} className="text-center ">
          <img className="image" src={image812x} />
          <div className="text mt-md-3">View profiles and opportunities</div>

          </Col>

          <Col  md={4} sm={6} className="text-center">
          <img className="image" src={image612x}/>
          <div className="text mt-md-3">A.I. Algorithms based shortlisting</div>

          </Col>

          <Col md={6} sm={6} className="text-center mt-md-5">
          <img className="image" src={image42x}/>
          <div className="text mt-md-3">Gain Insights with Podcasts </div>

          </Col>

          <Col md={6} sm={12} className="text-center mt-md-5">
          <img className="image" src={image72x}/>
          <div className="text} mt-md-3">Get mentored by Industry Experts</div>

          </Col>

        </Row>
        <Footer />
        </div>
        </Layout>
      );
    }






  }
  export default AboutUs;