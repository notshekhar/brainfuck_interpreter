const prompt = require("prompt-sync")()
const { interpret, memory } = require("./src/brainfuck")

// [Hello World!] =[72 101 108 108 111 32 87 111 114 108 100 33]
// let str = ">++++++++++[<+++++++>-]<++.>+++[<++++++++++>-]<-.+++++++..+++.>++++++++[<---------->-]<+.>+++++[<++++++++++>-]<+++++."

// evaluate(parser(lexer(str)))
// console.log(memory)
const V = "1.0.0"

console.log(`Welcome to Brainfuck v${V}.`)
console.log(`Type ".help" for more information. And "exit" to exit`)

function listen() {
    let str = prompt("> ")
    if (str == "exit") return
    if (str == ".help") {
        print_info()
        listen()
    }else{
        interpret(str)
        listen()
    }
}
listen()


function print_info(){
    console.log(`    > = increases memory pointer, or moves the pointer to the right 1 block.\n    < = decreases memory pointer, or moves the pointer to the left 1 block.\n    + = increases value stored at the block pointed to by the memory pointer\n    - = decreases value stored at the block pointed to by the memory pointer\n    [ = like c while(cur_block_value != 0) loop.\n    ] = if block currently pointed to's value is not zero, jump back to [\n    , = like c getchar(). input 1 character.\n    . = like c putchar(). print 1 character(ASCII) to the console\n    = = print decimal number from memory to console`)
}