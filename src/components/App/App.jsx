import React, { Component } from "react";
import Header from "../Header/Header.jsx";
import * as utils from "./app.js";
import Nav from "../Nav/Nav.jsx";
import ToggleMenu from "../ToggleMenu/ToggleMenu.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import LeftSidebar from "../LeftSidebar/LeftSidebar.jsx";
import appData from "./appData.json";
import Program from "../Program/Program.jsx";
import Partners from "../Partners/Partners.jsx";
import Jury from "../Jury/Jury.jsx";
import Apply from "../Apply/Apply.jsx";
import About from "../About/About.jsx";
import Competition from "../Competition/Competition.jsx";
import Footer from "../Footer/Footer.jsx";
import { withTranslation } from "react-i18next";
class App extends Component {
    constructor() {
        super();
        this.state = {
            isMobile: false,
            viewPageHeader: true
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        if (
            !this.state.isMobile &&
            document.querySelector(".page.header").classList.contains("active")
        ) {
            var headerPageHeight = document
                .querySelector("#header")
                .getBoundingClientRect().height;
            document.querySelector(
                ".pages"
            ).style.height = `${headerPageHeight + 50}px`;
        }
    }
    componentWillMount() {
        this.resize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }
    resize() {
        this.setState({ isMobile: window.innerWidth <= 767 });
    }

    render() {
        const { t } = this.props;
        if (this.state.isMobile) {
            // toggle show mobile title
            utils.showMobileTitle();
        }
        const {
            dataHeader,
            dataProgram,
            dataJury,
            dataApply,
            dataAbout,
            dataCompetition
        } = appData;
        return (
            <div className="home" id="headerpage">
                {!this.state.isMobile ? (
                    <React.Fragment>
                        <LeftSidebar />
                        <Nav
                            list={dataHeader.navtitle}
                            src={dataHeader.navsrc}
                            isMobile={this.state.isMobile}
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <ToggleMenu />
                        <MobileMenu list={dataHeader.navtitle} />
                    </React.Fragment>
                )}
                <div className="pages">
                    <Header
                        {...dataHeader}
                        order={1}
                        isMobile={this.state.isMobile}
                    />
                    <About
                        title2={dataAbout.title2}
                        order={2}
                        isMobile={this.state.isMobile}
                    />
                    <Program
                        {...dataProgram}
                        order={3}
                        isMobile={this.state.isMobile}
                    />
                    <Competition
                        categories={dataCompetition.categories}
                        trlist={dataCompetition.tr}
                        conditions={dataCompetition.conditions}
                        criteria={dataCompetition.criteria}
                        winners={dataCompetition.winners}
                        order={4}
                        isMobile={this.state.isMobile}
                    />
                    <Jury
                        {...dataJury}
                        order={5}
                        isMobile={this.state.isMobile}
                    />
                    <Partners order={6} />
                    <Apply
                        {...dataApply}
                        order={7}
                        isMobile={this.state.isMobile}
                    />
                    <Footer isMobile={this.state.isMobile} />
                </div>
            </div>
        );
    }
}
export default withTranslation()(App);
