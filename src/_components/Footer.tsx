import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container ">
                <div className="footer__inner" data-spollers="479.98,max">
                    <div className="footer__lopper">
                        <a href="#" className="footer__logo">
                            Lopper
                        </a>
                        <h4 className="footer__text">Eu augue ut lectus arcu bibendum at.</h4>
                    </div>
                    <div className="footer__menu">
                        <h6 className="footer__label" data-spoller>
                            Menu<span className="_icon-arrow_down"></span>
                        </h6>
                        <div className="footer__body">
                            <nav>
                                <ul className="footer__list">
                                    <li>
                                        <a href="#" className="footer__link">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer__link">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer__link">
                                            Servces
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer__link">
                                            News
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer__link">
                                            Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer__link">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer__services">
                        <h6 className="footer__label" data-spoller>
                            Services<span className="_icon-arrow_down"></span>
                        </h6>
                        <div className="footer__body">
                            <nav>
                                <ul className="footer__list">
                                    <li>
                                        <a href="#" className="footer__link">
                                            Lorem
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer__link">
                                            Ipsum
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer__link">
                                            Dolor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer__link">
                                            Sit Amet
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
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
                            <a href="#" className="footer__social _icon-twitter"></a>
                            <a href="#" className="footer__social _icon-fb"></a>
                            <a href="#" className="footer__social _icon-inst"></a>
                            <a href="#" className="footer__social _icon-yt"></a>
                            <a href="#" className="footer__social _icon-M"></a>
                        </div>
                    </div>
                </div>
                <div className="footer__copy">© 2019 Lopper by mariuszdaniel. All right reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
