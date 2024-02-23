function changeLanguage(nr) {
    var paragraphRO = document.getElementById('paragraph-ro-' + nr);
    var paragraphDE = document.getElementById('paragraph-de-' + nr);

    if (paragraphRO.style.display === 'none' || paragraphDE.style.display === 'block') {
        paragraphRO.style.display = 'block';
        paragraphDE.style.display = 'none';
    }
    else {
        paragraphRO.style.display = 'none';
        paragraphDE.style.display = 'block';
        hintScrollHoriz.classList.remove('hidden');
    }
}
