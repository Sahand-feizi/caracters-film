import React from 'react'
import { FaRegGrinHearts } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function Header() {
    return (
        <div className='header'>
            <div className="logo">
                LOGO
                <FaRegGrinHearts className='icon' />
            </div>
            <input type="text" className="search-input" placeholder='search ...' />
            <span>Found X Caracters</span>
            <div className="heart">
                <FaRegHeart className='icon' />
                <span className="favirate-number">1</span>
            </div>
        </div>
    )
}

export default Header
