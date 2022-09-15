import { FC } from "react";
import { data } from "../../constants";
import { Top } from "../../_components";
import SphereItem from "./SphereItem";

const speresItems = data.spheresItems.map(({ title, text, icon }, i) => (
    <SphereItem key={title + i} title={title} text={text} icon={icon} />
));

const Spheres: FC = () => {
    return (
        <section className="spheres">
            <div className="spheres__container">
                <Top className="spheres__top" label="What we do">
                    <p className="spheres__subtitle">
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead
                        black, and the stars had ceased to twinkle.
                    </p>
                </Top>
                {speresItems.length > 0 && <div className="spheres__grid">{speresItems}</div>}
            </div>
        </section>
    );
};

export default Spheres;
