import React from "react";
import style from "./competition.scss";
import fasade_mask from "../../images/fasade_mask.png";
import model3d from "../../images/model3d.png";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Competition = ({ categories, conditions, trlist, criteria, winners, order }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="competition-page page" id="competition" data-order={order}>
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
                    <h3 className="title--white toapply menu-ul__li" data-index="7">
                        <a href="#apply">{i18n.t("dataCompetition.title2")}</a>
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
                                    <span className="list-style purple" />
                                    <span className="li-text">
                                        {i18n.t(
                                            `dataCompetition.conditions.${index}`
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="competition-item tr-block">
                        <h3>{i18n.t("dataCompetition.title7")}</h3>
                        <div className="about_text--black">
                            {i18n.t("dataCompetition.description9")}
                        </div>
                        <a className="download_btn" href={i18n.t("dataCompetition.download_url")}>
                            {i18n.t("dataCompetition.download")}
                        </a>
                        <img
                            className="image_model"
                            src={fasade_mask}
                            alt="Pixels Fest"
                        />
                        <img
                            className="image_model"
                            src={model3d}
                            alt="Pixels Fest"
                        />
                        <ul className="tr-list">
                            {trlist.map((item, index) => (
                                <li key={index}>
                                    <span className="list-style purple" />
                                    <span className="li-text">
                                        {i18n.t(`dataCompetition.tr.${index}`)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <a className="text-a"  target="_blank" href={i18n.t("dataFooter.regulations")}>
                            {i18n.t("dataCompetition.title8")}
                        </a>
                    </div>
                    <div className="gradient-line-block gradient-line-block--right gradient-line-block--4">
                        <div className="gradient-line gradient-line--1 gradient-line--big gradient-line--wide" />
                        <div className="gradient-line gradient-line--2 gradient-line--medium gradient-line--wide" />
                        <div className="gradient-line gradient-line--3 gradient-line--small gradient-line--wide" />
                    </div>
                    <div className="competition-item criteria-block">
                        <h3>{i18n.t("dataCompetition.title9")}</h3>
                        <ul className="conditions-list">
                            {criteria.map((item, index) => (
                                <li key={index}>
                                    <span className="list-style darkblue" />
                                    <span className="li-text">
                                        {i18n.t(
                                            `dataCompetition.criteria.${index}`
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="gradient-line-block gradient-line-block--right gradient-line-block--5">
                        <div className="gradient-line gradient-line--1 gradient-line--big gradient-line--wide" />
                        <div className="gradient-line gradient-line--2 gradient-line--big gradient-line--wide" />
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
                                        <span className="list-style blue" />
                                        <span className="li-text">
                                            {i18n.t(
                                                `dataCompetition.winners.data1.${index}`
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="gradient-line-block gradient-line-block--left gradient-line-block--6">
                            <div className="gradient-line gradient-line--1 gradient-line--medium gradient-line--narrow" />
                            <div className="gradient-line gradient-line--2 gradient-line--medium gradient-line--narrow" />
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
                    <h3 className="title--white toapply2 menu-ul__li" data-index="7">
                        <a href="#apply">{i18n.t("dataCompetition.title2")}</a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Competition;

