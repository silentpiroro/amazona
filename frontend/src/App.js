import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import Homescreen from './screens/homescreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';


function App() {
  const cart= useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state)=> state.userSignin);
  const {userInfo }= userSignin;
  const dispatch = useDispatch();
  const signoutHandler =()=>{
      dispatch(signout());
  };
  
  return (
  <BrowserRouter>    
    <div className="grid-container">
             <header className="row">
                <div>
                  <Link to="/" className="brand">
                    PIROROS.COM
                    </Link>
                </div>
                <div className="">
                    <Link to="/cart" className="">Cart
                    {cartItems.length > 0 && (
                      <span className="badge"> {cartItems.length} </span>
                    )}
                    </Link>
                    {userInfo? (
                      <div className="dropdown">
                        <Link to="#">
                          {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                          </Link>
                          <ul className="dropdown-content">
                            <li>
                              <Link to="/profile">User Profile</Link>
                            </li>
                            <li>
                              <Link to="/orderhistory">Order History</Link>
                            </li>
                            <li>
                            <Link to="#signout" onClick={signoutHandler}>
                              Sign Out
                            </Link>
                            </li>
                          </ul>
                          </div>

                      ) : (
                        <Link to="/signin">Sign In</Link>
                      )}
                </div>
             </header>
             <main className="">
               <Route path="/cart/:id?" component={CartScreen}></Route>
               <Route path="/product/:id" component={ProductScreen}></Route>
               <Route path="/signin" component={SigninScreen} ></Route>
               <Route path="/register" component={RegisterScreen} ></Route>
               <Route path="/shipping" component={ShippingAddressScreen}></Route>
               <Route path="/payment" component={PaymentMethodScreen}></Route>
               <Route path="/placeorder" component={PlaceOrderScreen}></Route>
               <Route path="/order/:id" component={OrderScreen}></Route>
               <Route path ="/orderhistory" component={OrderHistoryScreen}></Route>
               <Route path ="/profile" component={ProfileScreen}></Route>
               <Route path="/" component={Homescreen} exact></Route>
          
                    </main>
    <footer className="row center">All Rights Reserved</footer>
   </div>
   </BrowserRouter>
  );
}

export default App;