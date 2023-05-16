import React from 'react'
import './headerr.scss'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHeart} from 'react-icons/ai'

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header_in'>
                <div className='left'>
                    <h2 className='ml'>Lalofo</h2>
                    <span><GiHamburgerMenu/></span>
                    <h3>Biznes ucun</h3>
                </div>
                <div className='right'>
                    <span><AiFillHeart/></span>
                    <h3>Gris * Qeydiyyat</h3>
                    <button>Elan Yerlesdir</button>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Header