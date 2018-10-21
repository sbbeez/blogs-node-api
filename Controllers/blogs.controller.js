const { getDbConnection } = require("../Utils/dbConnection");
const { handleError } = require("../Utils/utilMethods");


exports.fetchAllBlogs = async (req, res) => {
    // connect db
    let client = getDbConnection();
    try {
        // execute query 
        let result = await client.query("select * from blogposts")
        // get all from db 
        let data = result.rows;
        // send response
        res.send(data);
    } catch (err) {
        handleError(500, res, "db failed");
    } finally {
        client.end();
    }
}


exports.saveBlog = async (req, res) => {
    // connect db
    let client = getDbConnection();
    try {
        //execute query to save in db
        await client.query("insert into blogposts(blog_title,blog_desc) values($1,$2)", [req.body.blog_title, req.body.blog_desc]);
        //send response
        res.end();
    } catch (err) {
        res.status(500);
        res.send({ message: err.toString() });
    } finally {
        // client connection close
        client.end();
    }
}
