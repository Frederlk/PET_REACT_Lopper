import { ReactNode, FC } from "react";

interface TopProps {
    title?: string;
    label: string;
    className?: string;
    children?: ReactNode;
}

const Top: FC<TopProps> = ({ className, title, label, children }) => {
    return (
        <div className={`${className || ""} top`}>
            <h3 className="top__label">{label}</h3>
            {title && <h2 className="top__title">{title}</h2>}
            {children && children}
        </div>
    );
};

export default Top;
