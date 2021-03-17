const pool = require('../utils/dbconnection'); 
const query = require('../utils/queries');

const getTags = async (req, res) => { 
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const response = await client.query(query.getTags, [ id ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};
    
const getTag = async (req, res) => { 
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const response = await client.query(query.getTag, [ id ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const getLists = async (req, res) => { 
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const response = await client.query(query.getLists, [ id ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const getImbox = async (req, res) => { 
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const response = await client.query(query.getImbox, [ id ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const getTasks = async (req, res) => { 
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const response = await client.query(query.getTasks, [ id ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const getTask = async (req, res) => { 
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const response = await client.query(query.getTask, [ id ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const createTag = async (req, res) => {
    const client = await pool.connect();
    try{
        const { name, description, color, priority, user_id } = req.body;
        const response = await client.query(query.createTag, [
            name, 
            description, 
            color, 
            priority,
            user_id
        ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const createList = async (req, res) => {
    const client = await pool.connect();
    try{
        const { title, position, color, edited, created, user_id } = req.body;
        const response = await client.query(query.createList, [
            title, 
            position, 
            color, 
            edited, 
            created, 
            user_id
        ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const createTask = async (req, res) => {
    const client = await pool.connect();
    try{
        const { value, img, position_list, position_inbox, created, edited, tag, list } = req.body;
        const response = await client.query(query.createTask, [
            value, 
            img, 
            position_list, 
            position_inbox, 
            created, 
            edited, 
            tag, 
            list
        ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const updateTag = async (req, res) => {
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const { name, description, color, priority } = req.body;
  
        const response = await client.query(query.updateTag, [
            name, 
            description, 
            color, 
            priority,
            id
        ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const updateList = async (req, res) => {
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const { title, position, color, edited, completed } = req.body;
  
        const response = await client.query(query.updateList, [
            title, 
            position, 
            color, 
            edited, 
            completed,
            id
        ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const updateTask = async (req, res) => {
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        const { value, img, strikethrough, position_list, position_inbox, edited, time_limit, time_alert, tag, list } = req.body;
  
        const response = await client.query(query.updateTask, [
            value, 
            img, 
            strikethrough, 
            position_list, 
            position_inbox, 
            edited, 
            time_limit, 
            time_alert, 
            tag, 
            list,
            id
        ]);
        res.status(200).json(response.rows);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const deleteTag = async (req, res) => { 
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        await client.query(query.deleteTag, [ id ]);
        res.status(200).json(`Tag deleted Successfully`);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const deleteList = async (req, res) => { 
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        await client.query(query.deleteList, [ id ]);
        res.status(200).json(`Tag deleted Successfully`);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};

const deleteTask = async (req, res) => { 
    const client = await pool.connect();
    try{
        const id = parseInt(req.params.id);
        await client.query(query.deleteTask, [ id ]);
        res.status(200).json(`Tag deleted Successfully`);
    }catch{
        res.status(505);
    }finally{
        client.release(true);
    }
};
 
module.exports = {
    getTags,
    getTag,

    getLists,

    getImbox,
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
};