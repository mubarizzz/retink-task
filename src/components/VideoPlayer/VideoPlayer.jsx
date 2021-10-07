import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'
import watcharrow from '../../assets/watcharrow.svg'
import video from '../../assets/video.svg'

function VideoPlayer() {
    return (
        <div className='main__player'>
        <div className='div__player'>
        <div className="player-wrapper">
        <ReactPlayer
          url='https://youtu.be/CeSAjK2CBEA'
          controls
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
      <div className='videoplayer__arrow'>
                <img src={watcharrow} alt='watcharrow' />
                 <h3>Checkout This Video</h3>
            </div>
      </ div>
      <div className='img__player'>
          <img src={video} alt='video'/>
      </div>
      </div>
    )
}

export default VideoPlayer
