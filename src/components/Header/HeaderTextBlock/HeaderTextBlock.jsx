import React from "react";
import "./headertextblock.scss";
import logo from "../../../images/logo.png";

const HeaderTextBlock = props => {
    const { description, description2, period, subtitle } = props;
    return (
        <div className="animate-hidden">
            <div className="h1">
                <img className="logo-img" src={logo} alt="Pixels Fest" />
            </div>
            <div className="header__description">
                <h2>
                    {description}
                    <div className="header__description--margintop">
                        <span>{description2}</span>
                        <span className="header__description--period">
                            {period}
                        </span>
                    </div>
                </h2>
                <div className="header__description--subtitle">{subtitle}</div>
            </div>
        </div>
    );
};

export default HeaderTextBlock;
