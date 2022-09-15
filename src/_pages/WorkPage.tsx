import React from "react";
import { Helmet } from "react-helmet";
import { Testimonials } from "../_components";

const WorkPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Team" content="Team" />
                <title>Team</title>
            </Helmet>

            <section className="page__preview preview">
                <div className="preview__wrapper">
                    <div className="preview__content">
                        <div className="preview__container _container">
                            <div className="preview__inner">
                                <h1 className="preview__title">Our team</h1>
                                <div className="preview__subtitle">We build great business</div>
                            </div>
                        </div>
                    </div>
                    <div className="preview__bg">
                        <div className="preview__image _ibg">
                            <img src="img/content/09.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__team team">
                <div className="team__wrapper">
                    <div className="team__top top">
                        <div className="top__container _container">
                            <div className="top__label">What are</div>
                            <h3 className="top__title">Our team</h3>
                            <div className="top__subtitle">
                                Upper prior hundred links approach reedy, was to the than and the ever somehow
                                surprised known for every by of there until road,{" "}
                            </div>
                        </div>
                    </div>
                    <div className="team__body">
                        <div className="team__container _container">
                            <div className="team__inner">
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/09.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/11.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/10.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/12.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/13.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/14.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            <section className="page__newsletter newsletter">
                <div className="newsletter__wrapper">
                    <div className="newsletter__container _container">
                        <div className="newsletter__inner">
                            <h2 className="newsletter__title">Subscribe to our newsletter</h2>
                            <div className="newsletter__text">Cras pulvinar mattis nunc sed blandit.</div>
                            <form action="#" className="newsletter__form">
                                <input
                                    autoComplete="off"
                                    type="email"
                                    name="newsletter__email"
                                    data-error="Error"
                                    data-value="Enter email"
                                    className="newsletter__input input"
                                />
                                <button type="submit" className="newsletter__btn btn btn_news">
                                    subscribe <span className="_icon-arrow"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkPage;
