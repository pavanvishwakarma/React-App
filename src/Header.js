import { Container, Row, Col, Navbar, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Header() {
    const preLoader = (
        <div id="js-preloader" className="js-preloader">
            <div className="preloader-inner">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
    const navBar = (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <Container>
                <Row>
                    <Col>
                        <Navbar expand={false} bsPrefix variant={false} className="main-nav">
                                <Link to="/" className="logo"><h4>Spac<span>Dyna</span></h4></Link>
                                <ListGroup bsPrefix as="ul" className="nav" >
                                    <ListGroup.Item bsPrefix as="li" className="scroll-to-section">
                                        <Link to="/">Home</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item bsPrefix as="li" className="scroll-to-section">
                                        <Link to="/about">About</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item bsPrefix as="li" className="scroll-to-section">
                                        <Link to="/service">Services</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item bsPrefix as="li" className="scroll-to-section">
                                        <Link to="/portfolio">Portfolio</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item bsPrefix as="li" className="scroll-to-section">
                                        <Link to="/blog">Blog</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item bsPrefix as="li" className="scroll-to-section">
                                        <Link to="/apiops">API Ops</Link>
                                    </ListGroup.Item>

                                    <ListGroup.Item bsPrefix as="li" className="scroll-to-section">
                                        <Link to="/product">Products</Link>
                                    </ListGroup.Item>
                                    
                                    <ListGroup.Item bsPrefix as="li" className="scroll-to-section">
                                        <div className="main-red-button">
                                            <Link to="/contact">Contact Now</Link>
                                        </div>
                                    </ListGroup.Item>

                                </ListGroup>

                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
    return (

        <>
            {preLoader}
            {navBar}

        </>
    );
}


export default Header;