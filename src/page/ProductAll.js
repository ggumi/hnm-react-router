import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q')||"";
    let url = `https://my-json-server.typicode.com/gguimi/hnm-react-router/products?q=${searchQuery}`;
    
    let response = await fetch(url);
    let data = await response.json()
    setProductList(data);
  }
  useEffect(() => {
    getProducts()
  }, [query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item,index) => (
            <Col lg={3} key={index}>
              <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
export default ProductAll;
