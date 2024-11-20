const connection = require('../../config');

const listUsers = (callback) => {
  const query = `SELECT * FROM user`;
  connection.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query to list users: ", err);
      return callback(err);
    }
    return callback(null, result);
  });
};

module.exports = { listUsers };