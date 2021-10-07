import React from 'react'
import './Banner.css'
import airbnb from '../../assets/logos/airbnb.png'
import linkedin from '../../assets/logos/linkedin.png'
import amazon from '../../assets/logos/amazon.png'
import facebook from '../../assets/logos/facebook.png'
import angellist from '../../assets/logos/angellist.png'
import ebay from '../../assets/logos/ebay.png'
import maps from '../../assets/logos/maps.png'
import quora from '../../assets/logos/quora.png'
import flipkart from '../../assets/logos/flipkart.png'
import youtube from '../../assets/logos/youtube.png'
import ig from '../../assets/logos/ig.png'
import pintrest from '../../assets/logos/pintrest.png'
import twitter from '../../assets/logos/twitter.png'
import github from '../../assets/logos/github.png'
import reddit from '../../assets/logos/reddit.png'
import upwork from '../../assets/logos/upwork.png'

function Banner() {
    return (
        <div className='banner'>
            <h2>Lorem ipsum dolor sit amet, adipiscing elit, ut labore et dolore magna aliqua adipiscing:</h2>
        <div className='container'>
            <div className='photobanner'>
                <img className="first" src={airbnb} alt='airbnb'/>
                <img src={linkedin} alt='linkedin'/>
                <img src={amazon} alt='amazon'/>
                <img src={facebook} alt='facebook'/>
                <img src={angellist} alt='angellist'/>
                <img src={ebay} alt='ebay'/>
                <img src={reddit} alt='reddit'/>
                <img src={upwork} alt='upwork'/>

            </div>
        </div>
        <div className='container'>
            <div className='photobanner2'>
            <img className='second' src={maps} alt='maps'/>
                <img src={quora} alt='quora'/>
                <img src={flipkart} alt='flipkart'/>
                <img src={youtube} alt='youtube'/>
                <img src={ig} alt='ig'/>
                <img src={pintrest} alt='pintrest'/>
                <img src={twitter} alt='twitter'/>
                <img src={github} alt='github'/>
            </div>
        </div>
        <p>*Information shown are just examples</p>
        </div>
    )
}

export default Banner
