import { execSync } from "child_process";
import fs from "fs-extra";
import path from "node:path";

export const generateProject = (name: string, template: string) => {
  const projectPath = path.join(process.cwd() as string, name);
  if (fs.existsSync(projectPath)) {
    console.error(`Project ${name} already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(projectPath);
  const templatePath = path.join(__dirname, "../templates", template);

  if (!fs.existsSync(templatePath)) {
    console.error(`Template ${template} does not exists.`);
    process.exit(1);
  }
  fs.copySync(templatePath, projectPath);

  console.log(`Project created successfully`);
  try {
    console.log("Installing dependencies...");
    execSync("npm install", { stdio: "inherit", cwd: projectPath });
    console.log("Dependencies installed successfully.");
  } catch (error) {
    console.error(
      "Failed to install dependencies. Please run `npm install` manual"
    );
  }
};

