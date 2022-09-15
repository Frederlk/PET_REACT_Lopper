import { FC } from "react";
import { Helmet } from "react-helmet";
import { Testimonials } from "../_components";

const GalleryPage: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="Gallery" content="Gallery" />
                <title>Gallery</title>
            </Helmet>

            <section className="page__preview preview  preview_gallery">
                <div className="preview__wrapper">
                    <div className="preview__content">
                        <div className="preview__container _container">
                            <div className="preview__inner">
                                <h1 className="preview__title">Gallery</h1>
                                <div className="preview__subtitle">We build great business</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__gallery gallery">
                <div className="gallery__wrapper _gallery">
                    <div className="gallery__item">
                        <div className="gallery__image-wrap">
                            <a href="img/content/07.jpg" className="gallery__image _ibg">
                                <img src="img/content/07.jpg" alt="" />
                            </a>
                        </div>
                        <div className="gallery__content">
                            <div className="gallery__container _container">
                                <div className="gallery__title">Photo name</div>
                                <div className="gallery__text">Etiam dignissim diam quis enim lobortis.</div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery__item gallery__item_green ">
                        <div className="gallery__image-wrap">
                            <a href="img/content/04.jpg" className="gallery__image _ibg">
                                <img src="img/content/04.jpg" alt="" />
                            </a>
                        </div>
                        <div className="gallery__content">
                            <div className="gallery__container _container">
                                <div className="gallery__title">Photo name</div>
                                <div className="gallery__text">Etiam dignissim diam quis enim lobortis.</div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery__item gallery__item ">
                        <div className="gallery__image-wrap">
                            <a href="img/content/11.jpg" className="gallery__image _ibg">
                                <img src="img/content/11.jpg" alt="" />
                            </a>
                        </div>
                        <div className="gallery__content">
                            <div className="gallery__container _container">
                                <div className="gallery__title">Photo name</div>
                                <div className="gallery__text">Etiam dignissim diam quis enim lobortis.</div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery__item gallery__item_green ">
                        <div className="gallery__image-wrap">
                            <a href="img/content/10.jpg" className="gallery__image _ibg">
                                <img src="img/content/10.jpg" alt="" />
                            </a>
                        </div>
                        <div className="gallery__content">
                            <div className="gallery__container _container">
                                <div className="gallery__title">Photo name</div>
                                <div className="gallery__text">Etiam dignissim diam quis enim lobortis.</div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery__item">
                        <a href="img/content/12.jpg" className="gallery__image-wrap">
                            <div className="gallery__image _ibg">
                                <img src="img/content/12.jpg" alt="" />
                            </div>
                        </a>
                        <div className="gallery__content">
                            <div className="gallery__container _container">
                                <div className="gallery__title">Photo name</div>
                                <div className="gallery__text">Etiam dignissim diam quis enim lobortis.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials className="testi_gallery" />

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

export default GalleryPage;
