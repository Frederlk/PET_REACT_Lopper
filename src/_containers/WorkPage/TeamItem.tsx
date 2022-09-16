import { FC } from "react";
import { ITeamItem } from "../../models/models";
import { Picture } from "../../_components";

const TeamItem: FC<{ item: ITeamItem }> = ({ item }) => {
    const { img, imgWebp, name, position, link01, link01Icon, link02, link02Icon, link03, link03Icon } = item;

    return (
        <div className="team__item">
            <a href={link02} target="_blank" rel="noreferrer" className="team__image-ibg">
                <Picture srcWebp={imgWebp} fallbackSrc={img} alt={name} />
            </a>
            <a href={link02} target="_blank" rel="noreferrer" className="team__name">
                {name}
            </a>
            <div className="team__job">{position}</div>
            <div className="team__socials">
                <a
                    href={link01}
                    target="_blank"
                    rel="noreferrer"
                    className={`team__social-item ${link01Icon}`}
                ></a>
                <a
                    href={link02}
                    target="_blank"
                    rel="noreferrer"
                    className={`team__social-item ${link02Icon}`}
                ></a>
                <a
                    href={link03}
                    target="_blank"
                    rel="noreferrer"
                    className={`team__social-item ${link03Icon}`}
                ></a>
            </div>
        </div>
    );
};

export default TeamItem;
