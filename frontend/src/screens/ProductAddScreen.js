import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

const ProductAddScreen = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [category, setCategory] = useState("");
  
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
  
        const { data } = await axios.post(
          "/api/product",
          { name, price, quantity, category },
          config
        );
        console.log("data", data);
        navigate('/product')
      } catch (error) {
        // console.log(error.response.data.message)
        alert("User already exist");
      }
    };

  return (
    <div>
      <Row className="">
        <Col md={3}></Col>
        <Col md={6}>
          <h2 className="text-center">Add Product</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                value={price}
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quantity"
                value={quantity}
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                value={category}
                required
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Row>
              <Col className="float-end">
                <Button variant="primary" type="submit">
                  Add Product
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default ProductAddScreen;
