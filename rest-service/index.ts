import { ExpressServer } from "./src/server";

(async () => {
  const es = new ExpressServer();
  await es.initialize();
})();
