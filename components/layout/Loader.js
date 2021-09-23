import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSettings } from "../../store/actions/settingsActions";
import Loading from './Loading';

const Loader = () => {
    const experience = useRef(null);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.settings.loading)

    let width;
    if (window.innerWidth > 570) {
      width = 520;
    } else {
      width = window.innerWidth - 5;
    }

  const onEnd = () => {
    experience.current.classList.add("active");
  };
    return (
        <>
          <div className="experience" ref={experience}>
            <div className="experience__modal">
              <svg
                className="experience__modal-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <rect
                  id="rectName"
                  x="0"
                  y="0"
                  fill="none"
                  className="experience_rect"
                  width={width}
                  height="300px"
                  margin="10px"
                  rx="3"
                  ry="3"
                />
              </svg>
              <h1 className="experience__modal-title">
                Do you want the full experience?
              </h1>
              <div className="experience__modal-buttons">
                <button
                  className="experience__button"
                  onClick={() => {
                    dispatch(
                      setSettings({
                        fullExperience: true,
                        loading: false,
                      })
                    );
                  }}
                >
                  <svg
                    className="experience__button-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                  >
                    <rect x="0" y="0" fill="none" width="150px" height="35px" />
                  </svg>
                  <div className="experience__button-content">YES</div>
                </button>
                <button
                  className="experience__button"
                  onClick={() => {
                    dispatch(
                      setSettings({
                        fullExperience: false,
                        loading: false,
                      })
                    );
                  }}
                >
                  <svg
                    className="experience__button-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                  >
                    <rect x="0" y="0" fill="none" width="150px" height="35px" />
                  </svg>
                  <div className="experience__button-content">NO</div>
                </button>
              </div>
            </div>
          </div>

          <Loading onEnd={onEnd} />
        </>
    )
}

export default Loader
