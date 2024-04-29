import React, { useContext } from 'react'
import './Productdisplay.css'  
import pinkicon from '../Assets/pink icon.jpg'
import beleh from '../Assets/pinkicon.jpg'
import {Shopcontext} from '../../Context/Shopcontext'

const Productdisplay = (props) => {
    const {product}= props;
    const {addToCart}=useContext(Shopcontext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className="productdisplay-img-main" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-start">
                <img src={pinkicon} alt="" />
                <img src= {pinkicon}alt="" />
                <img src={pinkicon} alt="" />
                <img src={pinkicon} alt="" />
                <img src={beleh} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplayright-description">
Clothes that weave elegance and grace, with fabrics flowing like poetry in hues that dance between shadows and light. Each stitch tells a tale of style, while embellishments whisper secrets of forgotten realms. These garments are more than fabric; they are expressions of the wearer's soul.</div>
      
      <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="product-display-right-sizes">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
        </div>
        <button onClick={() => addToCart(product.id)}>Add To Cart</button>
        <p className='productdisplay-right-category'><span>Category : </span>Pants Sets Dress Custom</p>
        <p className='productdisplay-right-category'><span>Tags : </span>Modern, Casual</p>
      </div>
      </div>
    </div>
  )
}

export default Productdisplay
