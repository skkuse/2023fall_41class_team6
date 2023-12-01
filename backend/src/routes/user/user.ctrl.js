const db = require("../db");

exports.login = async (req, res) => {
    try {
        let userName = req.query.user;

        let sql = `
            INSERT INTO team6.tb_user (name)
            VALUES (?)
            ON DUPLICATE KEY UPDATE name = name;     

            SELECT id FROM team6.tb_user WHERE name = (?);
        `;
        let sqlVal = [userName, userName];

        db.query(sql, sqlVal, function (err, result) {
            if (err) {
                console.log("query is not executed: " + err);
                res.send("error");
            } else {
                res.status(200).send(result[1][0]);
            }
        });
    }
    catch (err) {
        console.log(err);
        res.send("error");
    }
}