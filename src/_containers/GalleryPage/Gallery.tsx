import { FC, useRef, useCallback } from "react";
import LightGallery from "lightgallery/react";
import { data } from "../../constants";
import GalleryItem from "./GalleryItem";

const galleryItems = data.galleryItems.map((item, i) => (
    <GalleryItem key={item.title + item.img + i} item={item} />
));

const Gallery: FC = () => {
    const lightGallery = useRef(null);
    const onInit = useCallback((detail: any) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    if (galleryItems.length === 0) return null;

    return (
        <LightGallery
            onInit={onInit}
            speed={500}
            elementClassNames="gallery"
            licenseKey={process.env.REACT_APP_LIGHTGALLERY_API_KEY}
        >
            {galleryItems}
        </LightGallery>
    );
};

export default Gallery;
