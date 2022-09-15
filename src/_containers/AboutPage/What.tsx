import { FC } from "react";
import { Top } from "../../_components";

const What: FC = () => {
    return (
        <section className="what">
            <div className="what__container">
                <Top className="what__top" label="What we do">
                    <p className="what__subtitle">
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead
                        black, and the stars had ceased to twinkle.
                    </p>
                </Top>
                <div className="what__grid">
                    <div className="what__article">
                        <h5 className="what__item-title">Our objectives</h5>
                        <p className="what__text">
                            Amet consectetur adipiscing elit pellentesque habitant morbi. Fermentum et
                            sollicitudin ac orci phasellus. Dolor sit amet consectetur adipiscing elit duis.
                            Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.
                        </p>
                    </div>
                    <div className="what__article">
                        <h5 className="what__item-title">Our story</h5>
                        <p className="what__text">
                            Etiam dignissim diam quis enim lobortis. Egestas sed sed risus pretium quam
                            vulputate dignissim. Eleifend quam adipiscing vitae proin sagittis. Pharetra
                            pharetra massa massa ultricies. Elementum eu facilisis sed odio morbi. Morbi
                            tincidunt augue interdum velit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default What;
