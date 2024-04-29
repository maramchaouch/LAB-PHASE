import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Breadcrum from '../Componment/Breadcrums/Breadcrum'
import Productdisplay from '../Componment/Productdisplay/Productdisplay'
import Descriptionbox from '../Componment/DescriptionBox/Descriptionbox'
import Relatedproduct from '../Componment/RelatedProduct/Relatedproduct'
const Product = () => {
  const {all_product}=useContext(Shopcontext)
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox />
      <Relatedproduct />
    </div>
  )
}

export default Product
