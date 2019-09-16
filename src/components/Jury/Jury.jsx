import React from "react";
import style from "./jury.scss";
import background from "../../images/gradient-green.png";
import { useTranslation, initReactI18next } from "react-i18next";

const Jury = ({ members, isMobile, order }) => {
    var memberSlideInt;
    function goSlideMember () {
        memberSlideInt = setInterval(toggleClassActive, 4000);
    }
    goSlideMember ();
    function handleClick(e){
        clearInterval(memberSlideInt);
        document.querySelectorAll('.juryslide').forEach( item => {
            item.classList.toggle('active');
        })
    }
    function toggleClassActive(){
        document.querySelectorAll('.juryslide').forEach( item => {
            item.classList.toggle('active');
        })        
    }
    setTimeout(()=>{
    document.querySelector('.juryslide.active').querySelector('.member-round').addEventListener('mouseenter', () =>{
       
        clearInterval(memberSlideInt);
    });
    document.querySelector('.juryslide.active').querySelector('.member-round').addEventListener('mouseleave', () =>{
       
        goSlideMember();
    })}, 0);

    const { t, i18n } = useTranslation();
    var gradientBlockStyle = {
        backgroundImage: `url(${background})`
    };
        const membersWithoutSlide = members.filter((member, index) => {
            return !member.slide;
        })
        const membersWithSlide = members.filter((member, index) => {
            return member.slide;
        })

        const membersBlock = membersWithoutSlide.map((member, index) => {
                    return(
                      <div
                          key={index}
                          className={`jury-page__col jury-page__col${index +
                              1}`}>
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
         )})
        const membersBlock2 = membersWithSlide.map((member, index) => {
                    return(
                      <div
                          key={index}
                          className={index == 0 ? `active juryslide juryslide-page__col${index+6}` : `juryslide juryslide-page__col${index+6}`}>
                          <div className="member-round">
                              <div className="hidden-img">
                                  <img
                                      className="member-img"
                                      src={member.img}
                                      alt={i18n.t(
                                          `dataJury.members.${index+5}.name`
                                      )}
                                  />

                                  <div className="member-hover">
                                      <div className="member-description">
                                          {i18n.t(
                                              `dataJury.members.${index+5}.description`
                                          )}
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="member-title">
                              <div className="member-name">
                                  {i18n.t(`dataJury.members.${index+5}.name`)}
                              </div>
                              <div
                                  className="member-profession"
                                  dangerouslySetInnerHTML={{
                                      __html: i18n.t(
                                          `dataJury.members.${index+5}.profession`
                                      )
                                  }}
                              ></div>
                          </div>
                              <nav className='nav-carousel'>
                                  <div className="nav-arrow arrow-left" onClick={() => handleClick()}><i className="fas fa-caret-left"></i></div>
                                  <div className="nav-arrow arrow-right" onClick={() => handleClick()}><i className="fas fa-caret-right"></i></div>
                              </nav>
                      </div>
         )})
    return (
        <div className="jury-page page fix" id="jury" data-order={order}>
            <div className="mobile-title-page">{i18n.t("dataJury.title")}</div>
            <div className="jury-page__content page__content">
                <div className="jury-page__members">
                  {membersBlock}
                <div className="members-carousel jury-page__col">
                      {membersBlock2}
                </div>
                </div>
                <div className="gradient-top" />
                <div className="gradient-bottom" style={gradientBlockStyle} />
            </div>
        </div>
    );
};
export default Jury;
