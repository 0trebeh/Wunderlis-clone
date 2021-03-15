const { Router } = require('express');
const router = Router();

const { 
    getUsers, 
    getLogin,
    createUser, 
    updateUser, 
    deleteUser 
} = require('../controllers/users.controllers');

router.get('/', getUsers);
router.post('/login', getLogin);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;