import React from "react";
import "./nav.scss";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Nav = ({ list, isMobile }) => {
    const { t, i18n } = useTranslation();
    function liClick(e) {
        e.preventDefault();
        const activeLi = e.currentTarget;
        if (!activeLi.classList.contains("active")) {
            const idActiveEl = activeLi
                .querySelector("a")
                .getAttribute("href")
                .slice(1);
            function slideLi(className1, className2) {
                if (activeLi.classList.contains(className1)) {
                    activeLi.classList.remove(className1);
                }
                if (document.querySelector(".menu-ul__li.active")) {
                    document
                        .querySelector(".menu-ul__li.active")
                        .classList.toggle("active");
                }
                activeLi.classList.add("active");
                activeLi.classList.add(className2);

                document.querySelectorAll(".menu-ul__li").forEach(li => {
                    if (
                        className1 == "li-slide-right"
                            ? li.dataset.index < indexActiveLi
                            : li.dataset.index > indexActiveLi
                    ) {
                        li.classList.add(className2);
                        if (li.classList.contains(className1)) {
                            li.classList.remove(className1);
                        }
                    }
                });
            }
            const indexActiveLi = activeLi.dataset.index;
            if (!isMobile) {
                // activeLi.addEventListener("transitionend", function(e) {
                //     if (e.propertyName == "transform") {
                //         activeLi.classList.toggle("active");
                //     }
                // });
                var pageHeight;
                document.querySelectorAll(".page").forEach(page => {
                    if (page.id === idActiveEl) {
                        if (!document.querySelector(".page.active")) {
                            page.classList.add("active");
                            pageHeight = page.getBoundingClientRect().height;
                            document.querySelector(
                                ".pages"
                            ).style.height = `${pageHeight + 207}px`;
                            window.addEventListener("resize", () => {
                                pageDetHeight(page);
                            });
                        } else {
                            if (document.querySelector(".page.active2")) {
                                document
                                    .querySelector(".page.active")
                                    .classList.remove("active");
                                document
                                    .querySelector(".page.active2")
                                    .classList.add("active");
                                document
                                    .querySelector(".page.active2")
                                    .classList.remove("active2");
                                page.classList.add("active2");
                                window.addEventListener("resize", () => {
                                    pageDetHeight(page);
                                });
                            } else {
                                page.classList.add("active2");
                                window.addEventListener("resize", () => {
                                    pageDetHeight(page);
                                });
                            }
                            pageHeight = page.getBoundingClientRect().height;
                            document.querySelector(
                                ".pages"
                            ).style.height = `${pageHeight + 207}px`;
                        }

                        setTimeout(function() {
                            if (!isMobile) {
                                if (
                                    !activeLi.classList.contains(
                                        "li-slide-left"
                                    )
                                ) {
                                    slideLi("li-slide-right", "li-slide-left");
                                } else {
                                    slideLi("li-slide-left", "li-slide-right");
                                }
                            }
                            page.classList.add("animate");
                            document.querySelector(
                                ".home"
                            ).id = `${idActiveEl}page`;
                        }, 0);
                    }
                    if (idActiveEl === "jury") {
                        setTimeout(function() {
                            document.querySelector(
                                ".jury-page"
                            ).style.transform = "none";
                        }, 0);
                        setTimeout(function() {
                            if (
                                document
                                    .querySelector(".jury-page")
                                    .classList.contains("fix")
                            ) {
                                document
                                    .querySelector(".jury-page")
                                    .classList.remove("fix");
                            }
                            if (document.querySelector("#jurypage")) {
                                document
                                    .querySelector("#jurypage")
                                    .querySelector(".footer").style.display =
                                    "flex";
                            }
                        }, 1400);
                    }
                });
                setTimeout(function() {
                    if (document.querySelector(".footer")) {
                        leftSidebarSlideUp();
                        window.addEventListener("scroll", function() {
                            leftSidebarSlideUp();
                        });
                    }
                }, 0);
                function leftSidebarSlideUp() {
                    var footerDetect = isScrolledIntoView(
                        document.querySelector(".footer")
                    );
                    var footerDetectView = footerDetect[0];
                    var footerDetectCoord = footerDetect[1];
                    //footerDetectCoord !== 0 Fix for Jury page
                    if (footerDetectView && footerDetectCoord !== 0) {
                        console.log(footerDetectCoord, "k");
                        document.querySelector(
                            ".left-sidebar-ul"
                        ).style.height = `calc(100% - ${window.innerHeight -
                            footerDetectCoord}px)`;
                    }
                }
                function isScrolledIntoView(el) {
                    var rect = el.getBoundingClientRect();
                    var elemTop = rect.top;
                    var elemBottom = rect.bottom;
                    var isVisible = elemTop < window.innerHeight;
                    return [isVisible, elemTop];
                }
            }
            function pageDetHeight(page) {
                pageHeight = page.getBoundingClientRect().height;
                console.log(pageHeight, "pageHeight2");
                document.querySelector(".pages").style.height = `${pageHeight +
                    207}px`;
            }
        }
    }
    return (
        <nav className="menu">
            <ul className="menu-ul menu__menu-ul">
                {list.map((li, index) => (
                    <li
                        key={index}
                        data-index={index + 1}
                        className={`menu-ul__li menu-ul__li-${li.src}`}
                        onClick={liClick}
                    >
                        <span />
                        <a href={`#${li.src}`}>
                            {i18n.t(`dataHeader.navtitle.${index}.title`)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
