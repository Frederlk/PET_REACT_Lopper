import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__container ">
                <div className="header__logo">
                    <Link to="/" className="header__logo-link">
                        Lopper
                    </Link>
                </div>
                <div className="header__menu">
                    <nav className="header__body-menu">
                        <ul className="menu__list" data-da=".menu__container,600,first">
                            <li className="menu__item">
                                <Link to="#" className="menu__link _active">
                                    Home
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="#" className="menu__link">
                                    Services
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="#" className="menu__link">
                                    Work
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link to="#" className="menu__link">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__phone">
                    <a href="tel:01666693456" className="header__phone-link _icon-phone">
                        <span>(01) 666 - 693 - 456</span>
                    </a>
                </div>
                <div className="header__burger menu">
                    <nav className="menu__body">
                        <div className="menu__container">sfijfiowjf</div>
                    </nav>
                    <button type="button" className="menu__icon icon-menu">
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
