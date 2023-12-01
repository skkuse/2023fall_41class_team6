const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");
const cors = require('cors');

class App {
    constructor() {
        
        this.app = express();

        this.middleware();

        /* body parsing */
        this.bodyParsing();

        /* router */
        this.getRouting();

        /* 404 error */
        this.status404();

        /* error handling */
        this.errorHandler();
    }

    middleware() {
        /* Add your middleware */
    }
    
    bodyParsing() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    getRouting() {
        this.app.use(require("./routes"));
    }

    status404() {
        this.app.use((req, res, _) => {
            res.status(404).send("Error Code 400");
        });
    }

    errorHandler() {
        this.app.use((errreq, res, _) => {
            res.status(500).send("Error Code 400");
        });
    }

    setCors() {
        // this.app.use(cors({orgin: 'http://localhost:3000'}));
    }

    // setSwagger() {
    //     const options = {
    //         definition: {
    //             openapi: "3.0.0",
    //             info: {
    //                 title: "Swagger Express API for Team6",
    //                 version: "0.1.0",
    //                 description: "This is a sample server for Team6.",
    //             },
    //             servers: [
    //                 {
    //                     url: "http://localhost:8080",
    //                 },
    //             ],
    //         },
    //         apis: ["./src/routes/*.js"],
    //     };
    //     const specs = swaggereJsdoc(options);
    //     this.app.use(
    //         "/api-docs",
    //         swaggerUi.serve,
    //         swaggerUi.setup(specs, { explorer: true })
    //     );
    // }
}

module.exports = new App().app;