import React from 'react'
import "../Header/Header.css"
const Header = () => {
  return (
    <div className='header'>
      <nav className='nav_style'>
       <a href="/home">Home</a>
       <a href="/shop">Shop</a>
       <a href="/about">About</a>
      </nav>
    </div>
  )
}

export default Header
