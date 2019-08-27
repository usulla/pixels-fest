import React, { Component } from "react";
import style from "./gradientupblock.scss";
import { withTranslation } from "react-i18next";
class GradientUpBlock extends Component {
    constructor() {
        super();
        this.state = {
            showGradientText: false
        };
    }
    showGradientText = e => {
        const self = e.currentTarget;
        document
            .querySelector(".gradient-up-block__content")
            .classList.add("active");
        this.setState({ showGradientText: true });
        document.querySelector(".pages").classList.add("fixheader");
        setTimeout(function() {
            document.querySelector(".fulltext").classList.add("show");
        }, 500);
        setTimeout(function() {
            document.querySelector(".fulltext").classList.add("animate");
            headerCalcHeight();
        }, 600);
        function headerCalcHeight() {
            var headerPageHeight = document
                .querySelector("#header")
                .getBoundingClientRect().height;
            document.querySelector(".pages").style.height = `${headerPageHeight}px`;
        }
    };
    render() {
        const { t } = this.props;
        return (
            <div className="gradient-up-block">
                <span className="theme-title">
                    {t("dataHeader.theme.title")}
                    <div className="gradient-up-block__content">
                        <div
                            className="theme-gradientblock"
                            onClick={this.showGradientText}
                        />
                        <span className="fulltext">
                            {this.state.showGradientText
                                ? t("dataHeader.theme.description")
                                : null}
                        </span>
                    </div>
                </span>
            </div>
        );
    }
}

export default withTranslation()(GradientUpBlock);
