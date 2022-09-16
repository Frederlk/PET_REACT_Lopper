import { FC } from "react";
import { Top } from "../../_components";
import StepsRow from "./StepsRow";

import { images } from "../../constants";

const { step01, step01_WEBP, step02, step02_WEBP, step03, step03_WEBP } = images.stepsImages;

const Steps: FC = () => {
    return (
        <section className="steps">
            <Top className="steps__top" label="What we do" title="What we do">
                <p className="top__subtitle">
                    Upper prior hundred links approach reedy, was to the than and the ever somehow surprised
                    known for every by of there until road
                </p>
            </Top>
            <div className="steps__body">
                <StepsRow
                    step="01"
                    title="Upper prior hundred links approach reedy"
                    text="Upper prior hundred links approach reedy, was to the than and the ever
                        somehow surprised known for every by of there until road"
                    img={step01}
                    imgWebp={step01_WEBP}
                />
                <StepsRow
                    step="02"
                    title="Upper prior hundred links approach reedy"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Est laudantium unde, possimus cumque eius dicta."
                    img={step02}
                    imgWebp={step02_WEBP}
                />
                <StepsRow
                    step="03"
                    title="Upper prior hundred links approach reedy"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Excepturi, officia? Iusto sunt, odio deserunt perferendis exercitationem quae laborum culpa laboriosam?"
                    img={step03}
                    imgWebp={step03_WEBP}
                />
            </div>
        </section>
    );
};

export default Steps;
