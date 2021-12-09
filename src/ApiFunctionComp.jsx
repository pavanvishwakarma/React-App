import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

const ApiFunctionComp = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getList();
    }, [])

    const getList = () => {
        fetch("https://fakestoreapi.com/products/")
            .then((result) => {
                result.json()
                .then((resp) => {
                    console.log(resp);
                    setData(resp)
                })
            })
    }

    const deleteProduct = (id) => {
        // alert(id)
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json()
            .then((resp) => {
                console.log(resp);
                getList()
            })
        })
    }


    return (
        <>
            <div className="main-banner wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <Container>
                    <Row className="mb-5">
                        <Col className="text-center">
                            <h1>Products</h1>
                        </Col>
                    </Row>

                    <Row>
                        {
                            data.map((product, key) =>
                                <Col lg={3} key={key}>
                                    <div className="productCard mb-5">
                                        <span className="category">{product.category}</span>
                                        <div className="productImg">
                                            <img src={product.image} />
                                        </div>
                                        <div className="details text-center">
                                            <h2 className="title">{product.title}</h2>
                                            <h5 className="price">price : {product.price} /-</h5>
                                            {/* <p className="description">{product.description}</p> */}
                                            <button className="addToCartBtn" onClick={() => deleteProduct(product.id)}>
                                                Add To Cart
                                            </button>
                                        </div>

                                    </div>
                                </Col>
                            )
                        }

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ApiFunctionComp;