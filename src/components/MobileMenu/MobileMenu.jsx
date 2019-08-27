import React from "react";
import "./mobilemenu.js";
import "./mobilemenu.scss";
import ChangeLang from "../ChangeLang/ChangeLang.jsx";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
const MobileMenu = ({ list }) => {
    const { t, i18n } = useTranslation();
    return (
            <div className="mobile-menu">
                <div className="mobile-menu-inner">
                    <ul>
                        {list.map((li, index) => (
                            <li key={index}>
                                <a href={`#${li.src}`}>
                                    {i18n.t(
                                        `dataHeader.navtitle.${index}.title`
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ChangeLang />
                    <div className="mobile-menu__close" />
                </div>
            </div>
    );
};

export default MobileMenu;
