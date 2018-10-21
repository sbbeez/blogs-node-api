const blogController = require("../Controllers/blogs.controller");

module.exports = (app) => {
    app.get("/api/fetchAllBlogs", blogController.fetchAllBlogs);

    app.post("/api/saveBlog", blogController.saveBlog);
}