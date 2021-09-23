import React, { useEffect, useRef } from 'react'
import Plyr from "plyr-react";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


const MusicPlayer = ({children}) => {

    const { fullExperience } = useSelector((state) => state.settings);
    const plyr = useRef(null);
// const {} = useRouter()
    // useEffect(() => {
    //     if (fullExperience) {
    //         plyr?.current?.plyr.play();
    //     }
    // }, [plyr, fullExperience]);
 
    // ref={(ref) => ref && refMap.set(item, ref)}
    return (
        <div className="audio-player">
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
