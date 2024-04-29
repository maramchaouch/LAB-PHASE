import React from "react";
import all_product from "../Componment/Assets/All_product";
import { useState } from "react";
export const Shopcontext = React.createContext()
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;

        
    }
    return cart;
}

const ShopcontextProvider = (props) => {

    const[cartItems,setCartItems]=useState(getDefaultCart());
    
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }


    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((p) => p.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <Shopcontext.Provider value={contextValue}>
          
          {props.children}
          
          
          
            </Shopcontext.Provider>
    )}
export default ShopcontextProvider
    