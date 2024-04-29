import React from 'react'
import './List.css'
import { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
const List = () => {
    const [menu, setMenu] = useState("shop");
    const menuRef=useRef();

  return (
    <div className='nav'>
      
      <ul ref={menuRef} className="nav-menu">
      <li onClick={()=>{setMenu("")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>   {menu==="shop"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("sets")}}><Link style={{textDecoration:'none'}} to='/sets'>SET</Link>   {menu==="sets"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("pants")}}><Link style={{textDecoration:'none'}} to='/pants'>PANT</Link>  {menu==="pants"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("dresses")}}><Link style={{textDecoration:'none'}} to='/dresses'>DRESS</Link>  {menu==="dresses"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("customs")}}><Link style={{textDecoration:'none'}} to='/customs'>CUSTOM</Link>  {menu==="customs"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("blazer")}}><Link style={{textDecoration:'none'}} to='/blazer'>BLAZER</Link>  {menu==="blazer"? <hr/>:<></>}</li>
      </ul>
      
      
    </div>
  )
}

export default List
