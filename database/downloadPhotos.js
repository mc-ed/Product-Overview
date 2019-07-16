//import all the things I need
    //fs
const fs = require('fs');
    //db
const {Product} = require('./index.js');
    //download - don't forget to npm install image downloader
const download = require('image-downloader');


const saveImages = () => {
    //retrieve all entries from db
   const promise = Product.find({});
   
   promise.exec((err, results) => {
       if (err) {
            console.log(err)
       } else {
           
           //for each entry
            // results.forEach(product => {
                // let dir = `../Product-Overview/FECPhotos/${product.SS}`;
                
                //fs.mkdir with name that is SS inside of FEC
                // fs.mkdir(dir, (err) => {
                //     if (err) {
                //         throw err;
                //     } else {
                        recreateImageURL(results);

                //     }
                // })

            // })
       }
          
    })

    const recreateImageURL = (array, i) => {
        i = i || 0;
        if( i >= 100) return
        // array.forEach((product) => {
            array[i].largeImages.forEach((photo) => {
                let prefix = photo.slice(0, 6);
                //console.log(prefix, photo)
                let options = {
                    url: `https://mobileimages.lowes.com/product/converted/${prefix}/${photo}`,
                    dest: `../Product-Overview/FECPhotos/${array[i].SS}`
                } 
                if (photo.slice(-3)=== 'jpg'){
                    download.image(options)
                    .then(({filename, image }) => {
                        console.log('File saved to', filename)
                    })
                    .catch((err) => {
                        console.error(err)
                    })
                }
            })

            setTimeout(() => {
                recreateImageURL(array, ++i)
            },1000);
    
}

};

// saveImages();

module.exports = {saveImages}
