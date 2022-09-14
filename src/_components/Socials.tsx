import { FC, useMemo, memo } from "react";
import { data } from "../constants";

interface SocialsProps {
    className?: string;
}

const Socials: FC<SocialsProps> = ({ className }) => {
    const socialLinks = useMemo(
        () =>
            data.socialLinks
                .slice()
                .map(({ link, iconClass }, i) => (
                    <a
                        href={link}
                        key={link + i}
                        target="_blank"
                        rel="noreferrer"
                        className={`socials__link ${iconClass}`}
                    ></a>
                )),
        [data.socialLinks]
    );

    return <div className={`${className || ""} socials`}>{socialLinks}</div>;
};

export default memo(Socials);
