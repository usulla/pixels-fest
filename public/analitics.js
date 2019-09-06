// google analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-4003824-1', '2x2tv.ru');
ga('require', 'displayfeatures');
ga('send', 'pageview');

// Yandex.Metrika counter
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(5137078, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    trackHash: true
});

//tns-counter.ru 
(function (win, doc, cb) {
    (win[cb] = win[cb] || []).push(function () {
        try {
            tnsCounter2x2tv_ru = new TNS.TnsCounter({
                'account': '2x2tv_ru',
                'tmsec': '2x2tv_total'
            });
        } catch (e) { }
    });

    var tnsscript = doc.createElement('script');
    tnsscript.type = 'text/javascript';
    tnsscript.async = true;
    tnsscript.src = ('https:' == doc.location.protocol ? 'https:' : 'http:') +
        '//www.tns-counter.ru/tcounter.js';
    var s = doc.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(tnsscript, s);
})(window, this.document, 'tnscounter_callback');

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.send-form').addEventListener('click', function () {
        ga('send', 'event', 'PixelsFest', 'click', 'Подать заявку');
    })
})