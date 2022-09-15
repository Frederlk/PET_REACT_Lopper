import { Helmet } from "react-helmet";
import { images } from "../constants";
import { Newsletter, Preview, Testimonials } from "../_components";

const { bgService, bgService_WEBP } = images.defaultImages;

const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Services" content="Services" />
                <title>Services</title>
            </Helmet>

            <Preview title="About us" img={bgService} imgWebp={bgService_WEBP} />

            <section className="page__digits digits">
                <div className="digits__wrapper">
                    <div className="digits__container _container">
                        <div className="digits__top">
                            <h4 className="digits__label">What we do</h4>
                            <div className="digits__subtitle">
                                Apparently we had reached a great height in the atmosphere, for the sky was a
                                dead black, and the stars had ceased to twinkle.
                            </div>
                        </div>
                        <div className="digits__bottom">
                            <div className="digits__column">
                                <div className="digits__item">
                                    <div className="digits__digit">15+</div>
                                    <div className="digits__text">Nobel prizes</div>
                                </div>
                            </div>
                            <div className="digits__column">
                                <div className="digits__item">
                                    <div className="digits__digit">33</div>
                                    <div className="digits__text">Nobel prizes</div>
                                </div>
                            </div>
                            <div className="digits__column">
                                <div className="digits__item">
                                    <div className="digits__digit">12</div>
                                    <div className="digits__text">Nobel prizes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__amazing amazing amazing_services">
                <div className="amazing__wrapper">
                    <div className="amazing__container _container">
                        <div className="amazing__inner">
                            <div className="amazing__top">
                                <div className="amazing__label">We are Amazing</div>
                                <h2 className="amazing__title">Our services</h2>
                                <div className="amazing__subtitle">
                                    Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.
                                    Quam elementum pulvinar etiam non. Eu consequat.
                                </div>
                                <div className="amazing__bg">
                                    <img src="img/map.svg" alt="" />
                                </div>
                            </div>
                            <div className="amazing__flex">
                                <div className="amazing__column">
                                    <article className="amazing__item item-amazing">
                                        <a href="#" className="item-amazing__icon _icon-axe _c1"></a>
                                        <div className="item-amazing__body">
                                            <h6 className="item-amazing__link">
                                                <a href="#" className="_c1">
                                                    Webdesign
                                                </a>
                                            </h6>
                                            <div className="item-amazing__text">
                                                Tincidunt lobortis feugiat vivamus at augue eget. Risus
                                                feugiat in ante metus dictum. Amet aliquam id diam maecenas.
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="amazing__column">
                                    <article className="amazing__item item-amazing">
                                        <a href="#" className="item-amazing__icon _icon-nuclear _c2"></a>
                                        <div className="item-amazing__body">
                                            <h6 className="item-amazing__link">
                                                <a href="#" className="_c2">
                                                    Webdev
                                                </a>
                                            </h6>
                                            <div className="item-amazing__text">
                                                Eget nulla facilisi etiam dignissim diam quis enim lobortis
                                                scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel
                                                pretium.
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="amazing__column">
                                    <article className="amazing__item item-amazing">
                                        <a href="#" className="item-amazing__icon _icon-fort _c3"></a>
                                        <div className="item-amazing__body">
                                            <h6 className="item-amazing__link">
                                                <a href="#" className="_c3">
                                                    Marketing
                                                </a>
                                            </h6>
                                            <div className="item-amazing__text">
                                                Eu augue ut lectus arcu bibendum at. Pellentesque nec nam
                                                aliquam sem et tortor consequat.{" "}
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="amazing__column">
                                    <article className="amazing__item item-amazing">
                                        <a href="#" className="item-amazing__icon _icon-scales _c3"></a>
                                        <div className="item-amazing__body">
                                            <h6 className="item-amazing__link">
                                                <a href="#" className="_c3">
                                                    Marketing
                                                </a>
                                            </h6>
                                            <div className="item-amazing__text">
                                                Id venenatis a condimentum vitae. Magna fermentum iaculis eu
                                                non diam phasellus vestibulum lorem. Tortor dignissim
                                                convallis aenean et.
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="amazing__column">
                                    <article className="amazing__item item-amazing">
                                        <a href="#" className="item-amazing__icon _icon-skittles _c1"></a>
                                        <div className="item-amazing__body">
                                            <h6 className="item-amazing__link">
                                                <a href="#" className="_c1">
                                                    Webdesign
                                                </a>
                                            </h6>
                                            <div className="item-amazing__text">
                                                Sollicitudin ac orci phasellus egestas tellus rutrum tellus
                                                pellentesque. Malesuada fames ac turpis egestas sed.
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="amazing__column">
                                    <article className="amazing__item item-amazing">
                                        <a href="#" className="item-amazing__icon _icon-brain _c2"></a>
                                        <div className="item-amazing__body">
                                            <h6 className="item-amazing__link">
                                                <a href="#" className="_c2">
                                                    Webdev
                                                </a>
                                            </h6>
                                            <div className="item-amazing__text">
                                                Integer quis auctor elit sed vulputate mi. Semper auctor neque
                                                vitae tempus. Vulputate odio ut enim blandit volutpat maecenas
                                                volutpat.
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__steps steps">
                <div className="steps__wrapper">
                    <div className="steps__top top">
                        <div className="top__container _container">
                            <div className="top__label">What we do</div>
                            <h3 className="top__title">What we do</h3>
                            <div className="top__subtitle">
                                Upper prior hundred links approach reedy, was to the than and the ever somehow
                                surprised known for every by of there until road,{" "}
                            </div>
                        </div>
                    </div>
                    <div className="steps__body">
                        <div className="steps__row">
                            <div className="steps__content">
                                <div className="steps__container _container">
                                    <div className="steps__inner">
                                        <div className="steps__step">01</div>
                                        <h5 className="steps__title">
                                            Upper prior hundred links approach reedy
                                        </h5>
                                        <div className="steps__text">
                                            Upper prior hundred links approach reedy, was to the than and the
                                            ever somehow surprised known for every by of there until road,{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="steps__image-wrap">
                                <div className="steps__image _ibg">
                                    <img src="img/content/06.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="steps__row">
                            <div className="steps__content">
                                <div className="steps__container _container">
                                    <div className="steps__inner">
                                        <div className="steps__step">02</div>
                                        <h5 className="steps__title">
                                            Upper prior hundred links approach reedy
                                        </h5>
                                        <div className="steps__text">
                                            Upper prior hundred links approach reedy, was to the than and the
                                            ever somehow surprised known for every by of there until road,{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="steps__image-wrap">
                                <div className="steps__image _ibg">
                                    <img src="img/content/07.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="steps__row">
                            <div className="steps__content">
                                <div className="steps__container _container">
                                    <div className="steps__inner">
                                        <div className="steps__step">03</div>
                                        <h5 className="steps__title">
                                            Upper prior hundred links approach reedy
                                        </h5>
                                        <div className="steps__text">
                                            Upper prior hundred links approach reedy, was to the than and the
                                            ever somehow surprised known for every by of there until road,{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="steps__image-wrap">
                                <div className="steps__image _ibg">
                                    <img src="img/content/08.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            <Newsletter />
        </>
    );
};

export default ServicesPage;
