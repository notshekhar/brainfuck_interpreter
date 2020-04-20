const { evaluate, parser, lexer } = require("./src/brainfuck")
let str = "[+++"

evaluate(parser(lexer(str)))
