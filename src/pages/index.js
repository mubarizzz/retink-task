import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HomeBody from '../components/HomeBody/HomeBody'
import Banner from '../components/Banner/Banner'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'

function Index() {
    return (
        <div>
            <NavBar/>
            <HomeBody/>
            <Features/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Index
