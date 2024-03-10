const gallery = document.getElementById('FullImageView');
const galleryContainer = document.querySelector(".galleryContainer");
const galleryImagesJson = '../galleryImages.json';

const prevImgButton = document.getElementById('prev-button');
const nextImgButton = document.getElementById('next-button');

const imagesArray = [];

loadGallery();

async function loadGallery() {
    images = await fetchImages();
    if (images) {
        images.forEach((item, index) => {
            imagesArray.push(item.imagePath);

            galleryContainer.innerHTML += `
                    <img src="${item.imagePath}" alt="Gallery Image" id="img_${index}" 
                    class="fullCardImg" onclick="FullView('${item.imagePath}', ${index})">
                `;
        });
    }
    deleteLoading();
}

function deleteLoading() {
    loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.opacity = 0;
    setTimeout(() => {
        loadingOverlay.style.display = "none";
    }, 1000);
}

async function fetchImages() {
    const response = await fetch(galleryImagesJson);
    const data = await response.json();
    return data;
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
