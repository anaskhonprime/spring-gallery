import React, { useState, useEffect, useRef } from 'react';

import { navData } from '../data/nav-data';

/* Importing Components */
import Gallery from './Gallery';


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
                <img className="" src={navData.logo} alt="spring" />
                <div className="nav-items">
                    <a href="/"> Home</a>
                    <a href="/"> About</a>
                    <a href="/"> Contact</a>
                    <a href="/"> Projects</a>
                </div>
            </nav>
            <section>
                <Gallery />
            </section>

        </>
    );
}

export default Home;