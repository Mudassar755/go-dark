import Plyr from "plyr-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layout from "../components/layout/Layout";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "plyr-react/dist/plyr.css";
import Link from "next/link";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Blog = () => {
  const { fullExperience } = useSelector((state) => state.settings);
  const parallax = useRef(null);
  const plyr = useRef(null);

  const onMouseOver = (e) => {
    document.getElementById("earth_background-text").style.display = "block";
  };

  const onMouseLeave = (e) => {
    document.getElementById("earth_background-text").style.display = "none";
  };
  // here

  useEffect(() => {
    if (fullExperience) {
      plyr?.current?.plyr.play();
    }
  }, [plyr, fullExperience]);

  return (
    // <Layout title="Id">
    <>
      <div
        className="home"
        style={{ width: "100%", height: "100%", background: "#020205" }}
      >
        <Parallax ref={parallax} pages={4}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#020205" }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#020205" }}
          />
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none", display: "none" }}
          >
            <img
              src={url("satellite4")}
              style={{ width: "15%", marginLeft: "70%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
              alt=""
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3
              id="earth_background-text"
              style={{ display: "none" }}
              className="earth_background-text"
            >
              Portland Oregon
            </h3>

            <Link id="toggler" className="toggler" href="/contact">
              <img
                className="animate-flicker glitch "
                src={url("earth")}
                style={{ width: "50%" }}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                alt=""
              />
            </Link>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundImage: url("clients", true),
              display: "none",
            }}
          />
          <ParallaxLayer
            offset={1}
            speed={1.2}
            onClick={() => parallax.current.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.8}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <span data-text="GO DARK" className="title">
              GO DARK
            </span> */}
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={1.2}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <span className="about_section-title">
              We are hackers, we are good people
            </span>
            <span className="about_section-title1">
              , we are here to help protect you.
            </span> */}
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={1.3}
            onClick={() => parallax.current.scrollTo(4)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={url("bash")} style={{ width: "40%" }} alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
              alt=""
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div id="blog_container">
              <div className="container">
                <a className="blog_card-link" href="/id">
                  <article className="blog_blog-card">
                    <img
                      className="blog_post-image"
                      src="https://etimg.etb2bimg.com/photo/71884644.cms"
                    />
                    <div className="blog_article-details">
                      <h4 className="blog_post-category">Category</h4>
                      <h3 className="blog_post-title">Blog title</h3>
                      <p className="blog_post-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam deserunt incidunt veritatis cupiditate, iusto
                        sit voluptatum veniam laborum molestiae nihil sapiente
                        error, fugit, minima cumque modi! Ea aliquam commodi
                        provident.
                      </p>
                      <p className="blog_post-author">By Name</p>
                    </div>
                  </article>
                </a>
                <a className="blog_card-link" href="/id">
                  <article className="blog_blog-card">
                    <img
                      className="blog_post-image"
                      src="https://etimg.etb2bimg.com/photo/71884644.cms"
                    />
                    <div className="blog_article-details">
                      <h4 className="blog_post-category">Category</h4>
                      <h3 className="blog_post-title">Blog title</h3>
                      <p className="blog_post-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam deserunt incidunt veritatis cupiditate, iusto
                        sit voluptatum veniam laborum molestiae nihil sapiente
                        error, fugit, minima cumque modi! Ea aliquam commodi
                        provident.
                      </p>
                      <p className="blog_post-author">By Name</p>
                    </div>
                  </article>
                </a>
              </div>
              <div className="container">
                <a className="blog_card-link" href="/id">
                  <article className="blog_blog-card">
                    <img
                      className="blog_post-image"
                      src="https://etimg.etb2bimg.com/photo/71884644.cms"
                    />
                    <div className="blog_article-details">
                      <h4 className="blog_post-category">Category</h4>
                      <h3 className="blog_post-title">Blog title</h3>
                      <p className="blog_post-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam deserunt incidunt veritatis cupiditate, iusto
                        sit voluptatum veniam laborum molestiae nihil sapiente
                        error, fugit, minima cumque modi! Ea aliquam commodi
                        provident.
                      </p>
                      <p className="blog_post-author">By Name</p>
                    </div>
                  </article>
                </a>
                <a className="blog_card-link" href="/id">
                  <article className="blog_blog-card">
                    <img
                      className="blog_post-image"
                      src="https://etimg.etb2bimg.com/photo/71884644.cms"
                    />
                    <div className="blog_article-details">
                      <h4 className="blog_post-category">Category</h4>
                      <h3 className="blog_post-title">Blog title</h3>
                      <p className="blog_post-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam deserunt incidunt veritatis cupiditate, iusto
                        sit voluptatum veniam laborum molestiae nihil sapiente
                        error, fugit, minima cumque modi! Ea aliquam commodi
                        provident.
                      </p>
                      <p className="blog_post-author">By Name</p>
                    </div>
                  </article>
                </a>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundImage: url("clients", true),
              display: "none",
            }}
          />
          <ParallaxLayer
            offset={1}
            speed={1.2}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.8}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <span data-text="GO DARK" className="title">
              GO DARK
            </span> */}
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => parallax.current.scrollTo(0)}
          >
            <img src={url("clients-main")} style={{ width: "40%" }} alt="" />
          </ParallaxLayer>
        </Parallax>
      </div>
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
            controls: [
              "play",
              "progress",
              "current-time",
              "duration",
              "mute",
              "volume",
            ],
            loop: { active: true },
          }}
          ref={plyr}
        />
      </div>
      </>
    // </Layout>
  );
};

export default Blog;
