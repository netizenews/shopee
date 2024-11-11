<script type="text/javascript">
function addEvent(obj, eventName, func) {
    if (obj.attachEvent) {
        obj.attachEvent("on" + eventName, func);
    } else if (obj.addEventListener) {
        obj.addEventListener(eventName, func, true);
    } else {
        obj["on" + eventName] = func;
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

addEvent(window, "load", function(e) {
    if (getCookie("popunderShown") === null) {
        setTimeout(function() {
            var shopeeUrl = "shopee://open"; // URL skema untuk membuka aplikasi Shopee
            var webUrl = "https://s.shopee.co.id/3Aq7OcqIox";
            
            // Coba buka aplikasi Shopee
            window.location = shopeeUrl;
            
            // Jika gagal dalam 2 detik, buka versi web
            setTimeout(function() {
                window.open(webUrl, "_blank");
            }, 2000);
            
            // Setel cookie agar tidak mengulang popunder selama 1 hari
            setCookie("popunderShown", "true", 1);
        }, 10000); // Menunggu 10 detik sebelum membuka halaman baru
    }
});
</script>
