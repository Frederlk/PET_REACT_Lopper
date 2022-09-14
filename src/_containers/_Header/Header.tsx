import { FC, memo, useRef } from "react";

import useMenu from "../../store/slices/menu/useMenu";
import { Logo } from "../../_components";
import { ServicesLinks, MoreLinks, MenuLinks, SocialLinks } from "..";

const Header: FC = () => {
    const ref = useRef(null);
    const { onToggleMenu } = useMenu(ref);

    return (
        <header className="header" data-lp ref={ref}>
            <div className="header__container">
                <div className="header__logo">
                    <Logo className="header__logo-link" />
                </div>
                <div className="header__menu">
                    <nav className="header__body-menu" data-da=".menu__more,600,first">
                        <ul className="menu__list">
                            <MenuLinks />
                        </ul>
                    </nav>
                    <div className="menu__body" data-lp>
                        <div className="menu__container">
                            <div className="menu__block">
                                <MoreLinks />
                            </div>
                            <div className="menu__block">
                                <ServicesLinks />
                            </div>
                            <div className="menu__block">
                                <SocialLinks />
                            </div>
                        </div>
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
