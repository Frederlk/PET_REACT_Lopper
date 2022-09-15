import { FC } from "react";
import Picture from "./Picture";

interface PreviewProps {
    img?: string;
    imgWebp?: string;
    text?: string;
    title: string;
}

const Preview: FC<PreviewProps> = ({ text = "We build great business", title, img, imgWebp }) => {
    return (
        <section className={`preview ${!img && !imgWebp ? "no-bg" : ""}`}>
            <div className="preview__container">
                <h1 className="preview__title">{title}</h1>
                <p className="preview__subtitle">{text}</p>
            </div>
            {img && imgWebp && (
                <div className="preview__bg">
                    <div className="preview__image-ibg">
                        <Picture srcWebp={imgWebp} fallbackSrc={img} alt={title} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Preview;
