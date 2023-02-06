import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Container>
          <Row className="py-5">
            <Col md="8" sm="7">
              <Products/>
            </Col>
            <Col md="4" sm="5">
              filter
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
