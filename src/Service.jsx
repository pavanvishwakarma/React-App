import { Container, Row, Col } from 'react-bootstrap';
import serviceLeftImg from '../src/assets/images/services-left-image.png';

const Service = () => {

    const Title = (
        <h2>Grow your website with our <em>SEO</em> service &amp; <span>Project</span> Ideas</h2>
    )

    const Description = (
        <p>Space Dynamic HTML5 template is free to use for your website projects. However, you are not permitted to redistribute the template ZIP file on any CSS template collection websites. Please contact us for more information. Thank you for your kind cooperation.</p>
    )


    const ServiceBar = [
        {
            name: "Website Analysis",
            percent: "74%"
        },
        {
            name: "SEO Reports",
            percent: "88%"
        },
        {
            name: "Page Optimizations",
            percent: "94%"
        },
    ]

    return (
        <>
            <div id="services" className="our-services section">
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="align-self-center wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                            <div className="left-image">
                                <img src={serviceLeftImg} alt="serviceLeftImg" />
                            </div>
                        </Col>

                        <Col xs={12} md={6} className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                            <div className="section-heading">
                                {Title}
                                {Description}
                            </div>

                            <Row>


                                {
                                    ServiceBar.map((val, index) => {
                                        return (
                                            <Col lg={12} key={index}>
                                                <div className="first-bar progress-skill-bar">
                                                    <h4>{val.name}</h4>
                                                    <span style={{ left: val.percent }}>{val.percent}</span>
                                                    <div className="filled-bar" style={{ width: val.percent }}></div>
                                                    <div className="full-bar"></div>
                                                </div>
                                            </Col>
                                        );

                                    })
                                }

                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Service;