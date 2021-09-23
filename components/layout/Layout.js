import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./Header";
import Loading from "./Loading";
import { useDispatch, getState, useSelector } from "react-redux";
import { setSettings } from "../../store/actions/settingsActions";
import store from "../../store/store";
import Plyr from "plyr-react";
import ReactAudioPlayer from "react-audio-player";
import audio from "../../utils/Audio";
import Loader from "./Loader";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.settings.loading)
  // const loading = store.getState().settings.loading;

  // console.log("stateee", state)
  console.log("loading", loading)
  let width;
  if (window.innerWidth > 570) {
    width = 520;
  } else {
    width = window.innerWidth - 5;
  }

  const experience = useRef(null);

  const onEnd = () => {
    experience.current.classList.add("active");
  };

  return (
    <div className="layout">
      {/* <Head>
        <title>{title} - GoDark</title>

        <link rel="icon" href="/favicon.ico" />
      </Head> */}
          <Header />
          {children}
          {/* <div
            style={{ marginTop: "14rem", zIndex: "999", background: "red" }}
            className="audio-player"
          >
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
                controls: ["play", "mute"],
                loop: { active: true },
              }}
            />
          </div> */}
    </div>
  );
};

// Layout.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node,
// };

export default Layout;
