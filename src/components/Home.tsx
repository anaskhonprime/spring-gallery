import React, { useState, useEffect, useRef } from 'react';

import { navData } from '../data/nav-data';

/* Importing Components */
import Gallery from './Gallery';
import Main from './Main';


function Home() {
    const lastScrollTop = useRef(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            var { pageYOffset } = window;
            if (pageYOffset > lastScrollTop.current) {
                //scroll down
                setIsNavbarVisible(false);
            } else if (pageYOffset < lastScrollTop.current) {
                //scroll up
                setIsNavbarVisible(true);
            }
            //else, horizontal scroll
            lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
        }, { passive: true }
        );
    }, []);


    return (
        <>
            <nav className={`${isNavbarVisible ? "visible" : ""}`}>
                <div className="nav-items">
                <h1 className ="main-logo">UIPrime</h1>
                    <a href="/"> Home</a>
                    <a href="/"> Discover</a>
                    <a href="/">Blogs</a>
                    <a href="/">Challenges</a>
                </div>
                <div className="nav-items">
                    <a href="/">Get Started</a>
                    <a href="/">Github</a>
                </div>
            </nav>
            <section>
                <Main />
            </section>

        </>
    );
}

export default Home;