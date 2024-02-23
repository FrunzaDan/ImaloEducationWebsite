const scroller = document.querySelector("#scrollWrapper");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scroller.addEventListener("scroll", (event) => {
    if (scroller.scrollTop > 400) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});

function topFunction() {
    var myDiv = document.getElementById("scrollWrapper");
    myDiv.scrollTop = 0;
}