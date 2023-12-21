const { Router } = require('express');
const authController = require('../controllers/authController');
const upload = require('../middleware/MulterConfig');


const router = Router();

// authentification
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);


module.exports = router;