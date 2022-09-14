import { FC, useMemo, memo } from "react";
import { NavLink } from "react-router-dom";

import { routesConfig } from "../../routes";

const MenuLinks: FC = () => {
    const menuLinks = useMemo(() => {
        return routesConfig.map(({ path, title, type }, i) => {
            if (type === "menu" && (title as string) !== "Gallery" && (title as string) !== "Contacts")
                return (
                    <li key={`${path}` || i} className="menu__item">
                        <NavLink to={`${path}`} className="menu__link ">
                            {title}
                        </NavLink>
                    </li>
                );
        });
    }, [routesConfig]);

    return <>{menuLinks.length > 0 && menuLinks}</>;
};

export default memo(MenuLinks);
