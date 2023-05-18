import React, { useState } from 'react'
import './headerr.scss'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

const Header = (props) => {
    const [door, setDoor] = useState(false)

    return (
        <>
            <div className='header'>
                <div className='header_in'>
                    <div className='left'>
                        <h2 className='ml'>Lalofo</h2>
                        <span>
                            <ul className='navbar'>{props.children}</ul>
                        </span>
                        <h3>Biznes ucun</h3>
                    </div>
                    <div className='right'>
                        <span><AiFillHeart /></span>
                        <h3>Gris * Qeydiyyat</h3>
                        <button>Elan Yerlesdir</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export function NavItem(props) {
    const [door, setDoor] = useState(false)
    return (
        <li className='nav-item'>
            <a href="#" className="icon-button" onClick={() => setDoor(!door)}>
                {props.icon}
            </a>
            {door && props.children}
        </li>
    );
}

export function DropDownMenu() {
    function DropDownItem(props) {
        return (
            <a href='#' className='menu'>
                <div className='left'>
                    {props.children}
                </div>
            </a>
        );
    }

    const [drop, setDrop] = useState(false)
    const [language, setLanguage] = useState('Azerbaycan dili')

    const languageClick = (lang) =>{
        setLanguage(lang)
    }
    return (
        <div className='dropdown'>
            <div>
                <ul>
                    <li className='esas' onClick={() => setDrop(!drop)}><span id='global'><AiOutlineGlobal /></span>{language}
                        <ul className={drop === false ? "closed" : "open"} >
                            <li onClick={() => languageClick('Rus')}>Rus</li>
                            <li onClick={() => languageClick('Azerbaycan dili')}>Azerbaycan dili</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <DropDownItem>istifadeci razilasmasi</DropDownItem>
            <DropDownItem>Mexfilik Siyaseti</DropDownItem>
            <DropDownItem>Tehlukesiz sat ve al</DropDownItem>
            <DropDownItem>Odenisli xidmetler</DropDownItem>
            <DropDownItem>Nece satmaq</DropDownItem>
            <DropDownItem>Elaqe</DropDownItem>
            <DropDownItem>Saytin xeritesi</DropDownItem>
            <DropDownItem>Reklam</DropDownItem>
            <DropDownItem>Aksiyanin qaydalari</DropDownItem>
            <div id='Subshare'>
                <hr/>
                <div>
                    <span className='sosial face'><FaFacebookF/>Facebook</span>
                </div>
                <div>
                    <span className='sosial twi'><AiOutlineTwitter/>Twitter</span>
                </div>
                <div>
                    <span className='sosial ins'><BsInstagram/>Instaqram</span>
                </div>
            </div> 
        </div>
    );
}

export default Header