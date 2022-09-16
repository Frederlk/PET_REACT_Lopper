import { FC } from "react";
import { IGalleryItem } from "../../models/models";
import { Picture } from "../../_components";

const GalleryItem: FC<{ item: IGalleryItem }> = ({ item }) => {
    const { img, imgWebp, title, text, green } = item;

    return (
        <div data-src={img} className="gallery__item">
            <div className={`gallery__image-ibg ${green ? "_green" : ""}`}>
                <Picture srcWebp={imgWebp} fallbackSrc={img} alt={text} />
            </div>
            <div className="gallery__content">
                <div className="gallery__container">
                    <div className="gallery__title">{title}</div>
                    {text && <p className="gallery__text">{text}</p>}
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;
