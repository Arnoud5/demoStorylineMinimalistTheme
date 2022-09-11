import React from 'react'

import MusicWedding from "./song-happiness.ogg"
import ReactAudioPlayer from 'react-audio-player'

const MusicComponent = () => {

    return (
        <>
            <ReactAudioPlayer
                src={MusicWedding}
                autoPlay
            />
        </>
    )

}

export default MusicComponent; 