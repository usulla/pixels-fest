import React from "react";
import style from "./footer.scss";
import Logo2x2 from "../Logo2x2/Logo2x2.jsx";
import logo from "../../images/logo.png";
import logo2x2 from "../../images/logo2x2.png";
import logo_yeltsin from "../../images/logo_yeltsin.png";

const Footer = ({
    apply,
    contest_rules,
    title_logo2x2,
    address_title,
    address_city,
    address_street,
    license,
    isMobile
}) => {
    if (!isMobile) {
        return (
            <div className="footer">
                <div className="footer__content">
                    <div className="col1">
                        <img
                            className="footer__logo"
                            src={logo}
                            alt="Pixel Fest"
                        />
                        <div className="soc-icons">
                            <a href="" target="_blank"><i className="fab fa-vk" /></a>
                            <a href="" target="_blank"><i className="fab fa-facebook-square" /></a>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="row--up">
                            <div className="col2__item col2__1">
                                <Logo2x2 title={title_logo2x2} />
                            </div>
                            <div className="col2__item col2__2">
                                <a className="apply" href="#">
                                    {apply}
                                </a>

                                <a className="rules" href="#">
                                    {contest_rules}
                                </a>
                            </div>
                            <div className="col2__item col2__3">
                                {address_title}
                                <br />
                                {address_city}
                                <br />
                                {address_street}
                                <br />
                            </div>
                        </div>
                        <div className="row--bottom">
                            <div className="license">{license}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="col1">
                    <img className="footer__logo" src={logo} alt="Pixel Fest" />
                    <div className="soc-icons">
                        <a href="" target="_blank"><i className="fab fa-vk" /></a>
                        <a href="" target="_blank"><i className="fab fa-facebook-square" /></a>
                    </div>
                </div>
                <div className="col2">
                    <div className="row--bottom">
                        <div className="license">{license}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
