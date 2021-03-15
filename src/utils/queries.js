module.exports = {
    //Querys user
    getUsers:'SELECT * FROM app_user ORDER BY user_id ASC',
    getUserById: 'SELECT * FROM app_user WHERE user_id = $1',
    getLogin: 'SELECT * FROM app_user WHERE username = $1 AND password = $2',
    createUser: 'INSERT INTO app_user (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    updateUser: 'UPDATE app_user SET username = $1, email = $2, password = $3 WHERE user_id = $4 RETURNING *',
    deleteUser: 'DELETE FROM app_user where user_id = $1',

    //tag
    getTags: 'SELECT * FROM tag WHERE user_ = $1',
    getTag: 'SELECT * FROM tag WHERE tag_id = $1',
    createTag: 'INSERT INTO tag (name, description, color, priority) VALUES ($1, $2, $3, $4) RETURNING *',
    updateTag: 'UPDATE tag SET name = $1, description = $2, color = $3, priority = $4 WHERE tag_id = $5 RETURNING *',
    deleteTag: 'DELETE tag WHERE tag_id = $1',
    
    //Queries list  
    getLists: 'SELECT * FROM list WHERE user_ = $1',
    createList: 'INSERT INTO list (title, position, color, pinned, edited, created, user_) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    updateList: 'UPDATE task SET title = $1, position = $2, color = $3, pinned = $4, edited = $5, time_limit = $6, time_alert = $7, completed = $8, tag = $9 WHERE list_id = $10 RETURNING *',
    deleteList: 'DELETE list WHERE list_id = $1',
    
    //task
    getTasks: 'SELECT * FROM task WHERE list = $1',
    getTask: 'SELECT * FROM task WHERE task_id = $1',
    createTask: 'INSERT INTO task (strikethrough, position, value, img, list) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    updateTask: 'UPDATE task SET strikethrough = $1, position = $2, value = $3, img = $4, list = $5 WHERE task_id = $6 RETURNING *',
    deleteTask: 'DELETE task WHERE task_id = $1',
}
