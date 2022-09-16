import { Helmet } from "react-helmet";
import { images } from "../constants";
import { Amazing, Newsletter, Preview, Testimonials } from "../_components";
import { Digits, Steps } from "../_containers";

const { bgService, bgService_WEBP } = images.defaultImages;

const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Services" content="Services" />
                <title>Services</title>
            </Helmet>

            <Preview title="Our services" img={bgService} imgWebp={bgService_WEBP} />

            <Digits />

            <Amazing servicesPage />

            <Steps />

            <Testimonials />

            <Newsletter />
        </>
    );
};

export default ServicesPage;
