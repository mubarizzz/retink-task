import React from 'react'
import './Features.css'
import security from '../../assets/vectors/security.svg'
import trust from '../../assets/vectors/trust.svg'
import anonymous from '../../assets/vectors/anonymous.svg'
import website from '../../assets/vectors/website.svg'
import group from '../../assets/vectors/group.svg'
import business from '../../assets/vectors/business.svg'
import key from '../../assets/vectors/key.svg'


function Features() {
    return (
        <>
        <div className='div__features'>
            <div className='feature'>
                <img src={security} alt='feature' />
                <h2>Where your reputation lives</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis aute irure.</p>
            </div>
            <div className='feature'>
                <img className='trust' src={trust} alt='feature' />
                <h2>Trust and interact with confidence</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis aute irure Duis.</p>
            </div>
            <div className='feature'>
                <img src={anonymous} alt='feature' />
                <h2 className='anony'>Anonymous yet trusted</h2>
                <p>Lorem ipsum dolor sit ame consequat. Duis aute irure dolor in reprehenderit in voluptate Duis aute irure.</p>
            </div>
        </div>

    <div className='div__features div__orange div__2'>
    <div className='feature'>
                <img src={business} alt='feature' />
                <h2>Personal or Professional</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis aute irure.</p>
            </div>
            <div className='feature'>
                <img src={key} alt='feature' />
                <h2>Only you hold the keys</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
    </div>

    <div className='div__features div__orange div__2'>
    <div className='feature'>
                <img src={website} alt='feature' />
                <h2>Works with any website</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis aute irure.</p>
            </div>
            <div className='feature'>
                <img src={group} alt='feature' />
                <h2 className='anony'>Trust is the world's currency</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis aute irure.</p>
            </div>
        </div>
</>
    )
}

export default Features
