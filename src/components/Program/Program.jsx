import React from "react";
import style from "./program.scss";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Program = ({ title, alt, isMobile, order }) => {
    const { t, i18n } = useTranslation();
    if (isMobile) {
        return (
            <div className="program-page" id="program" data-order={order}>
                <div className="program-page__content page__content">
                    <div className="mobile-title-page">
                        {t("dataProgram.title")}
                    </div>
                    <div className="program-page__title">
                        {t("dataProgram.text")}
                    </div> 
                </div>
            </div>
        );
    }
    return (
        <div className="page program-page" id="program" data-order={order}>
            <div className="program-page__content page__content">
            <div className="program-page__title">
                        {t("dataProgram.text")}
            </div>
            </div>
        </div>
    );
};
export default Program;
