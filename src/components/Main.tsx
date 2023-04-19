import React, { useState, useEffect } from 'react';

import { springImages, buttons } from "../data/spring";
import { MAIN } from "../assets/index";

function Main() {

    interface SpringImage {
        category: string;
        url: string;
    }

    const [gallery, setGallery] = useState<SpringImage[]>([]);

    function getImages(): SpringImage[] {
        const imageList = springImages;
        return imageList;
    }

    useEffect(() => {
        setGallery(getImages());
    }, []);

    function filterImages(imageType: string): SpringImage[] {
        let singleImage: SpringImage[] = getImages().filter(
            (type) => type.category === imageType
        );
        return singleImage;
    }

    function handleFilter(event: any) {
        let result = event.target.value;
        result !== "all"
            ? setGallery(filterImages(result))
            : setGallery(getImages());
    }
    return (
        <>
            <section>
                <div className="row g-0">
                    <div className="content">
                        <h1>Open-Source UI elements for any project</h1>
                        <p>Share and use beautiful custom elements made with React, Typescript and Scss</p>
                        <button> Discover</button>
                        <button className='blog-btn'> Blogs</button>
                    </div>

                </div>
                <div className="row g-0">
                    <div className="col-lg-5">
                        <div className=''>
                            Test
                        </div>
                        <div className='col-lg-7'>
                            <img src={MAIN} alt="" />
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default Main;