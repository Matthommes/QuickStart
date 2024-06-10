#!/usr/bin/env ts-node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { generateProject } from "../src/generator";

// Parsing command line argument

yargs(hideBin(process.argv))
  .command(
    "generate <name>  <template>",
    "Generate a new project",
    (yargs) => {
      return yargs
        .positional("name", {
          describe: "Name of project",
          type: "string",
        })
        .positional("template", {
          description: "Template to use.",
          type: "string",
        });
    },
    (argv) => {
      console.log("Generating project...")
      console.log(argv.name)
      console.log(argv.template)
      generateProject(argv.name as string, argv.template as string);
    }
  )
  .demandCommand(1, "You need at least one command before proceeding")
  .help().argv;
