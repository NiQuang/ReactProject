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
import ProductManager from "./pages/admin/ProductsManager";
import EditProduct from "./pages/admin/Editproduct";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoginWithGoogle from "./pages/website/LoginWithGoogle";
import SignUp from "./pages/website/Signup";
import SignIn from "./pages/website/Signin";
import SignOut from "./pages/website/Signin";
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
import HomePage from "./pages/website/HomePage";
import { cateList } from "./api/categoriesAPI";
import { isAuthenticate } from "./authenticate";

import 'antd/dist/antd.css';
import AntDesign from "./pages/website/AntDesign";


function App() {
  useEffect ( () => {
    document.title = 'My project';
  });
const [products, setProducts] = useState([]);
const [series, setSeries] = useState([]);
const [popularList, setPopularList] = useState([]);
  useEffect( () =>{
    list().then( (response) => {
      setProducts(response.data);
    })

    cateList().then((response) =>{
      setSeries(response.data);
    })
  }, []);

const onHandleRemove = (id) => {
  remove(id).then(() => {
    const fakeProducts = products.filter((item) =>  item.id !== id);
    setProducts(fakeProducts);
  })
}

const onHandleAdd2 = (product) => {
  console.log(product);
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
    toast.success("???? c???p nh???t th??nh c??ng");
    setProducts(newProducts);
  });
}

const findByModel = (id) => {
  console.log(id);
}


  return (
    <div className="App">
      {/* <HeaderComponent /> */}
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<LayoutWebsite />}> 
            <Route index element = {<HomePage />} />
            <Route path="/ant" element = {<AntDesign />} />
            <Route path="product"
            element = {<ProductsWebsite products = {products} series={series} onFindByModel={findByModel}/>} />
            <Route path="product/:id" element = {<ProductDetail  products={products}/>} />
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
              element = {<ProductManager products={products}  onRemove={onHandleRemove} models={series}/>} />
            <Route path = "product/add" 
              element={<AddProduct onAdd={onHandleAdd} models={series}/>}/>
            <Route path = "product/:id/edit"
              element={<EditProduct onUpdate={onHandleUpdate} models={series}/>}/>

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
