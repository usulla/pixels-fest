import React from "react";
import style from "./jury.scss";
import member1_photo from "../../images/member1.png";
import member2_photo from "../../images/member2.png";
import member3_photo from "../../images/member1.png";
import member4_photo from "../../images/member2.png";
import background from "../../images/gradient-green.png";
import Footer from "../Footer/Footer.jsx";

const Jury = ({ title, members, datafooter, isMobile }) => {
    console.log(datafooter);
    var gradientBlockStyle = {
        backgroundImage: `url(${background})`
    };
    return (
        <div className="jury-page page" id="jury">
            <div className="fixedcontainer">
                <div className="mobile-title-page">{title}</div>
                <div className="jury-page__content page__content">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className={`jury-page__col jury-page__col${index +
                                1}`}
                        >
                            <div className="member-round">
                                <img
                                    className="member-img"
                                    src={member.img}
                                    alt={member.title}
                                />
                                <div className="member-hover">
                                    <div className="member-description">
                                        {member.description}
                                    </div>
                                </div>
                            </div>
                            <div className="member-title">
                                <div className="member-name">{member.name}</div>
                                <div className="member-profession">
                                    {member.profession}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="gradient-top" />
                    <div
                        className="gradient-bottom"
                        style={gradientBlockStyle}
                    />
                
                </div>
            </div>
   
        </div>
    );
};
export default Jury;
