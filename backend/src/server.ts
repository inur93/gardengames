
import "reflect-metadata";
import express, { Application, Request as ExRequest, Response as ExResponse } from "express";
import { Pool } from "pg";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";
import cors from 'cors';
// import dotenv from "dotenv";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const connectToDB = async () => {
    try {
        await pool.connect();

    } catch (err) {
        console.log(err);
    }
};


// dotenv.config(); //Reads .env file and makes it accessible via process.env
class Server {
    private readonly app: Application;

    constructor() {
        this.app = express();

        this.setupStaticFolder();
        this.initializeMiddlewares();
        this.initializeSwaggerDocs();
        RegisterRoutes(this.app);
    }

    public listen() {
        return this.app.listen(process.env.PORT, () => {
            console.log(`App listening on port ${process.env.PORT}`);
        });
    }

    public setupStaticFolder() {
        this.app.use(express.static("public"));
      }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(cors())
    }

    private initializeSwaggerDocs() {
        this.app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
            return res.send(
                swaggerUi.generateHTML(await import("../build/swagger.json"))
            );
        });
        this.app.use("/swagger.json", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
            return res.send(await import("../build/swagger.json"))
        })
    }
}

(async () => {
    await connectToDB();
    const app = new Server();
    app.listen();
})()