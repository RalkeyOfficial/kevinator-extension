const images = [
    "https://raw.githubusercontent.com/RalkeyOfficial/kevinator-extension/main/src/images/FaceApp_1642673262498.jpg",
    "https://raw.githubusercontent.com/RalkeyOfficial/kevinator-extension/main/src/images/IMG20220118164805.jpg",
    "https://raw.githubusercontent.com/RalkeyOfficial/kevinator-extension/main/src/images/old_kevert.jpeg"
];


setInterval(function() {
    let imageCollection = document.images;
    let divImgCollection = getDivWithBackground();


    // for img tags
    for(img in imageCollection) {
        if (imageCollection[img].src == "" || imageCollection[img].src == "#") continue;
        if (images.includes(imageCollection[img].src) ) continue;
        
        imageCollection[img].src = chooseRandomImage();
    }


    // for div's with background-image attribute
    for(divElement in divImgCollection) {
        const url = $(divImgCollection[divElement]).css('background-image').slice(5, $(divImgCollection[divElement]).css('background-image').length - 2);

        if (url == "" || url == "none") continue;
        if (images.includes(url ) ) continue;

        $(divImgCollection[divElement]).css('background-image', `url("${chooseRandomImage()}")`);
    }

}, 300);


function chooseRandomImage() {
    let random = Math.floor(Math.random() * images.length);
    return images[random];
}

function getDivWithBackground() {
    const regex = /url\("[^"]*"\)/

    let items = $('div').filter(function() {
        return $(this).css('background-image').match(regex);
    });

    return items
}
