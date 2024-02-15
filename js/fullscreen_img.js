const gallery = document.getElementById('FullImageView');
const galleryContainer = document.querySelector(".galleryContainer");
const galleryImagesJson = '../galleryImages.json';

const prevImgButton = document.getElementById('prev-button');
const nextImgButton = document.getElementById('next-button');

const imagesArray = [];

window.onload = fetchData();

function fetchData() {
    fetch(galleryImagesJson)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        })

        .then(data => {
            data.forEach((item, index) => {
                imagesArray.push(item.imagePath);

                galleryContainer.innerHTML += `
                    <img src="${item.imagePath}" id="img_${index}" 
                    class="fullCardImg" onclick="FullView('${item.imagePath}', ${index})">
                `;
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing the JSON file:', error);
        });
}

if (prevImgButton) {
    prevImgButton.addEventListener('click', () => {
        if (currentIndex >= 1) {
            currentIndex = currentIndex - 1;
            updateImage();
        }
    });
}

if (nextImgButton) {
    nextImgButton.addEventListener('click', () => {
        if (currentIndex <= imagesArray.length - 2) {
            currentIndex = currentIndex + 1;
            updateImage();
        }
    });
}

function updateImage() {
    document.getElementById("FullImage").src = imagesArray[currentIndex];
}

function FullView(ImgLink, ImgIndex) {
    currentIndex = ImgIndex;
    document.getElementById("FullImage").src = ImgLink;
    document.getElementById("FullImageView").style.display = "flex";
}

function CloseFullView() {
    document.getElementById("FullImageView").style.display = "none";
    currentIndex = 0
}
