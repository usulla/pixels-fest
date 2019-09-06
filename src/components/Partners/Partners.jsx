import React from "react";
import style from "./partners.scss";
import logo2x2 from "../../images/logo2x2.png";
import logoUmaTech from "../../images/logoUmaTech_rus.png";
import logo_yeltsin from "../../images/logo_yeltsin.png";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Partners = ({order}) => {
    const { t, i18n } = useTranslation();
    return (
        <div className="page partners-page" id="partners" data-order={order}>
            <div className="partners-page__content page__content">
                <div className="mobile-title-page">
                    {t("dataPartners.title")}
                </div>
                <div className="partners-page__cols">
                    <div className="partners-page__col partners-page__col1">
                        <div className="partners-page__title">
                            {t("dataPartners.title1")}
                        </div>
                        <img
                            className="logo2x2 logo_img"
                            src={logo2x2}
                            alt={t("dataPartners.alt1")}
                        />
                        <img
                            className="logo2x2 logo_img"
                            src={logo_yeltsin}
                        />
                    </div>
                    {/* <div className="partners-page__col partners-page__col2">
                        <div className="partners-page__title">
                            {t("dataPartners.title2")}
                        </div>
                    </div> */}
                    <div className="partners-page__col partners-page__col3">
                        <div className="partners-page__title">
                            {t("dataPartners.title3")}
                        </div>
                        <img
                            className="logo2x2 logo_img"
                            src={logoUmaTech}
                            alt={t("dataPartners.alt3")}
                        />
                       
                    </div>
                    <div className="partners-page__col partners-page__col4" />
                </div>
            </div>
        </div>
    );
};
export default Partners;
