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
            dataJury
        } = appData;
        return (
            <div className="home">
                {!this.state.isMobile ? (
                    <React.Fragment>
                        <LeftSidebar />
                        <Nav
                            list={dataHeader.navtitle}
                            src={dataHeader.navsrc}
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <ToggleMenu />
                        <MobileMenu list={dataHeader.navtitle} />
                    </React.Fragment>
                )}
                <div className="pages">
                    {/* <Header {...dataHeader} order={1} isMobile={this.state.isMobile} /> */}
                    {/* <Program {...dataProgram} order={2}  isMobile={this.state.isMobile} />
                    <Partners {...dataPartners} order={3} />  */}
                    <Jury {...dataJury} order={4} isMobile={this.state.isMobile} datafooter={dataFooter}/>
                    <Footer {...dataFooter} isMobile={this.state.isMobile} /> 
                </div>
                
            </div>
        );
    }
}
export default App;
