const image = [];

fs.readdir('src/images', (err, files) => {
    files.forEach(file => {
        image.push(`https://raw.githubusercontent.com/RalkeyOfficial/kevinator-extension/main/src/images/${file}`);
    })
});

setInterval(function() {
    let imageCollection = document.images;

    for(img in imageCollection) {
        if (imageCollection[img].src == "" || imageCollection[img].src == "#") continue;
        if (imageCollection[img].src == image) continue;
        
        imageCollection[img].src = image;
    }
}, 500);
