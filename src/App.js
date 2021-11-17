import {
  BrowserRouter,
  Routes,
  Route,Link,
  Outlet,
  Navigate
} from "react-router-dom";

import {create, list, remove} from './api/productAPI';

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import LayoutWebsite from "./layout/LayoutWebsite";
import ProductsWebsite from "./pages/website/Product";
import LayoutAdmin from "./layout/LayoutAdmin";
import AddProduct from "./pages/admin/AddProduct";
import ProductDetail from "./pages/website/ProductDetail";

function App() {
  useEffect ( () => {
    document.title = 'My project';
  });
const [products, setProducts] = useState([]);

  useEffect( () =>{
    list().then( (response) => {
      setProducts(response.data);
    })
    console.log(products);
  }, []);

const onHandleRemove = (id) => {
  remove(id).then(() => {
    const fakeProducts = products.filter((item) =>  item.id !== id);
    setProducts(fakeProducts);
  })
}

const onHandleAdd = (product) => {
  const fakeProduct = {id: products.length +1, ...product};

  create(fakeProduct).then((response) => {
    setProducts([...products, response.data]);
  });
}

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<LayoutWebsite />}> 
            <Route index element = {<div>Home Page</div>} />
            <Route path="product"
            element = {<ProductsWebsite products = {products} onRemove={onHandleRemove}/>} />
            <Route path="product/:id" element = {<ProductDetail  />} />
            <Route path="category" element = {<div>Danh muc san pham</div>} />
          </Route>

          <Route path="admin/*" element={<LayoutAdmin />}>
            <Route index element={< Navigate to="dashboard"/>}/>
            <Route path="dashboard" element={<div>Dashboard Product</div>} />
            <Route path="product" 
              element = {<div>Product Manager</div>} />
            <Route path = "product/add" 
              element={<AddProduct onAdd={onHandleAdd} />}/>
            <Route path = "product/:id/edit"
              element={<div>Edit Products</div>}/>

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
