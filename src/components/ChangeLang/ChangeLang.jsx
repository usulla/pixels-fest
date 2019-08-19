import React from "react";
import "./changelang.scss";
import { useTranslation, initReactI18next } from "react-i18next";
const ChangeLang = () => {
    const { t, i18n } = useTranslation();
    function changeLanguageRu(e) {
        i18n.changeLanguage('ru');
        if(document.querySelector('.button-en')){
            document.querySelector('.button-en').classList.remove('active');
        }
        e.currentTarget.classList.add('active');
    }
    function changeLanguageEn(e) {
        i18n.changeLanguage('en');
        if(document.querySelector('.button-ru')){
            document.querySelector('.button-ru').classList.remove('active');
        }
        e.currentTarget.classList.add('active');
    }
    return (
        <div className="switch-language">
            <span className="switch-language--button button-ru active" onClick={changeLanguageRu}>Рус</span> / 
            <span className="switch-language--button button-en" onClick={changeLanguageEn}>Eng</span>
        </div>
    );
};

export default ChangeLang;
