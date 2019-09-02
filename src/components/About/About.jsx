import React, { Component, Fragment } from "react";
import style from "./about.scss";
import HeaderTextBlock from "../Header/HeaderTextBlock/HeaderTextBlock.jsx";
import style2 from "../Header/HeaderTextBlock/headertextblock.scss";
import about1 from "../../images/about1.jpg";
import about2 from "../../images/about2.jpg";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const About = ({ title2, order, isMobile }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className="about-page page" id="about-festival" data-order={order}>
            <div className="mobile-title-page">{t("dataAbout.title")}</div>
            <div className="about-page__content info-page page__content">
                <div className="center-block__col">
                    <div className="header__center-block">
                        <HeaderTextBlock video={true} isMobile={isMobile} />
                    </div>
                    <div className="gradient-line-block gradient-line-block--left gradient-line-block--1">
                        <div className="gradient-line gradient-line--1 gradient-line--medium gradient-line--narrow" />
                        <div className="gradient-line gradient-line--2 gradient-line--big gradient-line--narrow" />
                        <div className="gradient-line gradient-line--3 gradient-line--small gradient-line--narrow" />
                    </div>
                    <div className="about_text--black">
                        {i18n.t("dataAbout.description1")}
                    </div>
                    <div className="gradient-line-block gradient-line-block--right gradient-line-block--2">
                        <div className="gradient-line gradient-line--1 gradient-line--wide" />
                        <div className="gradient-line gradient-line--2 gradient-line--medium gradient-line--narrow" />
                    </div>
                    <div className="about_text--white">
                        {i18n.t("dataAbout.description2")}
                    </div>
                    <div className="gradient-line-block gradient-line-block--left gradient-line-block--3">
                        <div className="gradient-line gradient-line--1 gradient-line--small gradient-line--narrow" />
                        <div className="gradient-line gradient-line--2 gradient-line--big gradient-line--narrow" />
                    </div>
                    <img className="about-image" src={about1} alt="PixelFest" />
                    <h3>
                        {title2.map((item, index) => (
                            <Fragment>
                                <span key={index}>
                                    {i18n.t(`dataAbout.title2.${index}`)}
                                </span>
                                <br />
                            </Fragment>
                        ))}
                    </h3>
                    <div className="about_text--black">
                        {i18n.t("dataAbout.description3")}
                    </div>
                    <div className="gradient-line-block gradient-line-block--right gradient-line-block--4">
                        <div className="gradient-line gradient-line--1 gradient-line--big gradient-line--wide" />
                        <div className="gradient-line gradient-line--2 gradient-line--small gradient-line--narrow" />
                    </div>
                    <div className="about_text--black">
                        {i18n.t("dataAbout.description4")}
                    </div>
                    <div className="about_text--white text-border">
                        {i18n.t("dataAbout.description5")}
                    </div>
                    <div className="about_text--black">
                        {i18n.t("dataAbout.description6")}
                    </div>
                    <h3
                        className="title--white menu-ul__li toprogram"
                        data-index="3"
                    >
                        <a href="#program">{i18n.t("dataAbout.title3")}</a>
                    </h3>
                    <img className="about-image" src={about2} alt="PixelFest" />
                    <div className="about_text--black">
                        {i18n.t("dataAbout.description7")}
                    </div>
                    <div className="gradient-line-block gradient-line-block--left gradient-line-block--5">
                        <div className="gradient-line gradient-line--1 gradient-line--big gradient-line--wide" />
                        <div className="gradient-line gradient-line--2 gradient-line--small gradient-line--narrow" />
                    </div>
                    <div className="about_text--black">
                        {i18n.t("dataAbout.description8")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
