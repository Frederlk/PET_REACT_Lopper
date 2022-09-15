import { FC, memo, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Pagination, Autoplay, Lazy, Navigation } from "swiper";

import { data } from "../../constants";
import dynamicAdaptive from "../../helpers/dynamic_adapt";
import { Picture } from "../../_components";

const swiperProps: SwiperProps = {
    pagination: {
        type: "fraction",
        el: ".benefits .navigation__pagging",
        renderFraction: (currentClass, totalClass) =>
            `<span class="navigation__fraction ${currentClass || ""}"></span>
            <span class="line">/</span>
            <span class="navigation__fraction ${totalClass || ""}"></span>`,
    },
    modules: [Pagination, Navigation, Autoplay, Lazy],
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: ".benefits .navigation__arrow_next",
        prevEl: ".benefits .navigation__arrow_prev",
    },
    lazy: {
        loadPrevNext: true,
    },
};

const benefitsSlides = data.benefitsSlides.map(({ alt, img, imgWEBP }, i) => (
    <SwiperSlide key={i} className="benefits__slide">
        <div className="benefits__image-ibg">
            <Picture srcWebp={imgWEBP} fallbackSrc={img} alt={alt} />
        </div>
    </SwiperSlide>
));

const BenefitsSwiper: FC = () => {
    useEffect(() => {
        dynamicAdaptive();
    }, []);

    return (
        <div className="benefits__slider">
            <div className="benefits__swiper-wrap">
                <Swiper
                    {...swiperProps}
                    className="benefits__swiper"
                    loop
                    speed={1000}
                    observer={true}
                    observeParents={true}
                >
                    {benefitsSlides}
                </Swiper>
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
    );
};

export default memo(BenefitsSwiper);
