import React from "react";
import style from "./gradientupblock.scss";

const GradientUpBlock = ({ title, description }) => {
    return (
        <div className="gradient-up-block">
            <span className="theme-title">
                {title}
                <div className="theme-gradientblock" />
            </span>
        </div>
    );
};

export default GradientUpBlock;
