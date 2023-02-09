import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import Products from "./components/products/Products";
import Filter from "./components/Filter/Filter";
import { useEffect, useState } from "react";
import data from "./data.json";
import Cart from "./components/cart/Cart";
function App() {
  const [products, setproducts] = useState(data.products);
  const [size, setsize] = useState("");
  const [sort, setsort] = useState("");
  const [cartItem, setcartItem] = useState( JSON.parse(localStorage.getItem("cart")) ||[]);
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

  const handelCartItems =(product)=>{
      let cartClone =[...cartItem];
      let isExist =false;
      cartClone.forEach(p=>{
        if(p.id == product.id){
          p.qty++;
          isExist =true;
        }
      })
      if(!isExist){
        cartClone.push({...product,qty:1})
      }
      setcartItem(cartClone);
  }

  const handelRmove =(product)=>{
      const cartItemclone=[...cartItem];
      let  newcart =cartItemclone.filter(p=> p.id != product.id)
      setcartItem(newcart);
  }

  

    useEffect(() => {
      localStorage.setItem("cart" ,JSON.stringify(cartItem))
    }, [cartItem])
    
  return (
    <div className="layout">
      <Header />
      <main>
        <Container>
          <Filter
          length={products.length}
            size={size}
            handelFilterBySize={handelFilterBySize}
            handelFilterByOrder={handelFilterByOrder}
            sort={sort}
          />
          <Products products={products} handelCartItems={handelCartItems}/>
          <Cart cartItem={cartItem } handelRmove={handelRmove}/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
