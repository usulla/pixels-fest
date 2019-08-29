import React, { Component, Fragment } from "react";
import style from "./gradientupblock.scss";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Timer from "../Timer/Timer.jsx";
import Fab from "@material-ui/core/Fab";
import Close from "@material-ui/icons/Close";

const styles = {
    fab: {
        width: "35px",
        height: "35px",
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "1px solid #fff",
        color: "#fff",
        position: "absolute",
        right: "calc(5% + 10px)",
        top: "calc(2% + 10px)",
        backgroundColor: "transparent",
        "&$hover": {
            backgroundColor: "transparent"
        }
    },

    close: {
        fontSize: "1.5rem"
    }
};
class GradientUpBlock extends Component {
    constructor() {
        super();
        this.state = {
            showGradientText: false,
            showPopup: false
        };
    }
    showPopup = e => {
        this.setState({ showPopup: true });
        document.querySelector('.toggle-menu').style.display = 'none';
        document.body.style.overflow = 'hidden';
    };
    hidePopup = e => {
        this.setState({ showPopup: false });
        document.querySelector('.toggle-menu').style.display = '';
        document.body.style.overflow = '';
    };
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
            document.querySelector(
                ".pages"
            ).style.height = `${headerPageHeight}px`;
        }
    };
    render() {
        const { t } = this.props;
        const { classes } = this.props;
        return (
            <div className="gradient-up-block">
                <span className="theme-title">
                    {t("dataHeader.theme.title")}
                    {!this.props.isMobile ? (
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
                    ) : (
                        <div className="gradient-up-block__content">
                            <div
                                className="theme-gradientblock"
                                onClick={this.showPopup}
                            />
                        </div>
                    )}
                    {this.props.isMobile && this.state.showPopup ? (
                        <Fragment>
                            <div className="gradient-mobpopup">
                                <div className="gradient-mobpopup--inner">
                                    <Fab
                                        size="small"
                                        component="span"
                                        className={classes.fab}
                                        onClick={this.hidePopup}
                                    >
                                        <Close className={classes.close} />
                                    </Fab>
                                    <div className="gradient-mobpopup--text">
                                        {t("dataHeader.theme.description")}
                                    </div>
                                    <Timer />
                                </div>
                            </div>
                            <div className="gradient-mobpopup-bg"></div>
                        </Fragment>
                    ) : null}
                </span>
            </div>
        );
    }
}

export default withStyles(styles)(withTranslation()(GradientUpBlock));
