import React from 'react'
import './Header.css'
import header from '../../assets/image_top.png';
import { RiArrowRightLine } from 'react-icons/ri'

const Header = () => {
  return (
    <div id='header' className='proxima__header section__padding'>
        
        <div className='proxima__header-container'>
            <h1>Unlock nearshore resources<br/>& insurtech capabilities</h1>
            <p>We deliver transformation</p>
            <button>Discover How <RiArrowRightLine size={20}/> </button>
        </div>
        <div className='proxima__header-img'>
            <img src={header} alt='header_proxima'></img>
        </div>
        
        
    </div>
  )
}

export default Header