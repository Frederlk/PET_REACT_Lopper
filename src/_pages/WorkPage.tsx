import { Helmet } from "react-helmet";
import { images } from "../constants";
import { Newsletter, Preview, Testimonials } from "../_components";

const { bgTeam, bgTeam_WEBP } = images.defaultImages;

const WorkPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Team" content="Team" />
                <title>Team</title>
            </Helmet>

            <Preview title="Our Team" img={bgTeam} imgWebp={bgTeam_WEBP} />

            <section className="page__team team">
                <div className="team__wrapper">
                    <div className="team__top top">
                        <div className="top__container _container">
                            <div className="top__label">What are</div>
                            <h3 className="top__title">Our team</h3>
                            <div className="top__subtitle">
                                Upper prior hundred links approach reedy, was to the than and the ever somehow
                                surprised known for every by of there until road,{" "}
                            </div>
                        </div>
                    </div>
                    <div className="team__body">
                        <div className="team__container _container">
                            <div className="team__inner">
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/09.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/11.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/10.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/12.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/13.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__column">
                                    <div className="team__item">
                                        <a href="#" className="team__image _ibg">
                                            <img src="img/avatars/14.jpg" alt="" />
                                        </a>
                                        <a href="#" className="team__name">
                                            Kerry Lorem
                                        </a>
                                        <div className="team__job">Designer</div>
                                        <div className="team__socials">
                                            <a href="#" className="team__social-item _icon-twitter"></a>
                                            <a href="#" className="team__social-item _icon-globe"></a>
                                            <a href="#" className="team__social-item _icon-codepen"></a>
                                        </div>
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

export default WorkPage;
