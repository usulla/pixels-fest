import React from "react";
import style from "./partners.scss";
import logo2x2 from "../../images/logo2x2.png";
import logoUmaTech from "../../images/logoUmaTech_rus.png";
import Footer from "../Footer/Footer.jsx";

const Partners = ({ title, title1, title2, title3, alt1, alt3 }) => {
    return (
        <div className="page partners-page" id="partners">
            <div className="partners-page__content page__content">
                <div className="mobile-title-page">{title}</div>
                <div className="partners-page__cols">
                    <div className="partners-page__col partners-page__col1">
                        <div className="partners-page__title">{title1}</div>
                        <img className="logo2x2 logo_img" src={logo2x2} alt={alt1} />
                    </div>
                    <div className="partners-page__col partners-page__col2">
                        <div className="partners-page__title">{title2}</div>
                    </div>
                    <div className="partners-page__col partners-page__col3">
                        <div className="partners-page__title">{title3}</div>
                        <img className="logo2x2 logo_img" src={logoUmaTech} alt={alt3} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Partners;
