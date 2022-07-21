import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductDetails from "./screens/ProductDetails";
import ProductAddScreen from "./screens/ProductAddScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/addproduct" element={<ProductAddScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
