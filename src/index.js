//app starter script
import app from "./app.js";
import sequelizeInstance from "./database/database.js";

import "./components/user/model/User.js";

async function main() {
  try {
    await sequelizeInstance.authenticate(); //Verify connection to DB
    console.log("Connection has been established successfully.");
    await sequelizeInstance.sync({ alter: true }); //Sincroniza las tablas. Alter cheque los cambios en los modelos y actualiza las tablas.
    const port = process.env.PORT || 8080;
    app.listen(port); //express port
    console.log("Listening on port", port);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

main();
