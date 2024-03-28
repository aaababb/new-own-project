import React from 'react'
import { Link } from 'react-router-dom'

import like from '../../assets/svg/like.svg'
import contact from '../../assets/svg/contact.svg'
import plus from '../../assets/svg/plus.svg'
import sms from '../../assets/svg/sms.svg'
import home from '../../assets/svg/home.svg'

import './Footer.css'


function Footer() {
  return (
    <div>
        <div className='footer'>
          <Link to={'/'}>
            <img  className='footer-home' src={home}/>
          </Link>

          <Link to={'/like'}>
            <img  className='footer-like' src={like}/>
          </Link>

          <Link to={'/addCart'}>
            <img src={plus} className='footer-plus'/>
          </Link>

          <Link  to={'/messenger'}>
            <img src={sms} className='footer-sms'/>
          </Link>

          <Link to={'/register'} >
            <img src={contact} className='footer-contact'/>
          </Link>
        </div>
    </div>
  )
}

export default Footer