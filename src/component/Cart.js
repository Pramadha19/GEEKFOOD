import React from 'react'
import AuthorImg from './../assest/Images/cart-img.avif'
import "./Cart.css"

export const Cart = (props) => {
  return (
    <div className='cart-main'>
        <div className='comment'>
            <p>{props.children}</p>
        </div>
        <div className='author'>
            <div>
                <img className='author-img' src={AuthorImg} alt="Author-img-loading"></img>
            </div>
            <div className='author-details'>
                <h4>Gladis Lennon</h4>
                <p>Head of SEO</p>
            </div>
        </div>
    </div>
  )
}