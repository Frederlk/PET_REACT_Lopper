import { FC } from "react";
import { Link } from "react-router-dom";
import { CustomRouteObject } from "../../routes";

interface FooterLinkProps {
    item: CustomRouteObject;
}

const FooterLink: FC<FooterLinkProps> = ({ item }) => {
    return (
        <li>
            <Link to={`${item.path}`} className="footer__link">
                {item.title}
            </Link>
        </li>
    );
};

export default FooterLink;
