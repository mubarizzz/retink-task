import React from 'react'
import './HomeBody.css'
import ex from '../../assets/ex.jpeg'
import logo from '../../assets/logo.png'
import Buttons from './Button'

function HomeBody() {
    return (
        <div className='m'>
            <div className="main__up">
                <div className='div__homebody'>
            <div className='div__homebody__left'>
                <img src={logo} alt='logo' />
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                <Buttons/>
            </div>
            <div className='div__homebody__right'>
                <img src={ex} alt="office"/>
            </div>
            </div>
            </div>
            <div className="main__down">
                {/* <h1>Your most valuable asset is theYour most valuable asset is theYour most valuable asset is theYour most valuable asset is theYour most valuable asset is the</h1> */}
            </div>
            </div>
    )
}

export default HomeBody
