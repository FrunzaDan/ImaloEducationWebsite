function getAnchor() {
    var currentUrl = document.URL;
    var urlParts = currentUrl.split('#');
    if (urlParts.length > 1) {
        return urlParts[1];
    }
    else {
        return null;
    }
}

function scrollIntoViewInstant() {
    var pageIsAtTop = true;
    var urlAnchor = getAnchor();
    if (urlAnchor !== null) {
        if (pageIsAtTop == true) {
            document.getElementById(urlAnchor).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}

function scrollIntoView() {
    setTimeout(() => {
        scrollIntoViewInstant();
    }, 20);
}

window.onload = scrollIntoView();
