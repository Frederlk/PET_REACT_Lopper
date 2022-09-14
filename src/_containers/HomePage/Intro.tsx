import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { images } from "../../constants";
import { RouteNames } from "../../routes";
import { Picture, Top } from "../../_components";

const Intro: FC = () => {
    const { intro, intro_WEBP } = images.defaultImages;

    return (
        <section className="intro">
            <div className="intro__content">
                <div className="intro__container ">
                    <div className="intro__inner">
                        <Top className="intro__top" label="Intro" title="Our future">
                            <p className="intro__subtitle">
                                Apparently we had reached a great height in the atmosphere, for the sky was a
                                dead black, and the stars had ceased to twinkle.
                            </p>
                        </Top>
                        <p className="intro__text">
                            By the same illusion which lifts the horizon of the sea to the level of the
                            spectator on a hillside, the sable cloud beneath was dished out, and the car
                            seemed to float in the middle of an immense dark sphere, whose upper half was
                            strewn with silver.
                        </p>
                        <Link to={RouteNames.ABOUT} className="intro__btn btn btn_rg">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
            <div className="intro__picture-wrap">
                <div className="intro__picture-inner">
                    <div className="intro__image-ibg">
                        <Picture
                            srcWebp={intro_WEBP}
                            fallbackSrc={intro}
                            alt="Commodo sed egestas egestas fringilla phasellus faucibus."
                        />
                    </div>
                    <div className="intro__quote-wrap">
                        <q className="intro__quote">
                            Commodo sed egestas egestas fringilla phasellus faucibus.
                        </q>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Intro);
