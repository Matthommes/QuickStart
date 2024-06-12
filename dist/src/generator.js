"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProject = void 0;
const child_process_1 = require("child_process");
const fs_extra_1 = __importDefault(require("fs-extra"));
const node_path_1 = __importDefault(require("node:path"));
const generateProject = (name, template) => {
    const projectPath = node_path_1.default.join(process.cwd(), name);
    if (fs_extra_1.default.existsSync(projectPath)) {
        console.error(`Project ${name} already exists.`);
        process.exit(1);
    }
    fs_extra_1.default.mkdirSync(projectPath);
    const templatePath = node_path_1.default.join(__dirname, "../templates", template);
    if (!fs_extra_1.default.existsSync(templatePath)) {
        console.error(`Template ${template} does not exists.`);
        process.exit(1);
    }
    fs_extra_1.default.copySync(templatePath, projectPath);
    console.log(`Project created successfully`);
    try {
        console.log("Installing dependencies...");
        (0, child_process_1.execSync)("npm install", { stdio: "inherit", cwd: projectPath });
        console.log("Dependencies installed successfully.");
    }
    catch (error) {
        console.error("Failed to install dependencies. Please run `npm install` manual");
    }
};
exports.generateProject = generateProject;
