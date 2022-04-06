const sharp = require('sharp')



sharp('./images/Logo.png')
    .resize(1980, 1080) // Resize the image
    .toBuffer({ resolveWithObject: true }) // We want it to a buffer
    .then(({ data, info }) => {  // We now have the data / info of that buffer
        sharp('./images/plainGreen.png') // Let's start a new sharp on the underside image 
            .resize(1980, 1080) // Resize the underside image
            .composite([{
                input: data // Pass in the buffer data to the composite function
            }])
            .toFile('./finaly/output.jpg', function (err) {
                console.log("Error: ", err)
            })
        console.log(info)
    })
    .catch(err => {
        console.log("Error: ", err)
    })