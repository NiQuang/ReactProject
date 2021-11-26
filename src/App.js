import {
  BrowserRouter,
  Routes,
  Route,Link,
  Outlet,
  Navigate
} from "react-router-dom";

import {create, list, remove, update} from './api/productAPI';

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
import ProductManager from "./pages/admin/Products";
import EditProduct from "./pages/admin/Editproduct";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoginWithGoogle from "./pages/website/LoginWithGoogle";
import SignUp from "./pages/website/Signup";
import SignIn from "./pages/website/Signin";
import PrivateAdmin from "./components/PrivateAdmin";
import HeaderComponent from "./components/HeaderComponent";

import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/assets/css/base.css';
import './layout/assets/css/main.css';
import './layout/assets/css/grid.css';
import './layout/assets/css/grid.css';
import './layout/assets/css/responsive.css';
import './layout/assets/img/chplay.png';
import './layout/assets/fontawesome-free-5.15.4-web/css/all.min.css';



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

const onHandleUpdate = (product) => {
  update(product).then(() => {
    const newProducts = products.map( (item) => {
      return (item.id === product.id ? (product) : (item));
    })
    toast.success("Đã cập nhật thành công");
    setProducts(newProducts);
  });
}

  return (
    <div className="App">
      {/* <HeaderComponent /> */}
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<LayoutWebsite />}> 
            <Route index element = {<div>Home Page</div>} />
            <Route path="product"
            element = {<ProductsWebsite products = {products}/>} />
            <Route path="product/:id" element = {<ProductDetail  />} />
            <Route path="category" element = {<div>Danh muc san pham</div>} />
            <Route path="signin" element={<SignIn />} />
            <Route path="login" element={<LoginWithGoogle />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route path="admin/*"
           element={
           <PrivateAdmin>
             <LayoutAdmin />
            </PrivateAdmin>
           }>
            
            <Route index element={< Navigate to="dashboard"/>}/>
            <Route path="dashboard" element={<div>Dashboard Product</div>} />
            <Route path="product" 
              element = {<ProductManager products={products}  onRemove={onHandleRemove} />} />
            <Route path = "product/add" 
              element={<AddProduct onAdd={onHandleAdd} />}/>
            <Route path = "product/:id/edit"
              element={<EditProduct onUpdate={onHandleUpdate}/>}/>

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
