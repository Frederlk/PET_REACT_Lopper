import { FC } from "react";
import { Helmet } from "react-helmet";
import { images } from "../constants";
import { Newsletter, Preview, Testimonials } from "../_components";
import WeDo from "../_containers/AboutPage/WeDo";
import What from "../_containers/AboutPage/What";

const { bgMain, bgMain_WEBP } = images.defaultImages;

const AboutPage: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="About" content="About" />
                <title>About</title>
            </Helmet>

            <Preview title="About us" img={bgMain} imgWebp={bgMain_WEBP} />

            <What />

            <WeDo />

            <section className="page__companies companies">
                <div className="companies__wrapper">
                    <div className="companies__top">
                        <div className="companies__container-top _container">
                            <div className="companies__label">What we do</div>
                            <h3 className="companies__title">
                                What we do more than you can imangine, belive us.
                            </h3>
                        </div>
                    </div>
                    <div className="companies__body">
                        <div className="companies__content">
                            <div className="companies__container _container">
                                <div className="companies__inner">
                                    <div className="companies__text">
                                        Apparently we had reached a great height in the atmosphere, for the
                                        sky was a dead black, and the stars had ceased to twinkle.
                                    </div>
                                    <div className="companies__flex">
                                        <div className="companies__column">
                                            <div className="companies__icon">
                                                <img src="img/company/01.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="companies__column">
                                            <div className="companies__icon">
                                                <img src="img/company/02.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="companies__column">
                                            <div className="companies__icon">
                                                <img src="img/company/02.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="companies__column">
                                            <div className="companies__icon">
                                                <img src="img/company/01.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="companies__column">
                                            <div className="companies__icon">
                                                <img src="img/company/01.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="companies__column">
                                            <div className="companies__icon">
                                                <img src="img/company/02.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="companies__bg">
                            <div className="companies__image _ibg">
                                <img src="img/content/04.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__spheres spheres">
                <div className="spheres__wrapper">
                    <div className="spheres__container _container">
                        <div className="spheres__top">
                            <div className="spheres__label">What we do</div>
                            <div className="spheres__subtitle">
                                Apparently we had reached a great height in the atmosphere, for the sky was a
                                dead black, and the stars had ceased to twinkle.
                            </div>
                        </div>
                        <div className="spheres__flex">
                            <div className="spheres__column">
                                <div className="spheres__item item-spheres">
                                    <div className="item-spheres__icon _icon-nuclear"></div>
                                    <h5 className="item-spheres__title">Research</h5>
                                    <div className="item-spheres__text">
                                        Eget nulla facilisi etiam dignissim diam quis enim lobortis
                                        scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="spheres__column">
                                <div className="spheres__item item-spheres">
                                    <div className="item-spheres__icon _icon-scales"></div>
                                    <h5 className="item-spheres__title">Marketing</h5>
                                    <div className="item-spheres__text">
                                        Eget nulla facilisi etiam dignissim diam quis enim lobortis
                                        scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="spheres__column">
                                <div className="spheres__item item-spheres">
                                    <div className="item-spheres__icon _icon-axe"></div>
                                    <h5 className="item-spheres__title">Results</h5>
                                    <div className="item-spheres__text">
                                        Eget nulla facilisi etiam dignissim diam quis enim lobortis
                                        scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.{" "}
                                    </div>
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

export default AboutPage;
