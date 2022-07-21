import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      console.log("data", data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/product");
    } catch (error) {
      console.log(error);
      // console.log(error.response.data.message)
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center mt-5">
          <Col md={6}>
            <h2 className="text-center">LOGIN</h2>
            <Form onSubmit={submitHandler}>
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

              <Button
                variant="primary"
                type="submit"
                className="btn btn-dark me-5"
              >
                Submit
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-dark ms-5"
              >
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none", color: "white  " }}
                >
                  Registration
                </Link>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginScreen;
