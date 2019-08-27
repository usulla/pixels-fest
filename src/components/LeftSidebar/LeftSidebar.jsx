import React from "react";
import ChangeLang from "../ChangeLang/ChangeLang.jsx";
import Timer from "../Header/Timer/Timer.jsx";
import "./leftsidebar.scss";
import logo_leftsidebar from "../../images/logo_leftsidebar.png";

const LeftSidebar = () => {
    return (
        <nav className="left-sidebar">
            <ul className="left-sidebar-ul">
                <li className="menu-ul__li left-sidebar__li logo"  data-index="1">
                    <a href="#header">
                        <img
                            className="logo_leftsidebar"
                            src={logo_leftsidebar}
                            alt="pixel fest"
                        />
                    </a>
                </li>
                <li className="left-sidebar__li change-language">
                    <ChangeLang />
                </li>
                <li className="left-sidebar__li timer">
                    <Timer />
                </li>
            </ul>
        </nav>
    );
};

export default LeftSidebar;
