import { FC,  } from "react";
import { images } from "../../constants";
import { Picture } from "../../_components";
import WeDoCard from "./WeDoCard";

const { intro, intro_WEBP } = images.defaultImages;

const WeDo: FC = () => {


    return (
        <section className="wedo">
            <div className="wedo__top ">
                <div className="wedo__container">
                    <div className="wedo__label">What we do</div>
                    <h3 className="wedo__title">What we do</h3>
                </div>
            </div>
            <div className="wedo__flex">
                <div className="wedo__content">
                    <div className="wedo__container">
                        <div className="wedo__inner" data-spollers="479.98,max">
                            <WeDoCard
                                title="We build great business"
                                text="Id consectetur purus ut faucibus pulvinar elementum integer enim. A arcu cursus
                            vitae congue mauris rhoncus aenean."
                            />
                            <WeDoCard
                                title="We build great business"
                                text="Enim neque volutpat ac tincidunt vitae. Malesuada nunc vel risus commodo viverra
                            maecenas accumsan lacus vel."
                            />
                            <WeDoCard
                                title="We build great business"
                                text="Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                            Eleifend donec pretium vulputate sapien nec sagittis."
                            />
                        </div>
                    </div>
                </div>
                <div className="wedo__image-side">
                    <div className="wedo__image-wrap">
                        <div className="wedo__image-ibg">
                            <Picture srcWebp={intro_WEBP} fallbackSrc={intro} alt="What we do" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeDo;
