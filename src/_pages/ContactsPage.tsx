import { FC } from "react";
import { Helmet } from "react-helmet";
import { images } from "../constants";
import { Preview } from "../_components";
import { Info, Touch } from "../_containers";

const { bgContacts, bgContacts_WEBP } = images.defaultImages;

const ContactsPage: FC = () => {
    return (
        <>
            <Helmet>
                <meta name="Contacts" content="Contacts" />
                <title>Contacts</title>
            </Helmet>

            <Preview title="Contact us" img={bgContacts} imgWebp={bgContacts_WEBP} />

            <Info />

            <Touch />
        </>
    );
};

export default ContactsPage;
