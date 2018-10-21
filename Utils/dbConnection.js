
const { Client } = require("pg");

exports.getDbConnection = () => {
    let client = new Client({ connectionString: "postgres://postgres:1234567890@localhost:5432/Articles" });
    client.connect();
    return client;
}