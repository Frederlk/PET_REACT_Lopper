import { FC } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__inner" data-spollers="479.98,max">
                    <div className="footer__lopper">
                        <Link to="/" className="footer__logo">
                            Lopper
                        </Link>
                        <h4 className="footer__text">Eu augue ut lectus arcu bibendum at.</h4>
                    </div>
                    <div className="footer__menu">
                        <h6 className="footer__label" data-spoller>
                            Menu<span className="_icon-arrow_down"></span>
                        </h6>
                        <nav className="footer__body">
                            <ul className="footer__list">
                                <li>
                                    <Link to="/" className="footer__link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/About" className="footer__link">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Servces" className="footer__link">
                                        Servces
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/News" className="footer__link">
                                        News
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Gallery" className="footer__link">
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Contact" className="footer__link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__services">
                        <h6 className="footer__label" data-spoller>
                            Services<span className="_icon-arrow_down"></span>
                        </h6>
                        <nav className="footer__body">
                            <ul className="footer__list">
                                <li>
                                    <Link to="/lorem" className="footer__link">
                                        Lorem
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ipsum" className="footer__link">
                                        Ipsum
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dolor" className="footer__link">
                                        Dolor
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sit-met" className="footer__link">
                                        Sit Amet
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__contact">
                        <h6 className="footer__label" data-spoller>
                            Contact us<span className="_icon-arrow_down"></span>
                        </h6>
                        <div className="footer__body">
                            <a
                                href="mailto:contact@lop.com"
                                className="footer__text footer__text_link _icon-mail"
                            >
                                contact@lop.com
                            </a>
                            <a href="tel:856693456" className="footer__text footer__text_link _icon-phone">
                                856 - 693 - 456
                            </a>
                        </div>
                    </div>
                    <div className="footer__follow">
                        <h6 className="footer__label">Follow us</h6>
                        <div className="footer__socials">
                            <a href="#" target="_blank" className="footer__social _icon-twitter"></a>
                            <a href="#" target="_blank" className="footer__social _icon-fb"></a>
                            <a href="#" target="_blank" className="footer__social _icon-inst"></a>
                            <a href="#" target="_blank" className="footer__social _icon-yt"></a>
                            <a href="#" target="_blank" className="footer__social _icon-M"></a>
                        </div>
                    </div>
                </div>
                <div className="footer__copy">
                    © {format(new Date(), "yyyy")} Lopper by mariuszdaniel. All right reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
