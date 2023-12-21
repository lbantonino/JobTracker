const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();


// CLOUDINARY
const cld = cloudinary.config({
    cloud_name: 'de6pujdmx',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

module.exports = cld;