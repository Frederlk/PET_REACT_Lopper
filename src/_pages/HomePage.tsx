import React from "react";

const HomePage = () => {
    return (
        <>
            <section className="page__mainscreen mainscreen">
                <div className="mainscreen__wrapper">
                    <div className="mainscreen__inner">
                        <div className="mainscreen__container _container">
                            <div className="mainscreen__flex">
                                <div className="mainscreen__content">
                                    <div className="mainscreen__label">What we do?</div>
                                    <h1 className="mainscreen__title">
                                        We grow <br />
                                        <span>great business</span>
                                    </h1>
                                    <a href="#" className="mainscreen__bottom">
                                        <div className="mainscreen__text">
                                            Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
                                        </div>
                                        <div className="mainscreen__btn">
                                            <span className="_icon-arrow_2"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="mainscreen__scrolldown">
                                    <div className="mainscreen__text-scroll">Scroll to see more</div>
                                    <a href="#" className="mainscreen__btn-scroll _icon-arrow_down"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainscreen__bg">
                        <div className="mainscreen__image _ibg">
                            <img src="img/content/01.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__intro intro">
                <div className="intro__wrapper">
                    <div className="intro__content">
                        <div className="intro__container _container">
                            <div className="intro__inner">
                                <div className="intro__label">Intro</div>
                                <h2 className="intro__title">Our future</h2>
                                <div className="intro__subtitle">
                                    Apparently we had reached a great height in the atmosphere, for the sky
                                    was a dead black, and the stars had ceased to twinkle.
                                </div>
                                <p className="intro__text">
                                    By the same illusion which lifts the horizon of the sea to the level of
                                    the spectator on a hillside, the sable cloud beneath was dished out, and
                                    the car seemed to float in the middle of an immense dark sphere, whose
                                    upper half was strewn with silver.
                                </p>
                                <a href="#" className="intro__btn btn btn_rg">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="intro__picture-wrap">
                        <div className="intro__picture-inner">
                            <div className="intro__image _ibg">
                                <img src="img/content/02.jpg" alt="" />
                            </div>
                            <div className="intro__quote-wrap">
                                <div className="intro__quote">
                                    Commodo sed egestas egestas fringilla phasellus faucibus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__benefits benefits">
                <div className="benefits__wrapper">
                    <div className="benefits__content">
                        <div className="benefits__container _container">
                            <div className="benefits__inner">
                                <div className="benefits__label">Benefits</div>
                                <h2 className="benefits__title">Shaping the future</h2>
                                <div className="benefits__subtitle">
                                    Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales ut eu
                                    sem integer vitae. Libero nunc consequat interdum varius.
                                </div>
                                <div className="benefits__text">
                                    <p>
                                        Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi non.
                                    </p>
                                    <p>Lectus vestibulum mattis ullamcorper velit sed ullamcorper.</p>
                                    <p>
                                        Diam phasellus vestibulum lorem sed risus ultricies tristique nulla.
                                        Dui faucibus in ornare quam viverra.
                                    </p>
                                    <p>Posuere ac ut consequat semper viverra.</p>
                                </div>
                                <a href="" className="benefits__btn btn btn_rg">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="benefits__apps">
                        <div className="benefits__slider">
                            <div className="benefits__swiper-wrap">
                                <div className="benefits__swiper _swiper">
                                    <div className="benefits__slide">
                                        <div className="benefits__image _ibg">
                                            <img src="img/content/03.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="benefits__slide">
                                        <div className="benefits__image _ibg">
                                            <img src="img/content/04.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="benefits__slide">
                                        <div className="benefits__image _ibg">
                                            <img src="img/content/05.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="benefits__side" data-da=".benefits__navigation,767.98,last">
                                    Mobile Apps
                                </div>
                            </div>
                            <div className="benefits__navigation navigation">
                                <div className="navigation__pagging"></div>
                                <div className="navigation__arrows">
                                    <button
                                        type="button"
                                        className="navigation__arrow navigation__arrow_prev _icon-arrow"
                                    ></button>
                                    <button
                                        type="button"
                                        className="navigation__arrow navigation__arrow_next _icon-arrow"
                                    ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__amazing amazing">
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
                            <div className="amazing__btn-wrap">
                                <a href="#" className="amazing__btn btn btn_rg">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page__testi testi">
                <div className="testi__wrapper">
                    <div className="testi__content">
                        <div className="testi__container _container">
                            <div className="testi__inner">
                                <div className="testi__slider">
                                    <div className="testi__swiper _swiper">
                                        <div className="testi__slide">
                                            <div className="testi__image _ibg">
                                                <img src="img/avatars/01.jpg" alt="" />
                                            </div>
                                            <div className="testi__quotes">
                                                <svg
                                                    width="93"
                                                    height="81"
                                                    viewBox="0 0 93 81"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M38.5469 57.8594C38.0781 60.8594 37.3281 63.7188 36.2969 66.4375C35.2656 69.0625 34 71.4062 32.5 73.4688C31 75.5312 29.3594 77.1719 27.5781 78.3906C25.8906 79.5156 24.1562 80.0781 22.375 80.0781C19 80.0781 15.5312 79.5625 11.9688 78.5312C8.5 77.5 5.78125 75.7656 3.8125 73.3281C3.25 72.4844 2.6875 71.5 2.125 70.375C1.5625 69.25 1.14062 67.8906 0.859375 66.2969C0.578125 64.7031 0.390625 62.7812 0.296875 60.5312C0.296875 58.2812 0.53125 55.6562 1 52.6562C1.5625 48.3438 2.45312 44.1719 3.67188 40.1406C4.89062 36.1094 6.76562 31.9844 9.29688 27.7656C11.9219 23.5469 15.3438 19.2344 19.5625 14.8281C23.875 10.3281 29.3594 5.5 36.0156 0.34375L43.3281 10.6094C35.0781 16.7969 29.1719 22.2812 25.6094 27.0625C22.1406 31.75 20.1719 35.875 19.7031 39.4375C19.5156 41.125 20.0312 42.4375 21.25 43.375C22.4688 44.3125 24.0625 45.0625 26.0312 45.625C30.1562 46.6562 33.3438 48.2969 35.5938 50.5469C37.9375 52.7031 38.9219 55.1406 38.5469 57.8594ZM87.7656 57.8594C87.2969 60.8594 86.5469 63.7188 85.5156 66.4375C84.4844 69.0625 83.2188 71.4062 81.7188 73.4688C80.2188 75.5312 78.5781 77.1719 76.7969 78.3906C75.1094 79.5156 73.375 80.0781 71.5938 80.0781C68.2188 80.0781 64.75 79.5625 61.1875 78.5312C57.7188 77.5 55 75.7656 53.0312 73.3281C52.4688 72.4844 51.9062 71.5 51.3438 70.375C50.7812 69.25 50.3594 67.8906 50.0781 66.2969C49.7969 64.7031 49.6094 62.7812 49.5156 60.5312C49.5156 58.2812 49.75 55.6562 50.2188 52.6562C50.7812 48.3438 51.6719 44.1719 52.8906 40.1406C54.1094 36.1094 55.9844 31.9844 58.5156 27.7656C61.1406 23.5469 64.5625 19.2344 68.7812 14.8281C73.0938 10.3281 78.5781 5.5 85.2344 0.34375L92.5469 10.6094C84.2969 16.7969 78.3906 22.2812 74.8281 27.0625C71.3594 31.75 69.3906 35.875 68.9219 39.4375C68.7344 41.125 69.25 42.4375 70.4688 43.375C71.6875 44.3125 73.2812 45.0625 75.25 45.625C79.375 46.6562 82.5625 48.2969 84.8125 50.5469C87.1562 52.7031 88.1406 55.1406 87.7656 57.8594Z"
                                                        fill="#F61067"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="testi__text">
                                                Lectus arcu bibendum at varius. Adipiscing diam donec
                                                adipiscing tristique.
                                            </div>
                                            <div className="testi__who">
                                                <span>Kerry Johnes</span> - Some Company
                                            </div>
                                        </div>
                                        <div className="testi__slide">
                                            <div className="testi__image _ibg">
                                                <img src="img/content/02.jpg" alt="" />
                                            </div>
                                            <div className="testi__quotes">
                                                <svg
                                                    width="93"
                                                    height="81"
                                                    viewBox="0 0 93 81"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M38.5469 57.8594C38.0781 60.8594 37.3281 63.7188 36.2969 66.4375C35.2656 69.0625 34 71.4062 32.5 73.4688C31 75.5312 29.3594 77.1719 27.5781 78.3906C25.8906 79.5156 24.1562 80.0781 22.375 80.0781C19 80.0781 15.5312 79.5625 11.9688 78.5312C8.5 77.5 5.78125 75.7656 3.8125 73.3281C3.25 72.4844 2.6875 71.5 2.125 70.375C1.5625 69.25 1.14062 67.8906 0.859375 66.2969C0.578125 64.7031 0.390625 62.7812 0.296875 60.5312C0.296875 58.2812 0.53125 55.6562 1 52.6562C1.5625 48.3438 2.45312 44.1719 3.67188 40.1406C4.89062 36.1094 6.76562 31.9844 9.29688 27.7656C11.9219 23.5469 15.3438 19.2344 19.5625 14.8281C23.875 10.3281 29.3594 5.5 36.0156 0.34375L43.3281 10.6094C35.0781 16.7969 29.1719 22.2812 25.6094 27.0625C22.1406 31.75 20.1719 35.875 19.7031 39.4375C19.5156 41.125 20.0312 42.4375 21.25 43.375C22.4688 44.3125 24.0625 45.0625 26.0312 45.625C30.1562 46.6562 33.3438 48.2969 35.5938 50.5469C37.9375 52.7031 38.9219 55.1406 38.5469 57.8594ZM87.7656 57.8594C87.2969 60.8594 86.5469 63.7188 85.5156 66.4375C84.4844 69.0625 83.2188 71.4062 81.7188 73.4688C80.2188 75.5312 78.5781 77.1719 76.7969 78.3906C75.1094 79.5156 73.375 80.0781 71.5938 80.0781C68.2188 80.0781 64.75 79.5625 61.1875 78.5312C57.7188 77.5 55 75.7656 53.0312 73.3281C52.4688 72.4844 51.9062 71.5 51.3438 70.375C50.7812 69.25 50.3594 67.8906 50.0781 66.2969C49.7969 64.7031 49.6094 62.7812 49.5156 60.5312C49.5156 58.2812 49.75 55.6562 50.2188 52.6562C50.7812 48.3438 51.6719 44.1719 52.8906 40.1406C54.1094 36.1094 55.9844 31.9844 58.5156 27.7656C61.1406 23.5469 64.5625 19.2344 68.7812 14.8281C73.0938 10.3281 78.5781 5.5 85.2344 0.34375L92.5469 10.6094C84.2969 16.7969 78.3906 22.2812 74.8281 27.0625C71.3594 31.75 69.3906 35.875 68.9219 39.4375C68.7344 41.125 69.25 42.4375 70.4688 43.375C71.6875 44.3125 73.2812 45.0625 75.25 45.625C79.375 46.6562 82.5625 48.2969 84.8125 50.5469C87.1562 52.7031 88.1406 55.1406 87.7656 57.8594Z"
                                                        fill="#F61067"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="testi__text">
                                                Lectus arcu bibendum at varius. Adipiscing diam donec
                                                adipiscing tristique. Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Distinctio reiciendis dolore
                                            </div>
                                            <div className="testi__who">
                                                <span>Kerry Johnes</span> - Some Company
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testi__navigation">
                                        <button
                                            type="button"
                                            className="testi__arrow testi__arrow_prev _icon-arrow"
                                        ></button>
                                        <button
                                            type="button"
                                            className="testi__arrow testi__arrow_next _icon-arrow"
                                        ></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testi__bg">
                        <div className="testi__circle testi__circle_1 _ibg _bc3">
                            <img src="img/avatars/02.jpg" alt="" />
                        </div>
                        <div className="testi__circle testi__circle_2 _ibg _bc1">
                            <img src="img/avatars/03.jpg" alt="" />
                        </div>
                        <div className="testi__circle testi__circle_3 _ibg _bc2">
                            <img src="img/avatars/04.jpg" alt="" />
                        </div>
                        <div className="testi__circle testi__circle_4 _ibg _bc2">
                            <img src="img/avatars/05.jpg" alt="" />
                        </div>
                        <div className="testi__circle testi__circle_5 _ibg _bc1">
                            <img src="img/avatars/06.jpg" alt="" />
                        </div>
                        <div className="testi__circle testi__circle_6 _ibg _bc2">
                            <img src="img/avatars/07.jpg" alt="" />
                        </div>
                        <div className="testi__circle testi__circle_7 _ibg _bc3">
                            <img src="img/avatars/08.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

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

export default HomePage;
