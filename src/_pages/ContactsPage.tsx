import { FC } from "react";

const ContactsPage: FC = () => {
    return (
        <>
            <section className="page__preview preview">
                <div className="preview__wrapper">
                    <div className="preview__content">
                        <div className="preview__container _container">
                            <div className="preview__inner">
                                <h1 className="preview__title">Contact us</h1>
                                <div className="preview__subtitle">We build great business</div>
                            </div>
                        </div>
                    </div>
                    <div className="preview__bg">
                        <div className="preview__image _ibg">
                            <img src="img/content/13.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__info info">
                <div className="info__wrapper">
                    <div className="info__content _icon-map">
                        <div className="info__container _container">
                            <div className="info__inner">
                                <h5 className="info__text">We build great business</h5>
                                <div className="info__item">
                                    <div className="info__icon _icon-map"></div>
                                    <address>
                                        <div className="info__subtitle">Our Office</div>
                                        <a href="#" className="info__address">
                                            91 E. Lexington Street <br />
                                            Apt 688 <br />
                                            Gibsonia, PA 15044
                                        </a>
                                    </address>
                                </div>
                                <div className="info__item">
                                    <div className="info__icon _icon-mail"></div>
                                    <a href="mailto:contact@lop.com" className="info__subtitle ">
                                        contact@lop.com
                                    </a>
                                </div>
                                <div className="info__item">
                                    <div className="info__icon _icon-phone"></div>
                                    <a href="tel:01666693456" className="info__subtitle ">
                                        (01) 666 - 693 - 456
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info__image-wrap">
                        <div className="info__image _ibg">
                            <img src="img/content/14.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__touch touch">
                <div className="touch__wrapper">
                    <div className="touch__container _container">
                        <form action="#" className="touch__form">
                            <h3 className="touch__title">Get in touch with us</h3>
                            <div className="touch__flex">
                                <div className="touch__column">
                                    <div className="touch__input-wrap">
                                        <div className="touch__label">Your name</div>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="form[]"
                                            data-error="error"
                                            data-value="Your name"
                                            className="touch__input input _req"
                                        />
                                    </div>
                                    <div className="touch__input-wrap">
                                        <div className="touch__label">Your email</div>
                                        <input
                                            autoComplete="off"
                                            type="email"
                                            name="form[]"
                                            data-error="error"
                                            data-value="Email placeholder"
                                            className="touch__input input _email _req"
                                        />
                                    </div>
                                </div>
                                <div className="touch__column">
                                    <div className="touch__input-wrap">
                                        <div className="touch__label">Your message</div>
                                        {/* <textarea autoComplete="off" type="text" name="form[]" data-error="error"
											data-value="Write your message"
											className="touch__input touch__input_textarea _req input"> */}
                                        <button type="submit" className="touch__btn btn btn_rg">
                                            Send message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactsPage;
