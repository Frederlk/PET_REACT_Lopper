import { FC, useMemo, memo } from "react";
import { NavLink } from "react-router-dom";

import { routesConfig } from "../../routes";
import { MenuBlock } from "..";

const ServicesLinks: FC = () => {
    const servicesLinks = useMemo(() => {
        return routesConfig.map(({ path, title, type }, i) => {
            if (type === "service")
                return (
                    <li key={`${path}` || i} className="menu__item">
                        <NavLink to={`${path}`} className="menu__link ">
                            {title}
                        </NavLink>
                    </li>
                );
        });
    }, [routesConfig]);

    return (
        <MenuBlock label="Services">
            <ul className="menu__services">{servicesLinks.length > 0 && servicesLinks}</ul>
        </MenuBlock>
    );
};

export default memo(ServicesLinks);
