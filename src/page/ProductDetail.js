import React,{useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  let {id} = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail=async()=>{
    let url =`http://localhost:3000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return <Container>
    <Row>
      <Col className={"product-img"}>
        <img src={product?.img}/>
      </Col>
      <Col>
        <div>{product?.title}</div>
        <div>₩{" "}{product?.price}</div>
        <div>{product?.choice === true ?"Conscious choice":""}</div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            사이즈 선택
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="dark" className="add-button">추가</Button>
      </Col>
    </Row>
  </Container>
}
export default ProductDetail;
