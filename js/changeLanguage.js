function changeLanguage() {
    var paragraphsRO = document.getElementsByClassName('paragraph-ro');
    var paragraphsDE = document.getElementsByClassName('paragraph-de');

    for (let i = 0; i < paragraphsRO.length; i++) {
        if (paragraphsRO[i].style.display === 'none' || paragraphsDE[i].style.display === 'block') {
            paragraphsRO[i].style.display = 'block';
            paragraphsDE[i].style.display = 'none';
        }
        else {
            paragraphsRO[i].style.display = 'none';
            paragraphsDE[i].style.display = 'block';
        }
    }
}
