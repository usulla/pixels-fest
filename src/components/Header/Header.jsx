import React from "react";
import style from "./header.scss";
import HeaderTextBlock from "./HeaderTextBlock/HeaderTextBlock.jsx";
import Logo2x2 from "../Logo2x2/Logo2x2.jsx";
import Timer from "./Timer/Timer.jsx";
import GradientUpBlock from "./GradientUpBlock/GradientUpBlock.jsx";
import model3d from "../../images/model3d.mp4";

const Header = ({ navtitle, h1_text, logo2x2, timer, isMobile, order }) => {
    if (!isMobile) {
        return (
            <header
                className="page header header-page active"
                data-order={order}
                id="header"
            >
                <div className="header__content page__content">
                    <div className="header__center-block">
                        <div className="header__row header__row--top">
                            <HeaderTextBlock
                                h1_text={h1_text}
                                isMobile={isMobile}
                                video={false}
                            />
                            <Logo2x2 {...logo2x2} />
                        </div>
                        <div className="header__row header__row--video">
                            <video
                                className="video-model"
                                loop
                                autoplay
                                autoplay="autoplay"
                            >
                                <source src={model3d} type="video/mp4" />
                            </video>
                        </div>
                        <div className="header__row header__row--middle">
                            <GradientUpBlock isMobile={isMobile}/>
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
        <header className="header page header-page active" id="header">
            <div className="header__content page__content">
                <div className="header__row header__row--top">
                    <HeaderTextBlock h1_text={h1_text} />
                </div>
                <div className="header__row header__row--middle">
                    <GradientUpBlock isMobile={isMobile} />
                </div>
                <Logo2x2 {...logo2x2} />
            </div>
        </header>
    );
};

export default Header;
