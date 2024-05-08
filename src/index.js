//app starter script
import app from "./app.js";
import sequelizeInstance from "./database/database.js";
import loadModels from "./database/load-models.js";

async function main() {
  try {
    await sequelizeInstance.authenticate(); //Verify connection to DB
    console.log("Connection has been established successfully.");
    await sequelizeInstance.sync({ alter: true }); //Sincroniza las tablas. Alter cheque los cambios en los modelos y actualiza las tablas.
    const models = await loadModels(); //Load Models
    console.log("Loaded Models -> ", models);
    const port = process.env.PORT || 8080;
    app.listen(port); //express port
    console.log("Listening on port", port);
  } catch (error) {
    console.error("Error Initialising Server: ", error);
  }
}

main();
