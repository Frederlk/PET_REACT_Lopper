import { FC, ReactNode } from "react";

interface MenuBlockProps {
    label: string;
    children: ReactNode;
}

const MenuBlock: FC<MenuBlockProps> = ({ label, children }) => {
    return (
        <>
            <h6 className="menu__label">{label}</h6>
            {children}
        </>
    );
};

export default MenuBlock;
