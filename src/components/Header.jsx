import logoHeader from '../images/Logo_header.png'
import React from 'react'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="логотип Место Россия" />
    </header>
  )
}

export default Header