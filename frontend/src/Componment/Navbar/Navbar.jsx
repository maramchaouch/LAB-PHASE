import React, { useContext, useState} from 'react'
import './Navbar.css' 
import logos from "../Assets/logos.jpg"
import bag from "../Assets/bag.png"
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/Shopcontext'
import all_product from '../Assets/All_product'



const Navbar = () => {
const [search,setSearch]=useState('');
  console.log(search)
   console.log(all_product)
    const {getTotalCartItems}=useContext(Shopcontext)

    
  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={logos} alt="logo" />
        <p>Glamorous crest</p>
    </div>
    
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ?
        <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/') }}>logout</button>
      :       <Link to='/login'> <button>login</button></Link>
    }
        <Link to='/cart'><img className='nav-bag' src={bag} alt="bag" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      </div>
     
      

   
  )
}

export default Navbar
