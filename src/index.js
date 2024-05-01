//app starter script
import app from "./app.js";
import sequelizeInstance from "./database/database.js";

async function main() {
  try {
    await sequelizeInstance.authenticate(); //Connection to DB
    console.log("Connection has been established successfully.");
    const port = process.env.PORT || 8080;
    app.listen(port); //express port
    console.log("Listening on port", port);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

main();
