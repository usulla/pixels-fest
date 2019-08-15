import React from "react";
import "./mobilemenu.js";
import "./mobilemenu.scss";
import ChangeLang from "../ChangeLang/ChangeLang.jsx";

const MobileMenu = ({ list }) => {
    return (
        <div className="mobile-menu-content">
            <div className="mobile-menu">
                <div className="mobile-menu-inner">
                    <ul>
                        {list.map((li, index) => (
                            <li key={index}><a href={`#${li.src}`}>{li.title}</a></li>
                        ))}
                    </ul>
                    <ChangeLang />
                    <div className="mobile-menu__close" />
                </div>
            </div>
            <div className="mobile-menu__bg" />
        </div>
    );
};

export default MobileMenu;
