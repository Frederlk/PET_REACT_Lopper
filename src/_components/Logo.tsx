import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../routes";

interface LogoProps {
    className: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
    return (
        <Link to={RouteNames.HOME} className={className}>
            Lopper
        </Link>
    );
};

export default memo(Logo);
