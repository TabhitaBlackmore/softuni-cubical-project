const router = require('express').Router();

const homeConroller = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');
const userController = require('./controllers/userController');

router.use(homeConroller);
router.use('/cubes', cubeController);
router.use('/accessories', accessoryController);
router.use('/users', userController);
router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;