import React from "react";
import { useTranslation } from "react-i18next";
import "./nav.js";
import "./nav.scss";

const Nav = ({ list }) => {
    const { t, i18n } = useTranslation();
    return (
        <nav className="menu">
            {/* {t("dataHeader.alt")} */}
            <ul className="menu-ul menu__menu-ul">
                {list.map((li, index) => (
                    <li key={index} className={`menu-ul__li menu-ul__li-${li.src}`}>
                        <span></span>
                        <a href={`#${li.src}`}>{li.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
