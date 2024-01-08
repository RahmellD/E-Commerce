const router = require('express').Router();
const { createUser, updateUser, deleteUser, getUsers, login } = require('../controllers/users')
const verifyToken = require('../midlewares/verifyToken')
const checkAdmin = require('../midlewares/checkAdmin');

router.get('/', getUsers);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.post('/login', login);

module.exports = router