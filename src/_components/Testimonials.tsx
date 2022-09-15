import { FC } from "react";
import { EffectFade, Lazy, Navigation } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { data } from "../constants";
import Picture from "./Picture";

interface TestimonialsProps {
    className?: string;
}

const swiperProps: SwiperProps = {
    modules: [Navigation, Lazy, EffectFade],
    navigation: {
        nextEl: ".testi .testi__arrow_next",
        prevEl: ".testi .testi__arrow_prev",
    },
    lazy: {
        loadPrevNext: true,
    },
};

const testiSlides = data.testimonialsSlides.map(({ text, company, name, img, imgWEBP }, i) => (
    <SwiperSlide key={name + i} className="testi__slide">
        <div className="testi__image-ibg">
            <Picture srcWebp={imgWEBP} fallbackSrc={img} alt={name} />
        </div>
        <div className="testi__quotes">
            <svg width="93" height="81" viewBox="0 0 93 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M38.5469 57.8594C38.0781 60.8594 37.3281 63.7188 36.2969 66.4375C35.2656 69.0625 34 71.4062 32.5 73.4688C31 75.5312 29.3594 77.1719 27.5781 78.3906C25.8906 79.5156 24.1562 80.0781 22.375 80.0781C19 80.0781 15.5312 79.5625 11.9688 78.5312C8.5 77.5 5.78125 75.7656 3.8125 73.3281C3.25 72.4844 2.6875 71.5 2.125 70.375C1.5625 69.25 1.14062 67.8906 0.859375 66.2969C0.578125 64.7031 0.390625 62.7812 0.296875 60.5312C0.296875 58.2812 0.53125 55.6562 1 52.6562C1.5625 48.3438 2.45312 44.1719 3.67188 40.1406C4.89062 36.1094 6.76562 31.9844 9.29688 27.7656C11.9219 23.5469 15.3438 19.2344 19.5625 14.8281C23.875 10.3281 29.3594 5.5 36.0156 0.34375L43.3281 10.6094C35.0781 16.7969 29.1719 22.2812 25.6094 27.0625C22.1406 31.75 20.1719 35.875 19.7031 39.4375C19.5156 41.125 20.0312 42.4375 21.25 43.375C22.4688 44.3125 24.0625 45.0625 26.0312 45.625C30.1562 46.6562 33.3438 48.2969 35.5938 50.5469C37.9375 52.7031 38.9219 55.1406 38.5469 57.8594ZM87.7656 57.8594C87.2969 60.8594 86.5469 63.7188 85.5156 66.4375C84.4844 69.0625 83.2188 71.4062 81.7188 73.4688C80.2188 75.5312 78.5781 77.1719 76.7969 78.3906C75.1094 79.5156 73.375 80.0781 71.5938 80.0781C68.2188 80.0781 64.75 79.5625 61.1875 78.5312C57.7188 77.5 55 75.7656 53.0312 73.3281C52.4688 72.4844 51.9062 71.5 51.3438 70.375C50.7812 69.25 50.3594 67.8906 50.0781 66.2969C49.7969 64.7031 49.6094 62.7812 49.5156 60.5312C49.5156 58.2812 49.75 55.6562 50.2188 52.6562C50.7812 48.3438 51.6719 44.1719 52.8906 40.1406C54.1094 36.1094 55.9844 31.9844 58.5156 27.7656C61.1406 23.5469 64.5625 19.2344 68.7812 14.8281C73.0938 10.3281 78.5781 5.5 85.2344 0.34375L92.5469 10.6094C84.2969 16.7969 78.3906 22.2812 74.8281 27.0625C71.3594 31.75 69.3906 35.875 68.9219 39.4375C68.7344 41.125 69.25 42.4375 70.4688 43.375C71.6875 44.3125 73.2812 45.0625 75.25 45.625C79.375 46.6562 82.5625 48.2969 84.8125 50.5469C87.1562 52.7031 88.1406 55.1406 87.7656 57.8594Z"
                    fill="#F61067"
                />
            </svg>
        </div>
        <q className="testi__text">{text}</q>
        <div className="testi__who">
            <span>{name}</span>
            {company && ` - ${company}`}
        </div>
    </SwiperSlide>
));

const testiCircles = data.testimonialsCircles.map(({ img, imgWEBP, color }, i) => (
    <div key={img + i} className={`testi__circle-ibg _${i + 1} ${color}`}>
        <Picture srcWebp={imgWEBP} fallbackSrc={img} alt={`Happy customer № ${i + 1}`} />
    </div>
));

const Testimonials: FC<TestimonialsProps> = ({ className }) => {
    if (testiSlides.length === 0) return null;

    return (
        <section className={`testi ${className || ""}`}>
            <div className="testi__container">
                <div className="testi__slider">
                    <Swiper
                        {...swiperProps}
                        className="testi__swiper"
                        loop
                        effect="fade"
                        speed={1000}
                        observer={true}
                        touchRatio={0}
                        observeParents={true}
                    >
                        {testiSlides}
                    </Swiper>
                    <div className="testi__navigation">
                        <button type="button" className="testi__arrow testi__arrow_prev _icon-arrow"></button>
                        <button type="button" className="testi__arrow testi__arrow_next _icon-arrow"></button>
                    </div>
                </div>
            </div>
            {testiCircles.length > 0 && <div className="testi__bg">{testiCircles}</div>}
        </section>
    );
};

export default Testimonials;
