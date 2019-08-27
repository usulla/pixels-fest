import React from "react";
import style from "./footer.scss";
import Logo2x2 from "../Logo2x2/Logo2x2.jsx";
import logo from "../../images/logo.png";
import logo2x2 from "../../images/logo2x2.png";
import logo_yeltsin from "../../images/logo_yeltsin.png";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Footer = ({
    apply,
    contest_rules,
    title_logo2x2,
    address_title,
    address_city,
    address_street,
    license,
    isMobile
}) => {
    const { t, i18n } = useTranslation();
    if (!isMobile) {
        return (
            <div className="footer">
                <div className="footer__content">
                    <div className="col1">
                        <img
                            className="footer__logo"
                            src={logo}
                            alt="Pixels Fest"
                        />
                        <div className="soc-icons">
                            <a href="" target="_blank">
                                <i className="fab fa-vk" />
                            </a>
                            <a href="" target="_blank">
                                <i className="fab fa-facebook-square" />
                            </a>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="row--up">
                            <div className="col2__item col2__1">
                                <Logo2x2 />
                            </div>
                            <div className="col2__item col2__2">
                                <div
                                    className="toapply menu-ul__li"
                                    data-index="7"
                                >
                                    <a className="apply" href="#apply">
                                        {i18n.t("dataFooter.apply")}
                                    </a>
                                </div>
                                <div
                                    className="menu-ul__li tocompetition"
                                    data-index="4"
                                >
                                    <a className="rules" href="#competition">
                                        {i18n.t("dataFooter.contest_rules")}
                                    </a>
                                </div>
                            </div>
                            <div className="col2__item col2__3">
                                {i18n.t("dataFooter.address_title")}
                                <br />
                                {i18n.t("dataFooter.address_city")}
                                <br />
                                {i18n.t("dataFooter.address_street")}
                                <br />
                            </div>
                        </div>
                        <div className="row--bottom">
                            <div className="license">
                                {i18n.t("dataFooter.license")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="col1">
                    <img className="footer__logo" src={logo} alt="Pixel Fest" />
                    <div className="soc-icons">
                        <a href="" target="_blank">
                            <i className="fab fa-vk" />
                        </a>
                        <a href="" target="_blank">
                            <i className="fab fa-facebook-square" />
                        </a>
                    </div>
                </div>
                <div className="col2">
                    <div className="row--bottom">
                        <div className="license">
                            {i18n.t("dataFooter.license")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
