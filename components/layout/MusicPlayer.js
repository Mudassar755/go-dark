import React, { useEffect, useRef } from 'react'
import Plyr from "plyr-react";
import { useSelector } from 'react-redux';

const MusicPlayer = () => {

    const { fullExperience } = useSelector((state) => state.settings);
    const plyr = useRef(null);
    useEffect(() => {
        if (fullExperience) {
            plyr?.current?.plyr.play();
        }
    });

    return (
        <div className="audio-player" style={{zIndex:"100"}}>
            <Plyr
                source={{
                    type: "audio",
                    sources: [
                        {
                            src: "/audio.mp3",
                            type: "audio/mp3",
                        },
                    ],
                }}
                options={{
                    controls: ["play", "mute", "volume"],
                    loop: { active: true },
                }}
                ref={plyr}
            />
        </div>
    )
}

export default MusicPlayer
