import { exm } from "./exm.js"
import { functionId } from "./functionId.js"

const input = [{
  type: 'updatePost',
  post: {
    id: process.argv[2],
    title: 'Hello World v2',
    content: 'My first post update',
    author: 'Rohit'
  }
}]

const data = await exm.functions.write(functionId, input)
console.log({ data })