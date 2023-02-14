import { ContractType } from "@execution-machine/sdk"
import fs from "fs"
import { exm } from "./exm.js"
import { state } from "./state.js"

const contractSource = fs.readFileSync("handler.js")
const data = await exm.functions.deploy(contractSource, state, ContractType.JS)

console.log({ data })

fs.writeFileSync("./functionId.js", `export const functionId = "${data.id}"`)