import React from "react";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  SingleProduct,
  Cart,
  Error,
  PrivateRoute,
  Checkout,
  AuthWrapper,
  Product,
} from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Testing from "./Testing.js";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="/test" element={<Testing />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
