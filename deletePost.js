import { exm } from "./exm.js"
import { functionId } from "./functionId.js"

const input = [{
  type: 'deletePost',
  postId: process.argv[2],
}]

const data = await exm.functions.write(functionId, input)
console.log({ data })
