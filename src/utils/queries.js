module.exports = {
    //Querys user
    getUsers:'SELECT * FROM app_user ORDER BY user_id ASC',
    getLogin: 'SELECT * FROM app_user WHERE username = $1 AND password = $2',
    createUser: 'INSERT INTO app_user (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    updateUser: 'UPDATE app_user SET username = $1, email = $2, password = $3 WHERE user_id = $4 RETURNING *',
    deleteUser: 'DELETE FROM app_user where user_id = $1',

    //tag
    getTags: 'SELECT * FROM tag WHERE user_id = $1',
    getTag: 'SELECT * FROM tag WHERE tag_id = $1',
    createTag: 'INSERT INTO tag (name, description, color, priority, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    updateTag: 'UPDATE tag SET name = $1, description = $2, color = $3, priority = $4, user_id = $5 WHERE tag_id = $6 RETURNING *',
    deleteTag: 'DELETE tag WHERE tag_id = $1',
    
    //Queries list  
    getLists: 'SELECT * FROM list WHERE user_id = $1',
    createList: 'INSERT INTO list (title, position, color, edited, created, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    updateList: 'UPDATE task SET title = $1, position = $2, color = $3, edited = $4, completed = $5 WHERE list_id = $6 RETURNING *',
    deleteList: 'DELETE list WHERE list_id = $1',
    
    //task
    getInbox: 'SELECT title, value, list FROM list JOIN task ON task.list = list.list_id AND list.user_id = $1',
    getTasks: 'SELECT * FROM task WHERE list = $1',
    getTask: 'SELECT * FROM task WHERE task_id = $1',
    createTask: 'INSERT INTO task (value, img, position_list, position_inbox, created, edited, tag, list) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    updateTask: 'UPDATE task SET value = $1, img = $2, strikethrough = $3, position_list = $4, position_inbox = $5, edited = $6, time_limit = $7, time_alert = $8, tag = $9, list = $10  WHERE task_id = $11 RETURNING *',
    deleteTask: 'DELETE task WHERE task_id = $1',
}