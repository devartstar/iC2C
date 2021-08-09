import React, { Component } from 'react';
import {Col,Row} from 'react-bootstrap';
import Podcast from "./Podcast";
import Layout from '../../hoc/Layout/Layout';
import Footer from '../../components/Footer/Footer/Footer';

export default class Podcasts extends Component {
    state = {
        podcast:[
            {
                id:"1",
                title:"Interview preparation tips by Kumar Pratyush(Intern at AppDynamics)",
                image:"/public/box.svg",
                link1:"https://www.youtube-nocookie.com/embed/gEoRZsV_yTY?controls=0",
                link2:"https://www.youtube-nocookie.com/embed/8SkR0zjayrM?controls=0",
                link3:"https://www.youtube-nocookie.com/embed/8SkR0zjayrM?controls=0" 
            },
            {
                id:"2",
                title:"Interview preparation tips by Kumar Pratyush(Intern at AppDynamics)",
                image:"/public/box.svg",
                link1:"https://www.youtube-nocookie.com/embed/gEoRZsV_yTY?controls=0",
                link2:"https://www.youtube-nocookie.com/embed/8SkR0zjayrM?controls=0",
                link3:"https://www.youtube-nocookie.com/embed/8SkR0zjayrM?controls=0" 
  
            },
            {
                id:"3",
                title:"Interview preparation tips by Kumar Pratyush(Intern at AppDynamics)",
                image:"/public/box.svg",
                link1:"https://www.youtube-nocookie.com/embed/gEoRZsV_yTY?controls=0",
                link2:"https://www.youtube-nocookie.com/embed/8SkR0zjayrM?controls=0",
                link3:"https://www.youtube-nocookie.com/embed/8SkR0zjayrM?controls=0" 
            },
            {
                id:"4",
                title:"Interview preparation tips by Kumar Pratyush(Intern at AppDynamics)",
                image:"/public/box.svg",
                link1:"https://www.youtube-nocookie.com/embed/gEoRZsV_yTY?controls=0",
                link2:"https://www.youtube-nocookie.com/embed/8SkR0zjayrM?controls=0",
                link3:"https://www.youtube-nocookie.com/embed/8SkR0zjayrM?controls=0" 
            }
        ]
    }
    render() {
        return(
            <Layout>
            <div className="mt-lg-5">
                 <Row>
                {
                    (this.state.podcast).map(item => {
                    return(
                            <Col lg={6}>
                                <Podcast
                                   title={item.title}
                                   link1={item.link1}
                                   link2={item.link2}
                                   link3={item.link3}
                                />
                            </Col>
                        )
                    })
                }
                </Row>
            </div>
            <Footer />
            </Layout>
        );
    }
/*const Podcasts=(props)=>{

    return(
        <div className="mt-lg-5">
             <Row>
            {
                (props.data).map(item => {
                return(
                        <Col lg={6}>
                            <Podcast
                               title={item.title}
                               link1={item.link1}
                               link2={item.link2}
                               link3={item.link3}
                            />
                        </Col>
                    )
                })
            }
            </Row>
        </div>
    );
};

export default Podcasts; */
}