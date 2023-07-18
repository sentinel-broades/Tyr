import { Client } from "pg";

const connect = async () => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    database: "myTeam",
  });

  await client.connect();
  return client;
};

const disconnect = async (client: Client) => {
  await client.end();
};

module.exports = { connect, disconnect };
