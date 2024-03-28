import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import whish from '../../assets/svg/whish.svg'
import image from '../../assets/image/carousel2.png'

import { addToCart } from '../../redux/cart/CartSlice'


import './Product.css'

function Product({data}) {

    const dispatch = useDispatch()

    function addCart(item) {
        dispatch(addToCart(item))
    }
  return (
    <div>
        <div className='home-product'>
            <div className='product-whish'>
                <div className='product-info'>
                    <div className='product-title'>{data.title.substring(0, 30)}</div>
                    <p className='product-price'>{data.price}</p>
                    <p className='product-text'>{data.text.substring(0,32)}</p>
                </div>
                <img className='whish-icon' onClick={() => addCart(data)} src={whish}/>
            </div>
            <Link to={`/aboutProduct/${data.id}`}>
                <img className='product-image' src={data.image ? data.image : image}/>
            </Link>
        </div>
    </div>
  )
}

export default Product