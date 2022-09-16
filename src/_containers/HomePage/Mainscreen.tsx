import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Link as LinkGoto } from "react-scroll";

import { RouteNames } from "../../routes";
import { images } from "../../constants";
import { Picture } from "../../_components";
import { isMobile } from "../../helpers/functions";
import { useEventListener } from "../../hooks";

const fixHeight = () => {
    if (isMobile.any()) {
        document.documentElement.classList.add("_touch");
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
};
const { bgMain_WEBP, bgMain } = images.defaultImages;

const Mainscreen: FC = () => {
    useEventListener("resize", fixHeight);

    return (
        <section className="mainscreen">
            <div data-fullscreen className="mainscreen__container ">
                <div className="mainscreen__flex">
                    <div className="mainscreen__content">
                        <h2 className="mainscreen__label">What we do?</h2>
                        <h1 className="mainscreen__title">
                            We grow <br />
                            <span>great business</span>
                        </h1>
                        <Link to={RouteNames.ABOUT} className="mainscreen__bottom">
                            <p className="mainscreen__text">
                                Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
                            </p>
                            <div className="mainscreen__btn">
                                <span className="_icon-arrow_2"></span>
                            </div>
                        </Link>
                    </div>
                    <div className="mainscreen__scrolldown">
                        <div className="mainscreen__text-scroll">Scroll to see more</div>
                        <LinkGoto
                            className="mainscreen__btn-scroll _icon-arrow_down"
                            to="intro"
                            smooth={true}
                            hashSpy={true}
                            offset={-60}
                            duration={500}
                        ></LinkGoto>
                    </div>
                </div>
            </div>
            <div className="mainscreen__image-ibg">
                <Picture srcWebp={bgMain_WEBP} fallbackSrc={bgMain} alt="Background" />
            </div>
        </section>
    );
};

export default memo(Mainscreen);
