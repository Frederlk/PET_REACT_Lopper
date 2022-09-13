import React, { FC } from "react";

interface FooterListProps {
    label: string;
    className?: string;
    children: React.ReactNode;
}

const FooterList: FC<FooterListProps> = ({ label, className, children }) => {
    return (
        <>
            <div className={className || ""}>
                <h6 className="footer__label" data-spoller>
                    {label}
                    <span className="_icon-arrow"></span>
                </h6>
                {children}
            </div>
        </>
    );
};

export default FooterList;
