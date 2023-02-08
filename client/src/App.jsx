import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Products from "./components/products/Products";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Container>
          <Row className="py-5">
            <Col lg="4" md="12" sm="12">
              <Filter/>
            </Col>
            <Col lg="8" md="12" sm="12">
              <Products/>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
