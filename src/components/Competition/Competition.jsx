import React, { Component } from "react";
import style from "./competition.scss";
import about1 from "../../images/about1.jpg";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Competition = ({ categories, conditions, trlist, criteria, winners }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="competition-page page" id="competition">
            <div className="mobile-title-page">
                {i18n.t("dataCompetition.title")}
            </div>
            <div className="competition-page__content info-page page__content">
                <div className="center-block__col">
                    <div className="about_text--black">
                        {i18n.t("dataCompetition.description1")}
                    </div>
                    <div className="gradient-line-block gradient-line-block--left gradient-line-block--1">
                        <div className="gradient-line gradient-line--1 gradient-line--big gradient-line--narrow" />
                        <div className="gradient-line gradient-line--2 gradient-line--medium gradient-line--wide" />
                    </div>
                    <div className="about_text--white">
                        {i18n.t("dataCompetition.description2")}
                    </div>
                    <div className="gradient-line-block gradient-line-block--right gradient-line-block--2">
                        <div className="gradient-line gradient-line--1 gradient-line--big gradient-line--wide" />
                        <div className="gradient-line gradient-line--2 gradient-line--medium gradient-line--narrow" />
                        <div className="gradient-line gradient-line--3 gradient-line--medium gradient-line--narrow" />
                    </div>
                    <h3 className="title--white">
                        {i18n.t("dataCompetition.title2")}
                    </h3>
                    <div className="competition-item theme-block">
                        <h3>
                            <span>{i18n.t("dataCompetition.title3")}</span>
                            <span>{i18n.t("dataCompetition.title4")}</span>
                        </h3>
                        <div className="about_text--black">
                            {i18n.t("dataCompetition.description3")}
                        </div>
                        <div className="competition_text--white text-border">
                            <span className="categories-title">
                                {i18n.t("dataCompetition.categories.title")}
                            </span>
                            <ul className="categories-list">
                                {categories.data.map((item, index) => (
                                    <li key={index}>
                                        <span className="list-style" />
                                        <span className="li-text">
                                            {i18n.t(
                                                `dataCompetition.categories.data.${index}`
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="competition-item stages-block">
                        <h3>{i18n.t("dataCompetition.title5")}</h3>
                        <div className="stage">
                            <div className="stage-num">1</div>
                            <div className="stage-info">
                                <div className="stage-info__title">
                                    <span>
                                        {i18n.t(
                                            "dataCompetition.stage1.num_stage"
                                        )}
                                    </span>
                                    <span className="stage-info__date">
                                        {i18n.t("dataCompetition.stage1.date")}
                                    </span>

                                    <div className="stage-info__title-bottom">
                                        {i18n.t("dataCompetition.stage1.title")}
                                    </div>
                                </div>
                                <div className="about_text--black">
                                    {i18n.t(
                                        "dataCompetition.stage1.description"
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="gradient-line-block gradient-line-block--left gradient-line-block--3">
                            <div className="gradient-line gradient-line--1 gradient-line--big gradient-line--narrow" />
                            <div className="gradient-line gradient-line--2 gradient-line--medium gradient-line--narrow" />
                        </div>
                        <div className="stage">
                            <div className="stage-num">2</div>
                            <div className="stage-info">
                                <div className="stage-info__title">
                                    <span>
                                        {i18n.t(
                                            "dataCompetition.stage2.num_stage"
                                        )}
                                    </span>
                                    <span className="stage-info__date">
                                        {i18n.t("dataCompetition.stage2.date")}
                                    </span>

                                    <div className="stage-info__title-bottom">
                                        {i18n.t("dataCompetition.stage2.title")}
                                    </div>
                                </div>
                                <div className="about_text--black">
                                    {i18n.t(
                                        "dataCompetition.stage2.description"
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="competition-item conditions-block">
                        <h3>{i18n.t("dataCompetition.title6")}</h3>
                        <ul className="conditions-list">
                            {conditions.map((item, index) => (
                                <li key={index}>
                                    {i18n.t(
                                        `dataCompetition.conditions.${index}`
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="competition-item tr-block">
                        <h3>{i18n.t("dataCompetition.title7")}</h3>
                        <div className="about_text--black">
                            {i18n.t("dataCompetition.description9")}
                        </div>
                        <a href="#">{i18n.t("dataCompetition.download")}</a>
                        <ul className="tr-list">
                            {trlist.map((item, index) => (
                                <li key={index}>
                                    {i18n.t(`dataCompetition.tr.${index}`)}
                                </li>
                            ))}
                        </ul>
                        <a className="text-a" href="#">
                            {i18n.t("dataCompetition.title8")}
                        </a>
                    </div>
                    <div className="competition-item criteria-block">
                        <h3>{i18n.t("dataCompetition.title9")}</h3>
                        <ul className="conditions-list">
                            {criteria.map((item, index) => (
                                <li key={index}>
                                    {i18n.t(
                                        `dataCompetition.criteria.${index}`
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="competition-item winners-block">
                        <h3>{i18n.t("dataCompetition.title10")}</h3>
                        <div className="winners-block--item">
                            <div className="about_text--white">
                                {i18n.t("dataCompetition.winners.title1")}
                            </div>
                            <ul className="conditions-list">
                                {winners.data1.map((item, index) => (
                                    <li key={index}>
                                        {i18n.t(
                                            `dataCompetition.winners.data1.${index}`
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="winners-block--item">
                            <div className="about_text--white">
                                {i18n.t("dataCompetition.winners.title2")}
                            </div>
                            <ul className="conditions-list">
                                {winners.data2.map((item, index) => (
                                    <li key={index}>
                                        {i18n.t(
                                            `dataCompetition.winners.data2.${index}`
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <h3 className="title--white">
                        {i18n.t("dataCompetition.title2")}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Competition;