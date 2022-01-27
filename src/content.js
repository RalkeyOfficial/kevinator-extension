const image = "https://raw.githubusercontent.com/RalkeyOfficial/kevinator-extension/main/src/images/IMG20220118164805.jpg"; 

setInterval(function() {
    let imageCollection = document.images;

    for(img in imageCollection) {
        if (imageCollection[img].src == "" || imageCollection[img].src == "#") continue;
        if (imageCollection[img].src == image) continue;
        
        imageCollection[img].src = image;
    }
}, 500);
