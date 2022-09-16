import { FC } from "react";
import { Helmet } from "react-helmet";
import { Newsletter, Preview, Testimonials } from "../_components";
import Gallery from "../_containers/GalleryPage/Gallery";

const GalleryPage: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="Gallery" content="Gallery" />
                <title>Gallery</title>
            </Helmet>

            <Preview title="Gallery" />

            <Gallery />

            <Testimonials className="testi_gallery" />

            <Newsletter />
        </>
    );
};

export default GalleryPage;
