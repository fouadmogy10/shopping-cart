import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {  Container, Row } from "react-bootstrap";
import Products from "./components/products/Products";

import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Container>
          <Row className="py-5 align-items-center justify-content-center">
            
           <Filter/>
              <Products />
            
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
