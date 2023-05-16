import React from 'react'
import './cart.scss'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { AiFillHeart } from 'react-icons/ai'

const Cart = ({ imgUrl, name,price }) => {
    return (
        <>
            <div className='cart'>
                <div className='cart_img'>
                    <img src={imgUrl}></img>
                </div>
                <div className='cart_info'>
                    
                    <div className='name'>
                        <div className='name_text'>
                            <a>{name}</a>
                        </div>
                        <div className='icon'>
                            <span><SlEnvolopeLetter /></span>
                            <span id='heart'><AiFillHeart /></span>
                        </div>
                    </div>
                    <div className='price'>
                        <h3>{price}<span> AZN</span></h3>
                    </div>
                    <div className='contact'>
                        <p>Baki 16.05.2023 / 4:53</p>
                        <h3>Zeng Edin</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart



