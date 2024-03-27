import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
//import {onAuthStateChanged} from"firebase/auth"
import { auth } from './firebase/FireBaseAuth';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SingleProduct from './pages/SingleProduct/SingleProduct';

export default function App() {
  const[cart,setCart]=useState([])
  const [promocode,setPromoCode]=useState("")
const[discount,setDiscount]=useState(0)
const [invalid,setInvalid]=useState("INVALID PROMOCODE");
const [userName,setUserName]=useState("");

  //add to cart
  const AddToCart=(productss)=>{
    const isProductssExist=cart.find((findItem)=>findItem.id===productss.id)
    if(isProductssExist)
    {
       const updateCart=cart.map((item)=>(
        item.id===productss.id?{...item,quantity:item.quantity+1}:item
      ))
      setCart(updateCart);
    }
    else{
      setCart([...cart,{...productss,quantity:1}])
      toast.success("product added to cart");

    }
   
  }
  //increrase Quantity

const handleInc=(id)=>{
   const incQuantity= cart.map((item)=>(
    item.id=== id ? {...item,quantity:item.quantity+1}:item
  ))
  setCart(incQuantity)
}

//decQuantity
const handleDec=(id)=>{
  const decQuantity=cart.map((item)=>
  item.id===id && item.quantity > 1
  ? {...item,quantity:item.quantity-1}:item
  )
  setCart(decQuantity);
}

//handle remove
const handleRemove=(id)=>{
  const updateByFilter= cart.filter((filteItem)=>filteItem.id !==id)
  setCart(updateByFilter);

}
//total price calculate
const getTotalPrice=()=>{
  const totalPrice= cart.reduce((total,cartReduceItem)=>{
    return total + cartReduceItem.price *cartReduceItem.quantity
  },0)
  return totalPrice-discount;
}

//promoCode

const applyPromoCode=()=>{
  if(promocode==="DISCOUNT10")
  {
    setDiscount(getTotalPrice()*0.1)
    setPromoCode("");
    setInvalid("");
  }
  else{
    setInvalid("Invalid Promo Code");
  }
}

//userNameDisplay
//auth.onAuthStateChanged((user)=>{

useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user)
    {
      setUserName(user.displayName)
    }
    else{
      setUserName("");
    }
  })
},[])


  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar cart={cart} userName={userName}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart 
        cart={cart} 
        handleDec={handleDec}
         handleInc={handleInc} 
         handleRemove={handleRemove}
         getTotalPrice={getTotalPrice}
         applyPromoCode={applyPromoCode}
         promocode={promocode}
         invalid={invalid}
         setPromoCode={ setPromoCode}
         />} />
        <Route path='/allProducts' element={<AllProducts AddToCart={AddToCart}/>}/>
        <Route path='singleProduct/:productId' element={<SingleProduct AddToCart={AddToCart}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Toaster/>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  )
}
