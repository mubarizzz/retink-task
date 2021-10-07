import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {MenuItems} from './MenuItems'
import './Dropdown.css'


function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown__menu clicked' : 'dropdown__menu'} >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}> {item.title} </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dropdown
