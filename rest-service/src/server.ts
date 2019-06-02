import bodyParser from "body-parser";
import compression from "compression";
import config from "config";
import express from "express";
import expressValidator from "express-validator";
import expressWinston from "express-winston";
import path from "path";
import winston from "winston";
import { log } from "./utils/logger";

export class ExpressServer {
  private app: express.Application = express();

  public async initialize() {
    this.app.set("port", config.get("port") || 3000);
    this.app.set("views", path.join(__dirname, "./views"));
    this.app.set("view engine", "pug");
    this.app.use(compression());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(expressValidator());

    if (config.get("logRequests")) {
      this.app.use(
        expressWinston.logger({
          transports: [new winston.transports.Console()],
          expressFormat: true,
          colorize: true
        })
      );
    }

    this.app.listen(() => {
      log.info(
        `Service running on ${this.app.get("port")}. NODE_ENV=${
          process.env.NODE_ENV
        }`
      );
    });
  }
}
