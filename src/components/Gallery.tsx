import React, { useState, useEffect } from 'react';

import { springImages, buttons } from "../data/spring";

function Gallery() {

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
        <section>
            <div className="row g-0">
                <div className="col-lg-3">
                    <div className="fixed-part">
                        <h2>Spring Gallery</h2>
                          <hr/>
                        {buttons &&
                            buttons.map((type, index) => (
                                <div className="buttons-box">
                                    <button
                                        className="filter-button"
                                        key={index}
                                        value={type.value}
                                        onClick={handleFilter}
                                        type="button"
                                    >
                                        {type.name}
                                    </button>
                                </div>
                            ))}
                        <hr />
                        <div className="check">
                            {buttons &&
                                buttons.map((type, index) => (
                                    <div className="row g-0 box">
                                        <div className="col-lg-1">
                                            <button
                                                className="check-button"
                                                key={index}
                                                value={type.value}
                                                onClick={handleFilter}
                                                type="button"
                                            />
                                        </div>
                                        <div className="col-lg-11">
                                            <div className="check-p">{type.name}</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="center">
                        <p>Total Images : {gallery.length}</p>
                        <hr />
                        <div className="gallery-items">
                            {gallery &&
                                gallery.map((type, a) => (
                                    <div key={a} className="spring-img">
                                        <img src={gallery[a].url} alt="images" />
                                        <div className="tag">
                                            <h6 className="pinky">#spring</h6>
                                            <h6>#{gallery[a].category}</h6>
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