import React from "react";
import "./headertextblock.scss";
import logo from "../../../images/logo.png";
import pf_logo_animate from "../../../images/pf_logo_animate.webm";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
const HeaderTextBlock = ( props) => {
    const { t, i18n } = useTranslation();
    const video = props.video;
    const isMobile = props.isMobile;
    if (!video) {
        return (
            <div className="animate-hidden">
                <div className="h1">
                    <img className="logo-img" src={logo} alt="Pixels Fest" />
                </div>
                <div className="header__description">
                    <h2>
                        {i18n.t("dataHeader.h1_text.description")}
                        <div className="header__description--margintop">
                            <span>
                                {i18n.t("dataHeader.h1_text.description2")}
                            </span>
                            <span className="header__description--period">
                                {i18n.t("dataHeader.h1_text.period")}
                            </span>
                        </div>
                    </h2>
                    <div className="header__description--subtitle">
                        {i18n.t("dataHeader.h1_text.subtitle")}
                    </div>
                </div>
            </div>
        );
    } else if (video && !isMobile) {
        return (
            <div className="animate-hidden">
                <div className="h1">
                    <video
                        className="logo-animation"
                        loop
                        autoPlay
                        autoPlay="autoplay"
                    >
                        <source src={pf_logo_animate} type="video/webm" />
                    </video>
                </div>
                <div className="header__description">
                    <h2>
                        {i18n.t("dataHeader.h1_text.description")}
                        <div className="header__description--margintop">
                            <span>
                                {i18n.t("dataHeader.h1_text.description2")}
                            </span>
                            <span className="header__description--period">
                                {i18n.t("dataHeader.h1_text.period")}
                            </span>
                        </div>
                    </h2>
                    <div className="header__description--subtitle">
                        {" "}
                        {i18n.t("dataHeader.h1_text.subtitle")}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="animate-hidden">
                <div className="h1">
                    <img src={logo} alt="pixels fest"></img>
                </div>
                <div className="header__description">
                    <h2>
                        {i18n.t("dataHeader.h1_text.description")}
                        <div className="header__description--margintop">
                            <span>
                                {i18n.t("dataHeader.h1_text.description2")}
                            </span>
                            <span className="header__description--period">
                                {i18n.t("dataHeader.h1_text.period")}
                            </span>
                        </div>
                    </h2>
                    <div className="header__description--subtitle">
                        {i18n.t("dataHeader.h1_text.subtitle")}
                    </div>
                </div>
            </div>
        );
    }
};
export default HeaderTextBlock;
