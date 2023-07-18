import { app } from "./app";

const startup = async () => {
  app.listen(4001, () => {
    console.log("Listening on port 4001");
  });
};

startup().then();
