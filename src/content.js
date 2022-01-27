
const images = [
    
];

setInterval(function() {
    let imageCollection = document.images;

    for(img in imageCollection) {
        if (imageCollection[img].src == "" || imageCollection[img].src == "#") continue;
        if (images.includes(imageCollection[img].src) ) continue;
        
        imageCollection[img].src = chooseRandomImage();
    }
}, 500);


function chooseRandomImage() {
    let random = Math.floor(Math.random() * images.length);
    return images[random];
}
