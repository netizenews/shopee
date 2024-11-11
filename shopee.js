var puShown = false;
var PopWidth = 1370;
var PopHeight = 800;
var PopFocus = 0;
var _Top = null;

function setCookie(name, value, time) {
    var expires = new Date();
    expires.setTime(expires.getTime() + time);
    document.cookie = name + '=' + value + '; path=/;' + '; expires=' + expires.toGMTString();
}

function getCookie(name) {
    var cookies = document.cookie.toString().split('; ');
    var cookie, c_name, c_value;

    for (var n = 0; n < cookies.length; n++) {
        cookie = cookies[n].split('=');
        c_name = cookie[0];
        c_value = cookie[1];

        if (c_name == name) {
            return c_value;
        }
    }

    return null;
}

function redirectToURL(url) {
    if (!puShown) {
        puShown = true;
        window.location.href = url; // Redirect to the specified URL
    }
}

function initPu() {
    _Top = self;
    if (top != self) {
        try {
            if (top.document.location.toString()) _Top = top;
        } catch (err) {}
    }

    if (document.attachEvent) {
        document.attachEvent('onclick', checkTarget);
    } else if (document.addEventListener) {
        document.addEventListener('click', checkTarget, false);
    }
}

function checkTarget(e) {
    if (!getCookie('popundr')) {
        var e = e || window.event;
        redirectToURL('https://s.shopee.co.id/3Aq7OcqIox'); // Redirects instead of opening a new window
        setCookie('popundr', 1, 24 * 60 * 60 * 1000); // Set cookie to limit redirects
    }
}

initPu();
