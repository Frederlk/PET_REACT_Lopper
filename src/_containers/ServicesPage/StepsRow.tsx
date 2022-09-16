import { FC } from "react";
import { IStep } from "../../models/models";
import { Picture } from "../../_components";

const StepsRow: FC<IStep> = ({ step, title, text, img, imgWebp }) => {
    return (
        <div className="steps__row">
            <div className="steps__content">
                <div className="steps__container">
                    <div className="steps__inner">
                        <div className="steps__step">{step}</div>
                        <h5 className="steps__title">{title}</h5>
                        <p className="steps__text">{text}</p>
                    </div>
                </div>
            </div>
            <div className="steps__image-wrap">
                <div className="steps__image-ibg">
                    <Picture srcWebp={imgWebp} fallbackSrc={img} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default StepsRow;
