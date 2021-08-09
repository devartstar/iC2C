import React, {Component} from 'react';
import DataCarosel from "../../Data/Carosel.json";
import classes from './Homepage.module.css';
import Carosel from '../../components/UI/Carosel/Carosel';
import {Button} from "react-bootstrap";

import carousel1 from '../../assets/images/carosel.svg';
import carousel2 from '../../assets/images/carosel.svg';
import carousel3 from '../../assets/images/carosel.svg';
import ImgComponent from '../../components/UI/Carosel/ImgComponent';

import Cards from '../../components/Cards/Cards';
import Podcasts from '../../components/Podcasts/Podcasts';
import Footer from '../../components/Footer/Footer/Footer';

import Sliderrr from "../../components/UI/Slider/Slidermain";
import Layout from '../../hoc/Layout/Layout';
import Curated from "../CuratedInternship/CuratedInternship";
import {Link } from "react-router-dom";
import Blog from "../../components/Blogs/Blogs";
//SEO INTEGRATION WITH REACT
import {Col,Row} from "react-bootstrap";
/*
-> May do a Mobile Friendly Test
-> Meaningful descriptive title and Description
    TO DO THIS WE CAN USE THE HELMET COMPONENT
        <Helmet>
            <title>{this.state.***.title}</title>
            <meta name="description" content={this.state.***.slice(0,100)} />
        </Helmet>
->  Maybe if We find no Particular Description, we can add the first 100 charactes as the description
*/

//HEADLESS CMS --- INTEGRATION WITH REACT

//API INTEGRATION

class Homepage extends Component {

    
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
                "content":"An efficient AI based hiring Solution",
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
                name:"-Ishan Ranga"
            }
        ]
      

  
    }
    

    //      --- JUST GET THE API Endpount and paste in the src/axios.js in baseURL ---

    // componentDidMount () {
    //     axios.get( '/intership' )
    //         .then( response => {
    //             const intershipCards = response.data.slice(0, 4);
    //             const updatedintershipCards = intershipCards.map(intershipCard => {
    //                 return {
    //                     time:`${intershipCard.duration} months`,
    //                     location: `${intershipCard.location}`,
    //                     type: `${intershipCard.profile.name}`,
    //                     image:"/public/samsung-1.png",
    //                     name: `${intershipCard.organization.name}`,
    //                     desc: `${intershipCard.description}`,
    //                 }
    //             });
    //             this.setState({curatedIntership: updatedintershipCards});
    //             // console.log(this.state.posts);
    //         } )
    //         .catch(error => {
    //             console.log(error);
    //             // this.setState({error: true});
    //         });
    // }

    
    render(){

        return(
            <>
                <Layout>
                    {/* <div className={classes.toped}>
                    <Header />
                    <Toolbar />
                    </div> */}
            
                    <div className={classes.mainContainer}>
                    <div className={classes.container}>
                    <div>
                        <Carosel slider = {this.state.carosel} ></Carosel>
                    </div>
                    
                    <div className={classes.cardsContainer}>
                    
                    <div className={`${classes.heading} text-center `} >
                            <span className={`${classes.first} mr-2`}>Curated</span>
                            <span className={classes.second}>Internships</span>
                        </div>
                        <div className={`${classes.subHeading1} mt-lg-3 pb-lg-5 mb-lg-5`}>Opportunities from top companies at one place</div>
                    
 
                        <Cards cardData = {this.state.curatedIntership}></Cards>
                        <div className="text-center">
                        <Link to="/internship/curate"><Button className={`${classes.viewmore} mb-5 mt-5`}>View More</Button></Link></div>
                        <hr/>
                        <div className={`${classes.heading} text-center `}>
                        <span className={`${classes.first}`}>Pod</span>
                        <span className={classes.second}>Casts</span>
                        </div>
                        <div className={`${classes.subHeading} mt-lg-3 mb-lg-3`}>Learn how to prepare for interviews</div>
                        <Podcasts data={this.state.podcast} />
                        <div className="text-center">
                        <Button className={`${classes.viewmore} mb-5 mt-5`} href="">View More</Button></div>
                        
                    </div>
                </div>
                <div className={`${classes.rightContainer} mt-3 d-none d-md-block ml-3 mr-3`}>
                    <Blog content={this.state.content}/>
                </div>
                
                    
                    </div>
                    <Footer />
                </Layout>
            </>
        );
    }
};

export default Homepage;

