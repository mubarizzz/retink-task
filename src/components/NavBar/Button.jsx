import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button() {
    return (
        <Link to='/'>
            <button className='button__btn'>Sign Up</button>
        </Link>
    )
}

export default Button
