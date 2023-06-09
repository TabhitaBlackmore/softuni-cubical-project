const router = require('express').Router();

const homeConroller = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')

router.use(homeConroller);
router.use('/cubes', cubeController)
router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;