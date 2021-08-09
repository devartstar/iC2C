import React from 'react';
import {Col,Row} from 'react-bootstrap';
import Podcast from "./Podcast";

const Podcasts=(props)=>{

    return(
        <div className="mt-lg-5">
             <Row>
            {
                (props.data).map(item => {
                return(
                        <Col lg={6}>
                            <Podcast
                               title={item.title}
                            />
                        </Col>
                    )
                })
            }
            </Row>
        </div>
    );
};

export default Podcasts;