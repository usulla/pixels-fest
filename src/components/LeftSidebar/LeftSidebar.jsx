import React from "react";
import ChangeLang from "../ChangeLang/ChangeLang.jsx";
import "./leftsidebar.scss";
import logo_leftsidebar from "../../images/logo_leftsidebar.png";

const LeftSidebar = () => {
    return (
        <nav className="left-sidebar">
            <ul className="left-sidebar-ul">
                <li className="left-sidebar__li logo">
                    <img
                        className="logo_leftsidebar"
                        src={logo_leftsidebar}
                        alt="pixel fest"
                    />
                </li>
                <li className="left-sidebar__li change-language">
                    <ChangeLang/>
                </li>
                <li className="left-sidebar__li timer">81 29 11 33</li>
            </ul>
        </nav>
    );
};

export default LeftSidebar;
