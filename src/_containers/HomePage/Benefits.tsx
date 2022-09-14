import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { RouteNames } from "../../routes";
import BenefitsSwiper from "./BenefitsSwiper";

const Benefits: FC = () => {
    return (
        <section className="benefits">
            <div className="benefits__content">
                <div className="benefits__container">
                    <div className="benefits__inner">
                        <h3 className="benefits__label">Benefits</h3>
                        <h2 className="benefits__title">Shaping the future</h2>
                        <p className="benefits__subtitle">
                            Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales ut eu sem
                            integer vitae. Libero nunc consequat interdum varius.
                        </p>
                        <div className="benefits__text">
                            <p>Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi non.</p>
                            <p>Lectus vestibulum mattis ullamcorper velit sed ullamcorper.</p>
                            <p>
                                Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Dui
                                faucibus in ornare quam viverra.
                            </p>
                            <p>Posuere ac ut consequat semper viverra.</p>
                        </div>
                        <Link to={RouteNames.WORK} className="benefits__btn btn btn_rg">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
            <div className="benefits__apps">
                <BenefitsSwiper />
            </div>
        </section>
    );
};

export default memo(Benefits);
