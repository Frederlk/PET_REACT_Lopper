import { FC } from "react";
import { Helmet } from "react-helmet";
import { Testimonials } from "../_components";
import { Amazing, Benefits, Intro, Mainscreen } from "../_containers";

const HomePage: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="Lopper" content="Lopper" />
                <title>Lopper</title>
            </Helmet>

            <Mainscreen />

            <Intro />

            <Benefits />

            <Amazing />

            <Testimonials />

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
