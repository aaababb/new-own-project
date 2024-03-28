import React from 'react'
import { useSelector} from 'react-redux'

import car from '../../assets/svg/like.svg'

import './Cart.css'
function Cart() {

    const {carts} = useSelector((state) => state.cart)

    console.log(carts)


  return (
    <div className='screen'>
        <p>WhishList</p>
        <div className='cart container'>
            <div className='cart-top'>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        carts.map((item) => (
                            <tr>
                                <td className='cart-image'>
                                    <img src={car} alt="" />
                                    <p>{item.title.substring(0, 10)}</p>
                                </td>
                                <td className='cart-price'>2000$</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Cart