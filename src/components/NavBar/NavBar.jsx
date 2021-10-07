import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Dropdown from './Dropdown'
import './NavBar.css'
import logo from '../../assets/logo.png'

function NavBar() {

    const[click, setClick] = useState(false);
    const[dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false)
        }
    }

    return (
        <div className='div__navbar'>
            <Link to='/' className='navbar__logo'><img src={logo} alt='logo' /></Link>
            <div className='menu__icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'} >
            <li className='nav__item'>
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        How It Works
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav__item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        For <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav__item'>
                    <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
            
                <li className='nav__item'>
                    <Link to='/' className='nav__links__mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
                
            </ul>
            <Button />
        </div>
    )
}

export default NavBar
