import React from "react";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import headRightImg from '../src/assets/images/blog-dec.png';

import bigBlogThumb from '../src/assets/images/big-blog-thumb.jpg';
import blogThumb from '../src/assets/images/blog-thumb-01.jpg';



const bigBlogData = {
    img: bigBlogThumb,
    dateTime: "24 Mar 2021",
    user: "TemplateMo",
    brand: "Branding",
    title: "SEO Agency & Digital Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...",
    btn:{
        url: "#url",
        title: "Discover More"
    }
}

const blogData = [
    {
        img: blogThumb,
        dateTime: "18 Mar 2021",
        title: "New Websites & Backlinks",
        description: "Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...",
        linkUrl: "#abcd"
    },
    {
        img: bigBlogThumb,
        dateTime: "14 Mar 2021",
        title: "SEO Analysis & Content Ideas",
        description: "Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...",
        linkUrl: "#abcd"
    },
    {
        img: blogThumb,
        dateTime: "06 Mar 2021",
        title: "SEO Tips & Digital Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...",
        linkUrl: "#abcd"
    }
]

const Blog = () => {

    const heading = (
        <h2>Check Out What Is <em>Trending</em> In Our Latest <span>News</span></h2>
    )

    return (
        <>
            <div id="blog" className="our-blog section">
                <Container>
                    <Row>
                        <Col xs={12} lg={6} className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                            <div className="section-heading">
                                {heading}
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                            <div className="top-dec">
                                <img src={headRightImg} alt={headRightImg} />
                            </div>
                        </Col>

                    </Row>

                    <Row>
                        <Col xs={12} lg={6} className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s" >
                            <div className="left-image">
                                <a href={bigBlogData.btn.url}>
                                    <img src={bigBlogData.img} alt="Workspace Desktop" />
                                </a>
                                <div className="info">
                                    <div className="inner-content">
                                        <ul>
                                            <li><i className="fa fa-calendar"></i> {bigBlogData.dateTime}</li>
                                            <li><i className="fa fa-users"></i> {bigBlogData.user}</li>
                                            <li><i className="fa fa-folder"></i> {bigBlogData.brand}</li>
                                        </ul>
                                        <a href="#"><h4>{bigBlogData.title}</h4></a>
                                        <p>{bigBlogData.description}</p>
                                        <div className="main-blue-button">
                                            <a href={bigBlogData.btn.url}>{bigBlogData.btn.title}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    
                        <Col xs={12} lg={6} className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s" >
                            <div className="right-list">

                                <ListGroup as="ul" bsPrefix>
                                    {
                                        blogData.map((val, index) => {
                                            return (
                                                <ListGroup.Item key={index} as="li" bsPrefix >
                                                    <div className="left-content align-self-center">
                                                        <span><i className="fa fa-calendar"></i> {val.dateTime}</span>
                                                        <a href={val.linkUrl}><h4>{val.title}</h4></a>
                                                        <p>{val.description}</p>
                                                    </div>
                                                    <div className="right-image">
                                                        <a href={val.img}>
                                                            <img src={val.img} alt="" />
                                                        </a>
                                                    </div>
                                                </ListGroup.Item>
                                            )
                                        })
                                    }

                                </ListGroup>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Blog;