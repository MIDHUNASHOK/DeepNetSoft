import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const RegisterScreen = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/register",
        { name, email, password, place },
        config
      );
      console.log("data", data);
      navigate("/login");
    } catch (error) {
      // console.log(error.response.data.message)
      alert("User Already Exist");
    }
  };

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center mt-5">
          <h2 className="text-center">REGISTRATION</h2>
          <Col md={6}>
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
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Place"
                  value={place}
                  required
                  onChange={(e) => setPlace(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="btn btn-dark me-5">
                Register
              </Button>
              <Button variant="primary" type="submit" className="btn btn-dark  ms-5">
                Clear
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterScreen;

