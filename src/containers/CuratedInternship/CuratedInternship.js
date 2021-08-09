import React, {Component} from 'react';
import DataCarosel from "../../Data/Carosel.json";
import classes from '../Homepage/Homepage.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Header from '../../components/Navigation/Header/Header';
import Carosel from '../../components/UI/Carosel/Carosel';
import {Carousel, Button} from "react-bootstrap";

import carousel1 from  '../../assets/images/carosel.svg';
import carousel2 from '../../assets/images/carosel.svg';
import carousel3 from '../../assets/images/carosel.svg';
import ImgComponent from '../../components/UI/Carosel/ImgComponent';

import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer/Footer';
import Sliderrr from "../../components/UI/Slider/Slidermain";
//import {HomeWrapper} from "../components/UI/Slider/slider";
import Layout from '../../hoc/Layout/Layout';
import Blog from "../../components/Blogs/Blogs";
import "./iframe.css"
export default class Curated extends Component{
    state = {
        // import the JSON file and include the content of it in the state variable
        // pass this information to the several other pages
        carosel:[
            <ImgComponent src={carousel1}/>,
            <ImgComponent src={carousel2}/>,
            <ImgComponent src={carousel3}/>,
            <ImgComponent src={carousel3}/>
        ],
        curatedIntership : [
            {
                time:"2 months",
                location:"Work from Home",
                type:"Software Developer Intern",
                image:"/public/samsung-1.png",
                name: "Samsung",
                desc: "Member of Technical staff of the company, build xyz abcdef ghi jklm mnop",
                link: "https://www.linkedin.com/in/mr-optimizer/",
                extratext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime."
            },
            {
                time:"2 months",
                location:"Work from Abroad",
                type:"Software Developer Intern",
                image:"/public/samsung-1.png",
                name: "Samsung",
                desc: "Member of Technical staff of the company, build xyz abcdef ghi jklm mnop",
                link:"www.linkedin.com",
                extratext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime."
            },
            {
                time:"2 months",
                location:"Work from Home",
                type:"Software Developer Intern",
                image:"/public/samsung-1.png",
                name: "Samsung",
                desc: "Member of Technical staff of the company, build xyz abcdef ghi jklm mnop",
                extratext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime."
                
            },
            {
                time:"5 months",
                location:"Work from Home",
                type:"Software Developer Intern",
                image:"/public/samsung-1.png",
                name: "Samsung",
                desc: "Member of Technical staff of the company, build xyz abcdef ghi jklm mnop",
                extratext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime."
                
            }
        ],
        blog:[
            {
                "id":"1",
                "title":"Shipping Career with Artificial Intelligence",
                "content":"An efficient AI based hiring Solution"
            },
            {
                "id":"2",
                "title":"Shipping Career with Machine Learning",
                "content":"Learn from the best tutors available"
            },
            {
                "id":"3",
                "title":"Shipping Career with Competetive coding",
                "content":"Join our competetive coding community"
            },
            {
                "id":"4",
                "title":"Shipping Career with Artificial Intelligence",
                "content":"An efficient AI based hiring Solution"
            },
            {
                "id":"5",
                "title":"Shipping Career with Machine Learning",
                "content":"Learn from the best tutors available"
            },
            {
                "id":"6",
                "title":"Shipping Career with Competetive coding",
                "content":"Join our competetive coding community"
            }
        ],
        podcast:[
            {
                id:"1",
                title:"Interview preparation tips by Kumar Pratyush(Intern at AppDynamics)",
                image:"/public/box.svg"
            },
            {
                id:"2",
                title:"Interview preparation tips by Kumar Pratyush(Intern at AppDynamics)",
                image:"/public/box.svg"
  
            },
            {
                id:"3",
                title:"Interview preparation tips by Kumar Pratyush(Intern at AppDynamics)",
                image:"/public/box.svg"
            },
            {
                id:"4",
                title:"Interview preparation tips by Kumar Pratyush(Intern at AppDynamics)",
                image:"/public/box.svg"
            }
        ],
            text:[
                {
                    title:"Web Development"
                },
                {
                    title:"Machine Learning"
                },
                {
                    title:"Artificial Intelligence"
                },
                {
                    title:"Web Development"
                },
                {
                    title:"Machine Learning"
                },
                {
                    title:"Web Development"
                }
                
            ],
            content:[
                {
                    texts:"I am Ishan, a 4th year Undergraduate Student from the Department of Computer Science and Engineering enrolled in the Integrated Dual Degree course at IIT Kharagpur. This article is regarding the preparation of coding for the internship based on my journey. I got an internship offer from Google and Uber for the Summer of 2020 through the CDC internship drive ( of IIT Kharagpur ) and accepted ...",
                    heading:"Cracking a Programming Interview in 8 months",
                    name:"-Ishan Ranga",
                    more:"https://medium.com/@ish.ranga11/the-8-month-plan-to-get-an-internship-in-your-dream-company-8195e419726a"
                }
            ]
          
      

  
    }
       render(){
        return(
            <>
                <Layout>
                    {/* <div className={classes.toped}>
                    <Header />
                    <Toolbar />
                    </div> */}
                    <div className={`${classes.mainContainer}`}>
                    <div className={classes.container}>
                    <div>
                        <Carosel slider = {this.state.carosel} ></Carosel>
                    </div>
                    <div className=" col-lg-8 col-md-10 col-sm-10 container justify-content-center iframe">
                        <div className="col colorloader iframe">
                        <iframe class="airtable-embed" 
                        src="https://airtable.com/embed/shrC65Z7jYCU7bR8J?backgroundColor=orange&layout=card&viewControls=on" 
                        frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
                        </div>
                      </div>
                    {/* <Sliderrr text={this.state.text}/>
                   
                    <div className={`${classes.cardsContainer} pb-4`}>
                        <Cards cardData = {this.state.curatedIntership}></Cards>
                        
                    </div>
                    */}
                </div>
                <div className={`${classes.rightContainer} mt-3 d-none d-md-block ml-3 mr-3`}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                        className="youtube"
                        src="https://www.youtube.com/embed/CXBEo7ujXOk"
                        allowfullscreen
                        ></iframe>
                    </div>
                    <br></br>
                    <Blog content={this.state.content}/>
                    <br></br>
                    <div className="  embed-responsive embed-responsive-16by9">
                        <iframe
                        className="youtube"
                        src="https://www.youtube.com/embed/513O7BI4OfM"
                        allowfullscreen
                        ></iframe>
                    </div>
                </div>
                </div>
                
                    <Footer />
                </Layout>
            </>
        );
     }
};