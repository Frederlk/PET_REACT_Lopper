import { FC } from "react";
import { data, images } from "../../constants";
import { Picture, Top } from "../../_components";

const { building, building_WEBP } = images.defaultImages;

const companies = data.companiesItems.map(({ alt, img, imgWEBP }, i) => (
    <div key={alt + i} className="companies__icon">
        <Picture srcWebp={imgWEBP} fallbackSrc={img} alt={alt} />
    </div>
));

const Companies: FC = () => {
    return (
        <section className="companies">
            <div className="companies__container">
                <Top
                    className="companies__top"
                    label="What we do"
                    title="What we do more than you can imangine, belive us."
                />
            </div>
            <div className="companies__body">
                <div className="companies__container">
                    <div className="companies__inner">
                        <p className="companies__text">
                            Apparently we had reached a great height in the atmosphere, for the sky was a dead
                            black, and the stars had ceased to twinkle.
                        </p>
                        <div className="companies__grid">{companies.length > 0 && companies}</div>
                    </div>
                </div>
                <div className="companies__bg">
                    <div className="companies__image-ibg">
                        <Picture srcWebp={building_WEBP} fallbackSrc={building} alt="Companies" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Companies;
