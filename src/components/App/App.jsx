import React, { Component } from "react";
import Header from "../Header/Header.jsx";
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
        const {
            dataHeader,
            dataProgram,
            dataPartners,
            dataFooter,
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
                    <Header {...dataHeader} order={1} isMobile={this.state.isMobile} /> 
                    <About 
                        title2={dataAbout.title2}
                        order={2}
                        isMobile={this.state.isMobile}
                    />
                    <Competition
                        categories={dataCompetition.categories}
                        trlist={dataCompetition.tr}
                        conditions={dataCompetition.conditions}
                        criteria={dataCompetition.criteria}
                        winners={dataCompetition.winners}
                        order={3}
                        isMobile={this.state.isMobile}
                    />
                    <Program
                        {...dataProgram}
                        order={2}
                        isMobile={this.state.isMobile}
                    />
                    <Jury
                        {...dataJury}
                        order={3}
                        isMobile={this.state.isMobile}
                        datafooter={dataFooter}
                    />
                    <Partners {...dataPartners} order={4} />
                    <Apply
                        {...dataApply}
                        order={5}
                        isMobile={this.state.isMobile}
                    />
                    <Footer {...dataFooter} isMobile={this.state.isMobile} />
                </div>
            </div>
        );
    }
}
export default App;
