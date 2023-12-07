/* Test API file */

const db = require("../db");

exports.get_root = async (req,res) => {
    try {
        var sql = "SELECT * FROM team6.tb_user";
        db.query(sql, function (err, result) {
            if (err) console.log("query is not excuted: " + err);
            else res.status(200).send(result);
        });
    } catch (err) {
        console.log(err);
        res.send("error");
    }    
};
// exports.get_root = async (req,res) => {
//     try {
//         res.status(200).send("Helloe World");
//     } catch (err) {
//         console.log(err);
//         res.send("error");
//     }
// };
