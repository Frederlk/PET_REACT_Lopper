import { FC, memo, useCallback } from "react";
import { format } from "date-fns";

import { routesConfig } from "../../routes";
import { FooterLink, FooterList } from "..";
import { Logo, Socials } from "../../_components";

const Footer: FC = () => {
    const links = useCallback(
        (type: string) => {
            return routesConfig.map((item, i) => {
                if (item.type === type) return <FooterLink key={item.path || i} item={item} />;
            });
        },
        [routesConfig]
    );

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__inner" data-spollers="479.98,max">
                    <div className="footer__lopper">
                        <Logo className="footer__logo" />
                        <p className="footer__text">Eu augue ut lectus arcu bibendum at.</p>
                    </div>

                    <FooterList label="Menu" className="footer__menu">
                        <nav className="footer__body">
                            <ul className="footer__list">{links("menu")}</ul>
                        </nav>
                    </FooterList>

                    <FooterList label="Services" className="footer__services">
                        <nav className="footer__body">
                            <ul className="footer__list">{links("service")}</ul>
                        </nav>
                    </FooterList>

                    <FooterList label="Contact us" className="footer__contact">
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
                    </FooterList>

                    <div className="footer__follow">
                        <h6 className="footer__label">Follow us</h6>
                        <Socials className="footer__socials" />
                    </div>
                </div>
                <div className="footer__copy">
                    © {format(new Date(), "yyyy")} Lopper by mariuszdaniel. All right reserved.
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
