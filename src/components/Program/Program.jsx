import React from "react";
import style from "./program.scss";
import title_img_desk from "../../images/program-title-desk.png";
import title_img_mob from "../../images/program-title-mob.png";

const Program = ({ title, alt, isMobile }) => {

    if (isMobile) {
        return (
            <div className="program-page" id="program">
                <div className="program-page__content">
                    <div className="mobile-title-page">{title}</div>
                    <img
                        className="program-page__title"
                        src={title_img_mob}
                        alt={alt}
                    />
                </div>
            </div>
        );
    }
    return (
        <div className="page program-page" id="program">
            <div className="program-page__content page__content">
                <img
                    className="program-page__title"
                    src={title_img_desk}
                    alt={alt}
                />
            </div>
        </div>
    );
};
export default Program;
