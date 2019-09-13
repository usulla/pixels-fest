export function detectBrowserType() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return ('Opera');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return ('Chrome');
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        if(navigator.userAgent.match(/iPad/i) != null){
            return ('iPad');
        }
        return ('Safari');  
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        var indexNumStart = navigator.userAgent.indexOf('rv:');
        var version = navigator.userAgent.slice(indexNumStart + 3, indexNumStart + 5);
        return ['Firefox', Number(version)];
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        return ('IE');
    }
    else {
        return ('unknown');
    }
}
export function showMobileTitle() {
    document.addEventListener('DOMContentLoaded', () => {
        detectViewMobTitle();
    });
    var toggleTitleMark = 0;
    let togglePageMark = 0;
    window.addEventListener("scroll", function () {
        detectViewMobTitle();
    });
    if (document.querySelector('.mobile-menu-inner')) {
        document.querySelector('.mobile-menu-inner').querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                detectViewMobTitle();
            })
        })
    }
    function detectViewMobTitle() {
        const headerPage = document.querySelector("#header"),
            aboutPage = document.querySelector("#about-festival"),
            programPage = document.querySelector("#program"),
            competitionPage = document.querySelector("#competition"),
            juryPage = document.querySelector("#jury"),
            partnersPage = document.querySelector("#partners"),
            applyPage = document.querySelector("#apply");
        var headerPageBottom = headerPage.getBoundingClientRect()
            .bottom;
        var aboutPageTop = aboutPage.getBoundingClientRect().top;
        var programPageTop = programPage.getBoundingClientRect().top;
        var competitionPageTop = competitionPage.getBoundingClientRect().top;
        var juryPageTop = juryPage.getBoundingClientRect().top;
        var partnersPageTop = partnersPage.getBoundingClientRect().top;
        var applyPageTop = applyPage.getBoundingClientRect().top;

        // Toggle mobileTitle show

        if (headerPageBottom < 5) {
            // About
            if (aboutPageTop < 5 && programPageTop > 5) {
                if (
                    !aboutPage.querySelector(".mobile-title-page.show")
                ) {
                    aboutPage
                        .querySelector(".mobile-title-page")
                        .classList.add("show");
                }
            } else {
                if (
                    aboutPage.querySelector(".mobile-title-page.show")
                ) {
                    aboutPage
                        .querySelector(".mobile-title-page.show")
                        .classList.remove("show");
                }
            }
            // Program
            if (programPageTop < 5 && competitionPageTop > 5) {
                if (
                    !programPage.querySelector(".mobile-title-page.show")
                ) {
                    programPage
                        .querySelector(".mobile-title-page")
                        .classList.add("show");
                }
            } else {
                if (
                    programPage.querySelector(".mobile-title-page.show")
                ) {
                    programPage
                        .querySelector(".mobile-title-page.show")
                        .classList.remove("show");
                }
            }
            // Competition
            if (competitionPageTop < 5 && juryPageTop > 5) {
                if (
                    !competitionPage.querySelector(".mobile-title-page.show")
                ) {
                    competitionPage.querySelector(".mobile-title-page").classList.add("show");
                }
            } else {
                if (
                    competitionPage.querySelector(".mobile-title-page.show")
                ) {
                    competitionPage
                        .querySelector(".mobile-title-page.show")
                        .classList.remove("show");
                }
            }
            // Jury
            if (juryPageTop < 5 && partnersPageTop > 5) {
                if (
                    !juryPage.querySelector(".mobile-title-page.show")
                ) {
                    juryPage
                        .querySelector(".mobile-title-page")
                        .classList.add("show");
                }
            } else {
                if (
                    juryPage.querySelector(".mobile-title-page.show")
                ) {
                    juryPage
                        .querySelector(".mobile-title-page.show")
                        .classList.remove("show");
                }
            }
            // Partners
            if (partnersPageTop < 5 && applyPageTop > 5) {
                if (
                    !partnersPage.querySelector(".mobile-title-page.show")
                ) {
                    partnersPage
                        .querySelector(".mobile-title-page")
                        .classList.add("show");
                }
            } else {
                if (
                    partnersPage.querySelector(".mobile-title-page.show")
                ) {
                    partnersPage
                        .querySelector(".mobile-title-page.show")
                        .classList.remove("show");
                }
            }
            // Apply
            if (applyPageTop < 5) {
                if (
                    !applyPage.querySelector(".mobile-title-page.show")
                ) {
                    applyPage
                        .querySelector(".mobile-title-page")
                        .classList.add("show");
                }
            } else {
                if (
                    applyPage.querySelector(".mobile-title-page.show")
                ) {
                    applyPage
                        .querySelector(".mobile-title-page.show")
                        .classList.remove("show");
                }
            }
        } else if (headerPageBottom > 0) {
            toggleTitleMark = 0;
            document
                .querySelectorAll(".mobile-title-page")
                .forEach(page => {
                    page.classList.remove("show");
                });
        }
    }
}