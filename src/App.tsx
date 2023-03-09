/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import CardList from './components/CardList';
import Footer from './components/Footer';
import { products } from './data';
// import ShopCart from './components/ShopCart';
function App() {

  const [filter, setfilter] = useState<object[]>();
    const [value, setValue] = useState<string>("");
    const [product, setProduct] = useState<any>([])

    const isProduct = () => {
        const product = products.filter(product => product.name === value);
        setfilter(product)
    };

    console.log(product)

    const handleProduct = (image:string, name: string, price: number) => {
      setProduct([...product, {image, name, price}])
    }

  return (
    <>
          <Navbar 
          product={product} 
          setProduct={setProduct} />
          <Showcase/>
          <CardList 
          value={value} 
          setValue={setValue}
          isProduct={isProduct}
          filter={filter}
          handleProduct={handleProduct}
          />
          <Footer/>
          {/* <ShopCart /> */}
    </>
  );
}

export default App;
