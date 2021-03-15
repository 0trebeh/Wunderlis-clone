const pool = require('../utils/dbconnection'); 
const query = require('../utils/queries');

    const getTags = async (req, res) => { 
        const client = await pool.connect();
        try{
            const response = await client.query(query.getTags);
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
            const response = await client.query(query.getTag);
            res.status(200).json(response.rows);
        }catch{
            res.status(505);
        }finally{
            client.release(true);
        }
    };

    /*getLists,
    getList,

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
    deleteTask,*/
    
    
    
    

module.exports = {
    /*getTags,
    getTag,

    getLists,
    getList,

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
    deleteTask,*/
};