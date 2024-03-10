fetch("../html_components/navbar.html")
    .then(response => response.text())
    .then(htmlContent => {
        document.getElementById("navbar-placeholder").innerHTML = htmlContent;
    })
    .catch(error => {
        console.error("Error loading navbar content:", error);
    });
fetch("../html_components/footer.html")
    .then(response => response.text())
    .then(htmlContent => {
        document.getElementById("footer-placeholder").innerHTML = htmlContent;
    })
    .catch(error => {
        console.error("Error loading footer content:", error);
    });