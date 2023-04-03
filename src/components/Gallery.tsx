import React, { useState, useEffect } from 'react';

import { springImages, buttons } from "../data/spring";

function Gallery() {

    const [gallery, setGallery] = useState(0);

    const getImages = () => {
        const imageList = springImages;
        return imageList;
    }

    useEffect(() => {
        setGallery(getImages);
    }, []);

    const filterImages = (imageType) => {
        let singleImage:string = getImages().filter(type => type.category === imageType);
        return singleImage;
    }

    const handleFilter = (e) => {
        let result = e.target.value;
        result !== "all"
            ? setGallery(filterImages(result))
            : setGallery(getImages());
    }

    return (
        <section>
            <div className="row g-0">
                <div className="col-lg-3">
                    <div className="fixed-part">
                        <h2>Spring Gallery</h2>
                        <p>
                            The Spring season is a time of year when the weather starts to change.</p>
                        <hr />
                        <h2>Discover</h2>
                        {buttons &&
                            buttons.map((type, index) => (
                                <>
                                    <button
                                        className="filter-button"
                                        key={index}
                                        value={type.value}
                                        onClick={handleFilter}
                                        type="button"
                                    >
                                        type.name
                                    </button>
                                </>
                            ))}
                    </div>

                </div>
                <div className="col-lg-9">
                    <div className="center">
                        <div className="gallery-items">
                            {springImages.map((key, a) => (
                                <div key={a} className="spring-img">
                                    <img src={springImages[a].url} alt="images" />
                                    <div className="tag">
                                        <h6 className="pinky">#spring</h6>
                                        <h6>#{springImages[a].category}</h6>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Gallery;