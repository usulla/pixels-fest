function debounce(func, wait = 60, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
document.addEventListener('DOMContentLoaded', () => {

    window.scrollMetka = 0;
    if (window.innerWidth >= 768) {
        document.addEventListener('scroll', debounce(animationScroll));
    }
    window.startScroll = 0;
});
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        document.addEventListener('scroll', debounce(animationScroll));
    }
    else{
        document.removeEventListener('scroll', debounce(animationScroll));
    }
});

function animationScroll(e) {
    const pageList = document.querySelectorAll('#root > div > header, #root > div > article');
    var pageCoord = [].map.call(pageList, function(page) {
        return page.getBoundingClientRect().top + document.documentElement.scrollTop || document.body.scrollTop;
    });
    if (window.scrollMetka === 0 && window.metkaScrolling === 0) {
        e.preventDefault();

        var nowPageIndex = selectContainer();
        var direction = scrollDirection();
        scrollingPage(direction, nowPageIndex);

        function selectContainer() {
            var nowScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const delta = 20;
            let index;
            var coordsPageTop = coordsTop();
            for (let i = 0; i <= coordsPageTop.length - 1; i++) {
                if (i !== coordsPageTop.length - 1) {
                    if (nowScrollTop + delta >= pageCoord[i] && nowScrollTop + delta < pageCoord[(i + 1)]) {
                        index = i;
                        return index;
                    } else {
                        index = i - 1;
                    }
                } else {
                    index = coordsPageTop.length - 1;
                    return index;
                }
            }
        }

        function coordsTop() {
            var coordsPageTop = [].map.call(pageList, function(page) {
                return page.getBoundingClientRect().top;
            });
            return coordsPageTop;
        }

        function scrollDirection() {
            var lastScroll = document.documentElement.scrollTop || document.body.scrollTop;
            var direction;
            if (lastScroll > window.startScroll) {
                direction = 1; // down
            } else {
                direction = -1; // up
            }
            return direction;
        }

        function scrollingPage(direction, currentPage) {
            const requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;
            window.requestAnimationFrame = requestAnimationFrame;

            var duration = 2000,
                start = performance.now();

            requestAnimationFrame(function animate(time) {
                var coordsPageTop = coordsTop();

                var indexNextPage;
                if (direction === 1) {
                    indexNextPage = currentPage + 1;
                } else if (direction === -1 && indexNextPage !== 0) {
                    indexNextPage = currentPage - 1;
                } else {
                    return;
                }

                pageList.forEach((page) => {
                    if (Array.from(pageList).indexOf(page) === indexNextPage) {
                        const pageCoords = page.getBoundingClientRect().top + window.scrollY;
                        const toScroll2 = Math.ceil(page.getBoundingClientRect().top);
                        var toScroll = pageCoords;

                        if (timePassed > duration) timePassed = duration;
                        // window.scroll({ top: pageCoords, left: 0, behavior: 'smooth' });
                        var timePassed = time - start;
                        var result = Math.ceil(toScroll2 * timePassed / duration);
                        console.log(toScroll2, 'toScroll333');

                        result = (result > direction * toScroll2) ? toScroll2 : (result == 0) ? direction : result;

                        if (toScroll2 * direction > 0 && toScroll2 * direction !== 1) {
                            window.scrollBy(0, result);
                            e.preventDefault;
                            e.stopPropagation;
                            var addActivePage = (function() {
                                if (currentPage === 3) {
                                    indexNextPage = 2; //?????
                                }
                                pageList.forEach(page => page.classList.remove('active'));
                                console.log(indexNextPage, 'indexNextPage11');
                                console.log(Array.from(pageList)[indexNextPage]);
                                Array.from(pageList)[indexNextPage].classList.add('active');
                            }());
                            document.body.style.overflowY = 'hidden';
                            window.scrollMetka = 1;
                            if (timePassed < duration) {
                                requestAnimationFrame(animate);
                            }
                        } else {
                            setTimeout(activeteScroll, 1500);
                        }

                        function activeteScroll() {
                            document.body.style.overflowY = '';
                            window.scrollMetka = 0;
                            window.startScroll = document.documentElement.scrollTop || document.body.scrollTop;
                        }
                    }
                });
            });
        }
    }
}