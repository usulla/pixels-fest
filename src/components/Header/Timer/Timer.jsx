import React from "react";
import style from "./timer.scss";

const Timer = ({ title, days, hours, minutes, seconds }) => {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date("August 23, 2019 23:00:00").getTime(),
        x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;
            document.getElementById("days").innerText = Math.floor(
                distance / day
            ) < 10 ? `0${Math.floor(distance / day)}` : Math.floor(distance / day);
            document.getElementById("hours").innerText = Math.floor(
                (distance % day) / hour) < 10 ? `0${Math.floor(
                (distance % day) / hour)}` : Math.floor(
                    (distance % day) / hour);
            document.getElementById("minutes").innerText = Math.floor(
                (distance % hour) / minute) < 10 ? `0${Math.floor(
                    (distance % hour) / minute)}`:Math.floor(
                        (distance % hour) / minute);
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second) < 10 ? `0${Math.floor(
                    (distance % minute) / second)}`: Math.floor(
                        (distance % minute) / second);
            //do something later when date is reached
            //if (distance < 0) {
            //  clearInterval(x);
            //}
        }, second);

    return (
            <div className="header__timer">
                <span className="header__timer__title">{title}</span>
                <div
                    className="header__timer__content timer__content"
                    data-timer=""
                >
                    <ul>
                        <li class="num">
                            <span id="days" />
                            {days}
                        </li>
                        <li class="num">
                            <span id="hours" />
                            {hours}
                        </li>
                        <li class="num">
                            <span id="minutes" />
                            {minutes}
                        </li>
                        <li class="num">
                            <span id="seconds" />
                            {seconds}
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default Timer;
