import { FC } from "react";
import { Top } from "../../_components";

const Digits: FC = () => {
    return (
        <section className="page__digits digits">
            <div className="digits__container">
                <Top label="What we do" className="digits__top">
                    <p className="digits__subtitle">
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead
                        black, and the stars had ceased to twinkle.
                    </p>
                </Top>
                <div className="digits__bottom">
                    <div className="digits__item">
                        <div className="digits__digit">15+</div>
                        <div className="digits__text">Nobel prizes</div>
                    </div>
                    <div className="digits__item">
                        <div className="digits__digit">33</div>
                        <div className="digits__text">Nobel prizes</div>
                    </div>
                    <div className="digits__item">
                        <div className="digits__digit">12</div>
                        <div className="digits__text">Nobel prizes</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Digits;
