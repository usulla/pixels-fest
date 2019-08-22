import React from "react";
import style from "./program.scss";
import title_img_desk from "../../images/program-title-desk.png";
import title_img_mob from "../../images/program-title-mob.png";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Program = ({ title, alt, isMobile }) => {
    const { t, i18n } = useTranslation();
    if (isMobile) {
        return (
            <div className="program-page" id="program">
                <div className="program-page__content">
                    <div className="mobile-title-page">{t("dataProgram.title")}</div>
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
                    alt={t("dataProgram.alt")}
                />
            </div>
        </div>
    );
};
export default Program;
