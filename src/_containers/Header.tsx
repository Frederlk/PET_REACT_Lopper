import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import useMenu from "../store/slices/menu/useMenu";

const Header: FC = () => {
    const ref = useRef(null);
    const { onToggleMenu } = useMenu(ref);

    return (
        <header className="header" data-lp ref={ref}>
            <div className="header__container ">
                <div className="header__logo">
                    <Link to="/" className="header__logo-link">
                        Lopper
                    </Link>
                </div>
                <div className="header__menu">
                    <nav className="header__body-menu" data-da=".menu__container,600,first">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link to="/" className="menu__link _active">
                                    Home
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/services" className="menu__link">
                                    Services
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/work" className="menu__link">
                                    Work
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/about" className="menu__link">
                                    About
                                </Link>
                            </li>
                        </ul>
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

export default Header;
