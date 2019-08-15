import React, { Component } from "react";
import logo2x2 from "../../images/logo2x2.png";
import logoyeltsin from "../../images/logo_yeltsin.png";

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img src={logo2x2} alt="2x2" />
                <span className="logo__lastname">
                    <img src={logoyeltsin} alt="Ельцин Центр" />
                </span>
            </div>
        );
    }
}

export default Logo;
