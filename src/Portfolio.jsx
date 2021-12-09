import { Container, Row, Col } from 'react-bootstrap';
import PortfolioImg from '../src/assets/images/portfolio-image.png';

const Portfolio = () => {

    const heading = (
<h2>See What Our Agency <em>Offers</em> &amp; What We <span>Provide</span></h2>
    )

    const portfolioData = [
        {
            title: "SEO Analysis",
            description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
            img: PortfolioImg
        },
        {
            title: "Website Reporting",
            description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
            img: PortfolioImg
        },
        {
            title: "Performance Tests",
            description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
            img: PortfolioImg
        },
        {
            title: "Data Analysis",
            description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
            img: PortfolioImg
        },
    ]
    return (
        <>
            <div id="portfolio" className="our-portfolio section">
                <Container>
                    <Row>
                        <Col md={6} className="m-auto">
                            <div className="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                {heading}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            portfolioData.map((val, index) => {
                                return (
                                    <Col sm={6} lg={3}>
                                        <a href="#">
                                            <div
                                                className="item wow bounceInUp"
                                                data-wow-duration="1s"
                                                data-wow-delay=
                                                {
                                                    index === 0 ? "0.3s" :
                                                    index === 1 ? "0.4s" :
                                                    index === 2 ? "0.5s" :
                                                    index === 3 ? "0.6s" : "0.6s"

                                                }
                                            >
                                                <div className="hidden-content">
                                                    <h4>{val.title}</h4>
                                                    <p>{val.description}</p>
                                                </div>
                                                <div className="showed-content">
                                                    <img src={val.img} alt={val.title} />
                                                </div>
                                            </div>
                                        </a>
                                    </Col>
                                );

                            })
                        }

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Portfolio;