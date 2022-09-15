import { FC } from "react";
import { ISphere } from "../../models/models";

const SphereItem: FC<ISphere> = ({ text, title, icon }) => {
    return (
        <article className="spheres__item item-spheres">
            <div className={`item-spheres__icon icon ${icon}`}></div>
            <h5 className="item-spheres__title">{title}</h5>
            <p className="item-spheres__text">{text}</p>
        </article>
    );
};

export default SphereItem;
