import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Logo from "./component/Logo";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Router from "./routes/Router";


function App() {
  const apiString = 'https://fakestoreapi.com/products'
  const [listProduct,setListproduct] = useState([])
  useEffect(()=>{
    try{
        const fetchApi = async ()=>{
        const response = await fetch(apiString)
        const responseJson = await response.json()
        // console.log(responseJson);
        setListproduct(responseJson)
      }
      fetchApi();
    }
    catch(err) {
      console.log('err:',err)
    }
  },[])
  // npm


  const [product,setProduct] = useState([])
  const addProduct =(l)=>{
    setProduct(pre=>[...pre,l])
  }
  const handleRemove = (id,index)=>{
    const newProduct = product.filter((l,i)=>i!==index)
    setProduct(newProduct)
  }
  return (
    <>
      <Header
        listProduct = {listProduct}
        product={product}
      />
      <Router 
        handleRemove={handleRemove}
        product={product}
        addProduct={addProduct}
        listProduct = {listProduct}
      >
        <Home />
        <Products />
      </Router>
      <Logo />
      <Footer />
    </>
    
  );
}

export default App;
