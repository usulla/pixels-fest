import React from "react";
import style from "./jury.scss";
import member1_photo from "../../images/member1.png";
import member2_photo from "../../images/member2.png";
import member3_photo from "../../images/member3.png";
import member4_photo from "../../images/member4.png";
import member5_photo from "../../images/member5.png";
import background from "../../images/gradient-green.png";
import { useTranslation, initReactI18next } from "react-i18next";

const Jury = ({ members, isMobile, order }) => {
    const { t, i18n } = useTranslation();
    var gradientBlockStyle = {
        backgroundImage: `url(${background})`
    };
    return (
        <div className="jury-page page fix" id="jury" data-order={order}>
            <div className="mobile-title-page">{i18n.t("dataJury.title")}</div>
            <div className="jury-page__content page__content">
                <div className="jury-page__members">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className={`jury-page__col jury-page__col${index +
                                1}`}
                        >
                            <div className="member-round">
                                <div className="hidden-img">
                                    <img
                                        className="member-img"
                                        src={member.img}
                                        alt={i18n.t(
                                            `dataJury.members.${index}.name`
                                        )}
                                    />

                                    <div className="member-hover">
                                        <div className="member-description">
                                            {i18n.t(
                                                `dataJury.members.${index}.description`
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="member-title">
                                <div className="member-name">
                                    {i18n.t(`dataJury.members.${index}.name`)}
                                </div>
                                <div
                                    className="member-profession"
                                    dangerouslySetInnerHTML={{
                                        __html: i18n.t(
                                            `dataJury.members.${index}.profession`
                                        )
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="gradient-top" />
                <div className="gradient-bottom" style={gradientBlockStyle} />
            </div>
        </div>
    );
};
export default Jury;
