import React from "react";
import style from "./header.scss";
import HeaderTextBlock from "./HeaderTextBlock/HeaderTextBlock.jsx";
import Logo2x2 from "../Logo2x2/Logo2x2.jsx";
import Timer from "./Timer/Timer.jsx";
import GradientUpBlock from "./GradientUpBlock/GradientUpBlock.jsx";

const Header = ({ navtitle, h1_text, theme, logo2x2, timer, isMobile }) => {
    if (!isMobile) {
        return (
            <header className="page header">
                <div className="header__content page__content">
                    <div className="header__center-block">
                        <div className="header__row header__row--top">
                            <HeaderTextBlock {...h1_text} />
                            <Logo2x2 {...logo2x2} />
                        </div>
                        <div className="header__row header__row--middle">
                            <GradientUpBlock {...theme} />
                        </div>
                        <div className="header__row header__row--bottom">
                            <Timer {...timer} />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__row header__row--top">
                    <HeaderTextBlock {...h1_text} />
                </div>
                <div className="header__row header__row--middle">
                    <GradientUpBlock {...theme} />
                </div>
                <Logo2x2 {...logo2x2} />
            </div>
        </header>
    );
};

export default Header;
