import { FC } from "react";
import { Helmet } from "react-helmet";
import { Newsletter, Testimonials } from "../_components";
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

            <Newsletter />
        </>
    );
};

export default HomePage;
