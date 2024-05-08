import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadModels = async () => {
  const componentsPath = path.join(__dirname, "../components");
  const components = fs.readdirSync(componentsPath);
  const models = {};

  for (const component of components) {
    const modelPath = path.join(componentsPath, component, "model");
    if (fs.existsSync(modelPath) && fs.lstatSync(modelPath).isDirectory()) {
      const modelFiles = fs.readdirSync(modelPath);
      for (const file of modelFiles) {
        const fullPath = path.join(modelPath, file);
        if (fs.lstatSync(fullPath).isFile()) {
          const model = await import(`file://${fullPath}`);
          models[file.split(".")[0]] = model.default;
        }
      }
    }
  }

  return models;
};

export default loadModels;
