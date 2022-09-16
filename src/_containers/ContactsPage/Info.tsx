import { FC } from "react";
import { Picture } from "../../_components";
import { images } from "../../constants";

const { contacts, contacts_WEBP } = images.defaultImages;

const Info: FC = () => {
    return (
        <section className="info">
            <div className="info__content _icon-map">
                <div className="info__container">
                    <div className="info__inner">
                        <h5 className="info__text">We build great business</h5>
                        <div className="info__item">
                            <div className="info__icon _icon-map"></div>
                            <address>
                                <div className="info__subtitle">Our Office</div>
                                <a
                                    href="https://www.google.com/maps/place/91+E+Lexington+St,+Baltimore,+MD+21202,+%D0%A1%D0%A8%D0%90/@39.2909473,-76.6162144,17z/data=!3m1!4b1!4m5!3m4!1s0x89c8049ee554f49f:0x5bf7b373c4e3607d!8m2!3d39.2909432!4d-76.6140257"
                                    className="info__address"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    91 E. Lexington Street <br />
                                    Apt 688 <br />
                                    Gibsonia, PA 15044
                                </a>
                            </address>
                        </div>
                        <div className="info__item">
                            <div className="info__icon _icon-mail"></div>
                            <a href="mailto:contact@lop.com" className="info__subtitle">
                                contact@lop.com
                            </a>
                        </div>
                        <div className="info__item">
                            <div className="info__icon _icon-phone"></div>
                            <a href="tel:01666693456" className="info__subtitle">
                                (01) 666 - 693 - 456
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info__image-wrap">
                <div className="info__image-ibg">
                    <Picture srcWebp={contacts_WEBP} fallbackSrc={contacts} alt="contacts" />
                </div>
            </div>
        </section>
    );
};

export default Info;
