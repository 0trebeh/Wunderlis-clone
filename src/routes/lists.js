const { Router } = require('express');
const router = Router();

const {
    getTags,
    getTag,

    getLists,

    getInbox,
    getTasks,
    getTask,

    createTag,
    createList,
    createTask,

    updateTag,
    updateList,
    updateTask,

    deleteTag,
    deleteList,
    deleteTask,
} = require('../controllers/lists.controllers');

router.get('/tags/:id', getTags);
router.get('/tag/:id', getTag);
router.post('/tag', createTag);
router.put('/tag/:id', updateTag);
router.delete('/tag/:id', deleteTag);

router.get('/lists/:id', getLists);
router.post('/list', createList);
router.put('/list/:id', updateList);
router.delete('/list/:id', deleteList);

router.get('/inbox/:id', getInbox);
router.get('/tasks/:id', getTasks);
router.get('/task/:id', getTask);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

module.exports = router;