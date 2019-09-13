import React from "react";
import style from "./logo2x2.scss";
import logo2x2 from "../../images/logo2x2.png";
import logo_yeltsin from "../../images/logo_yeltsin.png";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Logo2x2 = ({ title }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className="logo2x2">
            <div className="title">{i18n.t("dataHeader.logo2x2.title")}</div>
            <a href="https://2x2tv.ru/" target="_blank"><img className="logo2x2-img" src={logo2x2} alt="2x2" /></a>
            <a href="https://yeltsin.ru" target="_blank"><img className="title2" src={logo_yeltsin} alt="elcin" /></a>
        </div>
    );
};

export default Logo2x2;
