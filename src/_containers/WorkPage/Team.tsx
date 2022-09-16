import { FC } from "react";
import { data } from "../../constants";
import { Top } from "../../_components";
import TeamItem from "./TeamItem";

const teamItems = data.teamItems.map((item) => <TeamItem key={item.link01} item={item} />);

const Team: FC = () => {
    return (
        <section className="team">
            <Top label="What are" title="Our team" className="team__top">
                <p className="top__subtitle">
                    Upper prior hundred links approach reedy, was to the than and the ever somehow surprised
                    known for every by of there until road
                </p>
            </Top>
            {teamItems.length > 0 && (
                <div className="team__body">
                    <div className="team__container">
                        <div className="team__grid">{teamItems}</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Team;
