import config from "config";
import winston from "winston";

export const log = winston.createLogger({
  level: config.get("logLevel") || "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()]
});
