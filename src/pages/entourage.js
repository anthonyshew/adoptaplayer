import React, { useState, useRef } from 'react'
import "../styles/entourage.scss"

import useMediaQuery from '../hooks/useMediaQuery'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Arrow from "../svg/arrow-right.svg"


export default ({ location }) => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const scrollRef = useRef(null)
    const isSmallScreen = useMediaQuery("(max-width: 1035px")

    return (
        <Layout location={location}>
            <SEO title="Entourage Athletics Partnership">
                <meta name="og:image" content="/media/entourage-logo.png" />
                <meta name="twitter:image" content="/media/entourage-logo.png" />
                <meta name="twitter:image:alt" content="Remote coaching by minor league players!" />
            </SEO>
            <div className="page-entourage">
                <div className="img-container">
                    <img className="banner-image" src="/media/logo-mash.png" alt="Adopt a Minor Leaguer x Entourage Athletics" />
                </div>
                <h1>Remote Coaching by Minor Leaguers for Youth Players!</h1>
                <h2>Easy, effective - and supports AaML, too!</h2>
                <div className="sign-up-flex">
                    <a
                        className="link-button"
                        href="https://docs.google.com/forms/d/1xV3jLoqUHq2d7o9qnZY0DoZ9NiXt153LAOmnT5pT0Oo"
                    >
                        Minor Leaguer Sign Up
                </a>
                    <a
                        className="link-button"
                        href="https://www.entourageathletics.com/aaml"
                    >
                        Youth Sign Up
                </a>
                </div>
                <video
                    className="entourage-video"
                    src="https://video.wixstatic.com/video/713a0c_b28c6a6758f44475a547b36e3a686aef/480p/mp4/file.mp4"
                    controls={true}
                    muted
                    playsInline
                    autoPlay
                />

                <div className="side-scroller-container" >
                    <div className="content-container" ref={scrollRef} onScroll={() => setScrollPosition(scrollRef.current.scrollLeft)}>
                        <div className="content-box">
                            <h3>For Minor Leaguers</h3>
                            <p>Players can make a significant amount of income by becoming a part of the Entourage program.</p>
                            <p>Easing the burden of the in-season grind while using your knowledge about the game to help others are as easy as using any other phone app.</p>
                        </div>
                        <div className="content-box">
                            <h3>For Youth Players</h3>
                            <p>It's always great to find a coach with a different perspective.</p>
                            <p>Now imagine if that perspective was a current professional baseball player from your favorite team. Woah.</p>
                        </div>
                        <div className="content-box">
                            <h3>For The Game</h3>
                            <p>Creating a community around baseball is the best path forward for growing the game.</p>
                            <p>Through America's pastime, we all can create relationships that last a lifetime and benefit everyone involved.</p>
                        </div>
                    </div>
                    {scrollPosition === 0 && isSmallScreen && <Arrow style={{
                        width: "35px",
                        position: "absolute",
                        bottom: "16px",
                        right: "16px",
                    }} />}
                </div>
                <div className="sign-up-flex">
                    <a
                        className="link-button"
                        href="https://docs.google.com/forms/d/1xV3jLoqUHq2d7o9qnZY0DoZ9NiXt153LAOmnT5pT0Oo"
                    >
                        Minor Leaguer Sign Up
                </a>
                    <a
                        className="link-button"
                        href="https://www.entourageathletics.com/aaml"
                    >
                        Youth Player Sign Up
                </a>
                </div>
            </div>
        </Layout>
    )

}