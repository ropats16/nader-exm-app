import { exm } from "./exm.js"
import { functionId } from "./functionId.js"
import { v4 as uuid } from "uuid"

const id = uuid()

const input = [{
  type: 'createPost',
  post: {
    id,
    title: 'Hello World',
    content: 'My first post',
    author: 'Rohit'
  }
}]

const data = await exm.functions.write(functionId, input)
console.log({ data })