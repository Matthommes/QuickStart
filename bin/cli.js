#!/usr/bin/env ts-node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const generator_1 = require("../src/generator");
// Parsing command line argument
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .command("generate <name>  <template>", "Generate a new project", (yargs) => {
    return yargs
        .positional("name", {
        describe: "Name of project",
        type: "string",
    })
        .positional("template", {
        description: "Template to use.",
        type: "string",
    });
}, (argv) => {
    console.log("Generating project...");
    console.log(argv.name);
    console.log(argv.template);
    (0, generator_1.generateProject)(argv.name, argv.template);
})
    .demandCommand(1, "You need at least one command before proceeding")
    .help().argv;
