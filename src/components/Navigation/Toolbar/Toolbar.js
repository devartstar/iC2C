import React from "react";
import { Navbar, Nav, Button, Form, FormControl, InputGroup} from "react-bootstrap";
import { BiSearch} from "react-icons/bi";
import LOGO from "../../../assets/images/Logo.png";
import "./Toolbar.css";
//import CuratedInternship from "../../../containers/CuratedInternship/CuratedInternship";
const Toolbar=()=>{
    return(
        <div className={`d-sm-none d-md-block main navbar2main`}>
            
            <Navbar expand="lg" className="navbar2">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto p-1 justify-content-center">
                    {/*<Form inline className="ml-lg-5 pl-lg-5 mr-lg-5 pr-lg-5">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text><BiSearch/></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1" className="form1 justify-content-md-center"
                            />
                        </InputGroup>
                    </Form>
                        <Nav.Link href="/" className="mr-lg-5 pr-lg-5 home1 .home12">Home</Nav.Link>
                        <Nav.Link href="/podcast" className="mr-lg-5 pr-lg-5 home1">Podcasts</Nav.Link>*/}
                        <Nav.Link href="/internship/curated" className="mr-lg-5 pr-lg-5 home1">Curated Internships</Nav.Link>
                        <Nav.Link href="/referrals" className="mr-lg-5 pr-lg-5 home1">Referrals</Nav.Link>
                        <Nav.Link href="/about" className="mr-lg-5 pr-lg-5 home1">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>

    );

};

export default Toolbar;