const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {User} = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async (req,res) => {
    try {
        const findUser = await User.findAll()        
        res.json(findUser)
    } catch (error) {
        res.json(error)
    }
    

})

router.post('/create', async (req, res) => {
    const { name } = req.body;
    try {
        const newUser = await User.create({name})  
        console.log(newUser)  
        res.json(newUser)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;
