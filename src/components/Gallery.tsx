import React, { useState, useEffect } from 'react';

import { springImages, buttons } from "../data/spring";

function Gallery() {

    interface SpringImage {
        category: string;
        url: string;
    }

    const springImages: SpringImage[] = [
        {
            category: "flowers",
            url:
                "https://i.guim.co.uk/img/media/d5b563bef60c06a22dc65a18c391f63ff42549e6/0_205_4288_2573/master/4288.jpg?width=1200&quality=85&auto=format&fit=max&s=f69dafe4bb0bc828c5e07298240f1d3a",
        },
        {
            category: "flowers",
            url:
                "https://hips.hearstapps.com/hmg-prod/images/spring-meadow-royalty-free-image-1579125133.jpg",
        },
        {
            category: "flowers",
            url: "https://glamadelaide.com.au/wp-content/uploads/2020/09/s-spring-flowers.jpg",
        },
    ];

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

    function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
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
                                        onclick={handleFilter}
                                        type="button"
                                    >
                                        {type.name}
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