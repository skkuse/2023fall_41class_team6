const app = require("./app.js");
const port = 8080;

const server = app.listen(port, () => {
    console.log(`[server] Express listening on port: ${port}`);
    console.log(`[baseURL] http://localhost:${port}`);
});