import React, { useEffect, useState } from "react";
import { Table, Container,Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const productsList = await axios.get("/api/product", config);
      console.log("products", productsList.data);
      setProducts(productsList.data);
    } catch (error) {}
  };

  return (
    <>
      <Container>
        <h2 className="text-center m-4">List Products</h2>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Button variant="primary" type="submit">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/addproduct"}
          >
            Add Product
          </Link>
        </Button>
      </Container>
    </>
  );
};

export default ProductDetails;
