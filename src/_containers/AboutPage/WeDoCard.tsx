import { FC } from "react";

interface WeDoCardProps {
    title: string;
    text: string;
}

const WeDoCard: FC<WeDoCardProps> = ({ title, text }) => {
    return (
        <div className="wedo__card card-wedo">
            <h5 className="card-wedo__title _icon-arrow" data-spoller>
                {title}
            </h5>
            <div className="card-wedo__body">
                <p className="card-wedo__text">{text}</p>
            </div>
        </div>
    );
};

export default WeDoCard;
