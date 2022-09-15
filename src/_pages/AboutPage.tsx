import { FC } from "react";
import { Helmet } from "react-helmet";
import { images } from "../constants";
import { Newsletter, Preview, Testimonials } from "../_components";
import { Companies, Spheres, WeDo, What } from "../_containers";

const { bgMain, bgMain_WEBP } = images.defaultImages;

const AboutPage: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="About" content="About" />
                <title>About</title>
            </Helmet>

            <Preview title="About us" img={bgMain} imgWebp={bgMain_WEBP} />

            <What />

            <WeDo />

            <Companies />

            <Spheres />

            <Testimonials />

            <Newsletter />
        </>
    );
};

export default AboutPage;
