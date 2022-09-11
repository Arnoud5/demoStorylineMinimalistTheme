import React from 'react'

import ReactAudioPlayer from 'react-audio-player'

const MusicComponent = () => {
    return (
        <>
            <ReactAudioPlayer
                src="./hapiness.mp3"
                autoPlay={true}
            />
        </>
    )

}

export default MusicComponent; 