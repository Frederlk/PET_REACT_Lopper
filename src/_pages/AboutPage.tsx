import { FC } from "react";
import { Helmet } from "react-helmet";
import { images } from "../constants";
import { Newsletter, Preview, Testimonials } from "../_components";

const { bgMain, bgMain_WEBP } = images.defaultImages;

const AboutPage: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="About" content="About" />
                <title>About</title>
            </Helmet>

            <Preview title="About us" img={bgMain} imgWebp={bgMain_WEBP} />

            <section className="page__what what">
                <div className="what__wrapper">
                    <div className="what__container _container">
                        <div className="what__inner">
                            <div className="what__top">
                                <h2 className="what__label">What we do</h2>
                                <div className="what__subtitle">
                                    Apparently we had reached a great height in the atmosphere, for the sky
                                    was a dead black, and the stars had ceased to twinkle.
                                </div>
                            </div>
                            <div className="what__flex">
                                <div className="what__column">
                                    <div className="what__article">
                                        <h5 className="what__item-title">Our objectives</h5>
                                        <div className="what__text">
                                            Amet consectetur adipiscing elit pellentesque habitant morbi.
                                            Fermentum et sollicitudin ac orci phasellus. Dolor sit amet
                                            consectetur adipiscing elit duis. Euismod quis viverra nibh cras
                                            pulvinar mattis nunc sed blandit.
                                        </div>
                                    </div>
                                </div>
                                <div className="what__column">
                                    <div className="what__article">
                                        <h5 className="what__item-title">Our story</h5>
                                        <div className="what__text">
                                            Etiam dignissim diam quis enim lobortis. Egestas sed sed risus
                                            pretium quam vulputate dignissim. Eleifend quam adipiscing vitae
                                            proin sagittis. Pharetra pharetra massa massa ultricies. Elementum
                                            eu facilisis sed odio morbi. Morbi tincidunt augue interdum velit.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__wedo wedo">
                <div className="wedo__wrapper">
                    <div className="wedo__top">
                        <div className="wedo__top-container _container">
                            <div className="wedo__label">What we do</div>
                            <h3 className="wedo__title">What we do</h3>
                        </div>
                    </div>
                    <div className="wedo__flex">
                        <div className="wedo__content">
                            <div className="wedo__container _container">
                                <div className="wedo__inner">
                                    <div className="wedo__card card-wedo">
                                        <div className="card-wedo__flex">
                                            <div className="card-wedo__title">
                                                <h5>We build great business</h5>
                                            </div>
                                            <div className="card-wedo__text">
                                                <p>
                                                    Id consectetur purus ut faucibus pulvinar elementum
                                                    integer enim. A arcu cursus vitae congue mauris rhoncus
                                                    aenean.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wedo__card card-wedo">
                                        <div className="card-wedo__flex">
                                            <div className="card-wedo__title">
                                                <h5>We build great business</h5>
                                            </div>
                                            <div className="card-wedo__text">
                                                <p>
                                                    Enim neque volutpat ac tincidunt vitae. Malesuada nunc vel
                                                    risus commodo viverra maecenas accumsan lacus vel.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wedo__card card-wedo">
                                        <div className="card-wedo__flex">
                                            <div className="card-wedo__title">
                                                <h5>We build great business</h5>
                                            </div>
                                            <div className="card-wedo__text">
                                                <p>
                                                    Dictumst vestibulum rhoncus est pellentesque elit
                                                    ullamcorper dignissim cras. Eleifend donec pretium
                                                    vulputate sapien nec sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wedo__image-side">
                            <div className="wedo__image-wrap">
                                <div className="wedo__image _ibg">
                                    <img src="img/content/02.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
