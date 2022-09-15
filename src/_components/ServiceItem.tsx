import { FC } from "react";
import { IServiceItem } from "../models/models";

interface ServiceItemProps {
    className?: string;
    item: IServiceItem;
}

const ServiceItem: FC<ServiceItemProps> = ({ className, item }) => {
    const { color, icon, text, title } = item;

    return (
        <article className={`${className || ""} item-amazing`}>
            <span className={`item-amazing__icon icon ${icon} ${color}`}></span>
            <div className="item-amazing__body">
                <h6 className={`item-amazing__link ${color}`}>{title}</h6>
                <p className="item-amazing__text">
                    {text?.length > 140 ? text.substring(0, 140) + "..." : text}
                </p>
            </div>
        </article>
    );
};

export default ServiceItem;
