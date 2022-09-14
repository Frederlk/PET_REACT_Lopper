import { FC, memo } from "react";
import { Socials } from "../../_components";
import { MenuBlock } from "..";

const SocialLinks: FC = () => {
    return (
        <MenuBlock label="Follow Us">
            <Socials className="menu__socials" />
        </MenuBlock>
    );
};

export default memo(SocialLinks);
