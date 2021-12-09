import { Container, Row, Col } from 'react-bootstrap';
// import Fontawesome from '../src/assets/css/fontawesome.css';
import leftImg from '../src/assets/images/about-left-image.png';
import Icon1 from '../src/assets/images/service-icon-01.png';
import Icon2 from '../src/assets/images/service-icon-02.png';
import Icon3 from '../src/assets/images/service-icon-03.png';
import Icon4 from '../src/assets/images/service-icon-04.png';

const About = () => {

    const cardData = [
        {
            imgSrc: Icon1,
            title: "Data Analysis",
            description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter"
        },
        {
            imgSrc: Icon2,
            title: "Data Reporting",
            description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter"
        },
        {
            imgSrc: Icon3,
            title: "Web Analytics",
            description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter"
        },
        {
            imgSrc: Icon4,
            title: "SEO Suggestions",
            description: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter"
        }
    ]
    return (
        <div id="about" className="about-us section">
            <Container>
                <Row>
                    <Col xs={12} md={4}>

                        <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <img src={leftImg} alt="person graphic" />
                        </div>

                    </Col>
                    <Col xs={12} md={8} className="align-self-center">
                        <div className="services">
                            <Row>
                                {
                                    cardData.map((val, index) => {
                                        return (
                                            <Col key={index} xs={12} md={6} lg={6} >
                                                <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                                    <div className="icon">
                                                        <img src={val.imgSrc} alt={val.title} />
                                                    </div>
                                                    <div className="right-text">
                                                        <h4>{val.title}</h4>
                                                        <p>{val.description}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        );

                                    })
                                }




                                {/* <Col xs={12} md={6} lg={6}>
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                        <div className="icon">
                                            <img src="assets/images/service-icon-02.png" alt="" />
                                        </div>
                                        <div className="right-text">
                                            <h4>Data Reporting</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                        <div className="icon">
                                            <img src="assets/images/service-icon-03.png" alt="" />
                                        </div>
                                        <div className="right-text">
                                            <h4>Web Analytics</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                                        <div className="icon">
                                            <img src="assets/images/service-icon-04.png" alt="" />
                                        </div>
                                        <div className="right-text">
                                            <h4>SEO Suggestions</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </Col> */}
                            </Row>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;