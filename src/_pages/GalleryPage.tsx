import { FC } from "react";
import { Helmet } from "react-helmet";
import { Newsletter, Preview, Testimonials } from "../_components";

const GalleryPage: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="Gallery" content="Gallery" />
                <title>Gallery</title>
            </Helmet>

            <Preview title="Gallery" />

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

            <Newsletter />
        </>
    );
};

export default GalleryPage;
