/* Test API file */

// const db = require("../db");

// exports.get_root = (req,res) => {
//     db.query('SELECT * from test', (error, rows) => {
//         if (error) {
//             throw error;
//         }
//         console.log(rows);
//         res.send(rows);
//     });
// };
exports.get_root = async (req,res) => {
    try {
        res.status(200).send("Helloe World");
    } catch (err) {
        console.log(err);
        res.send("error");
    }
};
