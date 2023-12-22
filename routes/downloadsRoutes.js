const { Router } = require('express');
const userController = require('../controllers/userController');
const upload = require('../middleware/MulterConfig');
const cloudinary = require('../middleware/cloudinaryConfig');

const router = Router();

router.get('/upload', userController.downloadImage_get)
router.post('/upload', upload.single('profile-file'), userController.downloadImage)
// router.post('/upload', upload.single('profile-file'), async (req, res) => {
//     try {
//         console.log('Request received for image upload');
//         const result = await cloudinary.uploader.upload(req.file.path);
//         console.log(result);
//         // Ici, tu peux utiliser result.secure_url comme nécessaire
//         req.body.image = result.secure_url;
//         userController.downloadImage(req, res);
//     } catch (error) {
//         console.error('Error in image upload route:', error);
//         res.status(500).json({ success: false, error: 'Erreur lors de l\'upload de l\'image' });
//     }
// });


module.exports = router;