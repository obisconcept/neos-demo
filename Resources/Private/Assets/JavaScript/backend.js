var backendSiteHalfCss = '';
var backendSiteFullCss = '';
var backendSiteCss = '';

$(document).ready(function () {

    backendSiteHalfCss = $('#site-main-css').attr('href').replace('main', 'main-backend-half');
    backendSiteFullCss = $('#site-main-css').attr('href').replace('main', 'main-backend-full');
    backendSiteCss = $('#site-main-css').attr('href');

    $('body').on('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function(event) {

        if (event.target.localName == 'body') {

            changeSite();

        }

    });

});

if (typeof document.addEventListener === 'function') {
    document.addEventListener('Neos.PageLoaded', function(event) {



    }, false);
}

var changeSite = function() {

    var left = $('body').css('marginLeft').replace('px', '');
    var right = $('body').css('marginRight').replace('px', '');

    if (left > 0 && right == 0) {

        $('#site-main-css').attr('href', backendSiteHalfCss);

        smBreakpoint = 1089;
        mdBreakpoint = 1313;
        lgBreakPoint = 1521;

    } else if (right > 0 && left == 0) {

        $('#site-main-css').attr('href', backendSiteHalfCss);

        smBreakpoint = 1089;
        mdBreakpoint = 1313;
        lgBreakPoint = 1521;

    } else if (left > 0 && right > 0) {

        $('#site-main-css').attr('href', backendSiteFullCss);

        smBreakpoint = 1410;
        mdBreakpoint = 1634;
        lgBreakPoint = 1842;

    } else if (right == 0 && left == 0) {

        $('#site-main-css').attr('href', backendSiteCss);

        smBreakpoint = 768;
        mdBreakpoint = 992;
        lgBreakPoint = 1200;

    }

}