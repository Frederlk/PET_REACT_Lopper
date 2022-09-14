import { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";
import { data, images } from "../../constants";
import { Picture, ServiceItem, Top } from "../../_components";

const servicesItems = data.servicesItems.map((item, i) => (
    <ServiceItem key={item.title + i} item={item} className="amazing__item" />
));

const { map01, map01_WEBP } = images.defaultImages;

const Amazing: FC = () => {
    return (
        <section className="amazing">
            <div className="amazing__container">
                <Top className="amazing__top dark" label="We are Amazing" title="Our services">
                    <p className="amazing__subtitle top__subtitle">
                        Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Quam elementum
                        pulvinar etiam non. Eu consequat.
                    </p>
                    <div className="amazing__bg">
                        <Picture srcWebp={map01_WEBP} fallbackSrc={map01} alt="Map" />
                    </div>
                </Top>
                <div className="amazing__flex">{servicesItems.length > 0 && servicesItems}</div>
                <div className="amazing__btn-wrap">
                    <Link to={RouteNames.SERVICES} className="amazing__btn btn btn_rg">
                        Learn more
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Amazing;
