import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import Products from "./components/products/Products";

function App() {
  const [products, setproducts] = useState(data.products);
  const [size, setsize] = useState("");
  const [sort, setsort] = useState("");

  const handelFilterBySize = (e) => {
    setsize(e.target.value);
    if(e.target.value == "all"){
      setproducts(data.products);
      
    }
    else{
      
      let productsClone=[...products]
    let newProduct = productsClone.filter(prod=> prod.size.indexOf(e.target.value) != -1)
    setproducts(newProduct);
    }
    
  };
  const handelFilterByOrder = (e) => {
    let order=e.target.value
    setsort(e.target.value);
    let productsClone=[...products]
    let newProducts=productsClone.sort((a,b)=>{
   
      if(order == "Highest"){
        return b.price -a.price
      }else if(order == "Lowest"){
        return a.price -b.price
      }else {
        return a.id < b.id ? 1 : -1 ;
      }
    })
    setproducts(newProducts)
  };

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
