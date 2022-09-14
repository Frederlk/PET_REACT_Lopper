import { FC, useMemo, memo } from "react";
import { NavLink } from "react-router-dom";

import { routesConfig } from "../../routes";
import { MenuBlock } from "..";
import { useWindowSize } from "../../hooks";

const MoreLinks: FC = () => {
    const { width } = useWindowSize();

    const moreLinks = useMemo(() => {
        return routesConfig.map(({ path, title }, i) => {
            if ((title as string) === "Gallery" || (title as string) === "Contacts")
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
        <MenuBlock label={width > 600 ? "More" : "Menu"}>
            <ul className="menu__more">{moreLinks.length > 0 && moreLinks}</ul>
        </MenuBlock>
    );
};

export default memo(MoreLinks);
