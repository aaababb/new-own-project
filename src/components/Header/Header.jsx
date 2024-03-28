import React from 'react'

import search from '../../assets/svg/search.svg'
import location from '../../assets/svg/location.svg'
import setting from '../../assets/svg/setting.svg'

import './Header.css'

function Header() {
  return (
    <div>
      <div className='header'>
        <img src={location} className='location' alt="" />
        <p className='bish'>Биш</p>
        <div className='header-input'>
          <img src={search} alt="" />
          <input />
        </div>
        <img src={setting} className='setting' alt="" />
      </div>
    </div>
  )
}

export default Header