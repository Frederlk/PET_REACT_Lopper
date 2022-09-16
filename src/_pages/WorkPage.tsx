import { Helmet } from "react-helmet";
import { images } from "../constants";
import { Newsletter, Preview, Testimonials } from "../_components";
import { Team } from "../_containers";

const { bgTeam, bgTeam_WEBP } = images.defaultImages;

const WorkPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Team" content="Team" />
                <title>Team</title>
            </Helmet>

            <Preview title="Our Team" img={bgTeam} imgWebp={bgTeam_WEBP} />

            <Team />

            <Testimonials />

            <Newsletter />
        </>
    );
};

export default WorkPage;
