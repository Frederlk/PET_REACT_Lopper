import { FC, memo, useMemo, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import { RouteNames, routesConfig } from "../../routes";
import useMenu from "../../store/slices/menu/useMenu";

const Header: FC = () => {
    const ref = useRef(null);
    const { onToggleMenu } = useMenu(ref);

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

    const logo = useMemo(
        () => (
            <div className="header__logo">
                <Link to={RouteNames.HOME} className="header__logo-link">
                    Lopper
                </Link>
            </div>
        ),
        [RouteNames]
    );

    return (
        <header className="header" data-lp ref={ref}>
            <div className="header__container">
                {logo}
                <div className="header__menu">
                    <nav className="header__body-menu" data-da=".menu__container,600,first">
                        <ul className="menu__list">{menuLinks.length > 0 && menuLinks}</ul>
                    </nav>
                    <div className="menu__body" data-lp>
                        <div className="menu__container">BASE</div>
                    </div>
                </div>
                <div className="header__phone">
                    <a href="tel:01666693456" className="header__phone-link _icon-phone">
                        <span>(01) 666 - 693 - 456</span>
                    </a>
                </div>
                <div className="header__burger menu">
                    <button type="button" onClick={onToggleMenu} className="menu__icon icon-menu">
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
