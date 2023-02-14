import { exm } from "./exm.js"
import { functionId } from "./functionId.js"

const data = await exm.functions.read(functionId)
console.log("date: ", JSON.stringify(data))