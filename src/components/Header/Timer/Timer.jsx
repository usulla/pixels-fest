import React from "react";
import style from "./timer.scss";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Timer = ({ title, days, hours, minutes, seconds }) => {
    const { t, i18n } = useTranslation();
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date("September 05, 2019 23:59:00").getTime(),
        x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;
            document.querySelectorAll(".days").forEach(item => {
                item.innerText =
                    Math.floor(distance / day) < 10
                        ? `0${Math.floor(distance / day)}`
                        : Math.floor(distance / day);
            });
            document.querySelectorAll(".hours").forEach(item => {
                item.innerText =
                    Math.floor((distance % day) / hour) < 10
                        ? `0${Math.floor((distance % day) / hour)}`
                        : Math.floor((distance % day) / hour);
            });
            document.querySelectorAll(".minutes").forEach(item => {
                item.innerText =
                    Math.floor((distance % hour) / minute) < 10
                        ? `0${Math.floor((distance % hour) / minute)}`
                        : Math.floor((distance % hour) / minute);
            });
            document.querySelectorAll(".seconds").forEach(item => {
                item.innerText =
                    Math.floor((distance % minute) / second) < 10
                        ? `0${Math.floor((distance % minute) / second)}`
                        : Math.floor((distance % minute) / second);
                //do something later when date is reached
                //if (distance < 0) {
                //  clearInterval(x);
                //}
            });
        }, second);

    return (
        <div className="header__timer">
            <span className="header__timer__title">
                {i18n.t("dataHeader.timer.title")}
            </span>
            <div
                className="header__timer__content timer__content"
                data-timer=""
            >
                <ul>
                    <li className="num">
                        <span className="days" />
                        <span className="text">
                            {i18n.t("dataHeader.timer.days")}
                        </span>
                    </li>
                    <li className="num">
                        <span className="hours" />
                        <div className="text">
                            {i18n.t("dataHeader.timer.hours")}
                        </div>
                    </li>
                    <li className="num">
                        <span className="minutes" />
                        <span className="text">
                            {i18n.t("dataHeader.timer.minutes")}
                        </span>
                    </li>
                    <li className="num">
                        <span className="seconds" />
                        <span className="text">
                            {i18n.t("dataHeader.timer.seconds")}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timer;
