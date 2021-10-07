import React from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
import activator from '../../assets/footer/activator.png'
import startup from '../../assets/footer/startup.png'
import ibm from '../../assets/footer/ibm.png'
import blockchain from '../../assets/footer/blockchain.png'

function Footer() {
    return (
        <div className='div__footer'>
            <div className='footer__details'>
            <div className='footer__comp'>
                <img src={logo} alt='logo'/>
                <h4>Lorem ipsum dolor sit amet, adipiscing.</h4>
            </div>
            <div className='footer__lis'>
            <div className='footer__li'>
                <h3><i class="fas fa-hand-point-right"></i> About</h3>
                <h3><i class="fas fa-hand-point-right"></i> Blog</h3>
                <h3><i class="fas fa-hand-point-right"></i> Contact</h3>
                <h3><i class="fas fa-hand-point-right"></i> Jobs</h3>
            </div>
            <div className='footer__li'>
                <h3><i class="fas fa-hand-point-right"></i> Newsletter</h3>
                <h3><i class="fas fa-hand-point-right"></i> Services</h3>
                <h3><i class="fas fa-hand-point-right"></i> Blockchain</h3>
                <h3><i class="fas fa-hand-point-right"></i> Team</h3>
            </div>
            <div className='footer__li'>
                <h3><i class="fas fa-hand-point-right"></i> Product</h3>
                <h3><i class="fas fa-hand-point-right"></i> Privacy</h3>
                <h3><i class="fas fa-hand-point-right"></i> SignIn</h3>
                <h3><i class="fas fa-hand-point-right"></i> Terms</h3>
            </div>
            </div>


            </div>
            <div className='soc'>
            <div className='footer__socials'>
                <SocialIcon url="https://angel.co/" bgColor='#4d3154'/>
                <SocialIcon url="https://instagram.com/" bgColor='#4d3154'/>
                <SocialIcon url="https://facebook.com/" bgColor='#4d3154'/>
                <SocialIcon url="https://linkedin.com/" bgColor='#4d3154'/>
                <SocialIcon url="https://twitter.com/" bgColor='#4d3154'/>
            </div>
            </div>
            <div className='footer__bottom'>
                <p>Lorem ipsum dolor sit amet,  adipiscing elit, ut labore et dolore magna aliqua.</p>
                {/* <div className='footer__bottom__imgs'>
                    <img src={activator} alt='act'/>
                    <img src={startup} alt='startup'/>
                    <img src={ibm} alt='ibm'/>
                    <img src={blockchain} alt='block'/>
                </div> */}
                <p>© Retink ™</p>
            </div>
        </div>
    )
}

export default Footer

