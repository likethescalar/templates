import config from "config";
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import path from "path";
import expressValidator from "express-validator";

export class Server {
  static async initialize() {
    let app = express();
    app.set("port", config.get("port") || 3000);
    app.set("views", path.join(__dirname, "../views"));
    app.set("view engine", "pug");
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressValidator());
  }
}
