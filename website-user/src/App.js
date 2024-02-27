import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/page/Home/Home";
import ProductList from "./components/page/Product list/ProductList";
import ProductDetails from "./components/page/ProductDetails/ProductDetails";
import Cart from "./components/page/Cart/Cart";
import AddressDetails from "./components/page/Cart/AddressDetails";
import Payment from "./components/page/Cart/Payment";
import OrderConfiramation from "./components/page/Cart/OrderConfiramation";
import Register from "./components/page/Login/Register";
import Login from "./components/page/Login/Login";
import VerifyOtp from "./components/page/Login/VerifyOtp";
import User from "./components/User/User";
import ManageAddress from "./components/User/manage address/ManageAddress";
import ChangePaassword from "./components/User/Change Password/ChangePaassword";
import MyOrders from "./components/User/Orders/MyOrders";

function App() {
  return (
    <BrowserRouter>
      <div className='homepage'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:Id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/address" element={<AddressDetails />} />
          <Route path="/cart/payment" element={<Payment />} />
          <Route path="/order/confiramation" element={<OrderConfiramation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verifyotp" element={<VerifyOtp />} />
          <Route path="/account" element={<User />} />
          <Route path="/manageaddress" element={<ManageAddress />} />
          <Route path="/changepassword" element={<ChangePaassword />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
