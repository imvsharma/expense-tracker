import app from "./app";


Bun.serve({
    fetch: app.fetch,
  });
console.log("Here we are running server by Bun")