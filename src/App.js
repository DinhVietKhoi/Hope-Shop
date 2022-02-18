import { prettyDOM } from "@testing-library/react";
import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Logo from "./component/Logo";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Router from "./routes/Router";
import product1 from './assets/productt1.jpg'
import product2 from './assets/productt3.jpg'
import product3 from './assets/productt3.jpg'
import product4 from './assets/productt5.jpg'
import product5 from './assets/productt5.jpg'
import product6 from './assets/productt6.jpg'
import product7 from './assets/productt8.jpg'
import product8 from './assets/productt8.jpg'
import product9 from './assets/productt9.jpg'
import product10 from './assets/productt9.jpg'
import product11 from './assets/productt12.jpg'
import product12 from './assets/productt12.jpg'

function App() {
  const listProduct=[
    {
        id:1,
        type:'B',
        name:'Backpack 1',
        price:100,
        img:product1,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:2,
        type:'B',
        name:'Backpack 2',
        price:200,
        img:product2,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:3,
        type:'B',
        name:'Backpack 3',
        price:300,
        img:product3,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:4,
        type:'W',
        name:'Watches 1',
        price:400,
        img:product4,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:5,
        type:'W',
        name:'Watches 2',
        price:500,
        img:product5,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:6,
        type:'W',
        name:'Watches 3',
        price:600,
        img:product6,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:7,
        type:'C',
        name:'Clothing 1',
        price:700,
        img:product7,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:8,
        type:'C',
        name:'Clothing 2',
        price:800,
        img:product8,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:9,
        type:'G',
        name:'Glasses 1',
        price:900,
        img:product9,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:10,
        type:'G',
        name:'Glasses 2',
        price:1000,
        img:product10,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
        id:11,
        type:'G',
        name:'Glasses 3',
        price:1100,
        img:product11,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    
    },
    {
        id:12,
        type:'G',
        name:'Glasses 4',
        price:1200,
        img:product12,
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

    },
    {
      id:13,
      type:'B',
      name:'Backpack 4',
      price:900,
      img:product1,
      desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
      id:14,
      type:'W',
      name:'Watches 4',
      price:900,
      img:product6,
      desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
      id:15,
      type:'C',
      name:'Clothing 3',
      price:900,
      img:product7,
      desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
      id:16,
      type:'C',
      name:'Clothing 4',
      price:900,
      img:product7,
      desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    }
]

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
