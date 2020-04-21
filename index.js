const prompt = require("prompt-sync")()
const { eval, memory, MEMORY_SIZE } = require("./src/brainfuck")
const fs = require("fs")
// [Hello World!] =[72 101 108 108 111 32 87 111 114 108 100 33]
// let str = ">++++++++++[<+++++++>-]<++.>+++[<++++++++++>-]<-.+++++++..+++.>++++++++[<---------->-]<+.>+++++[<++++++++++>-]<+++++."

function _first() {
    const V = "1.0.0"
    console.log(`Welcome to Brainfuck v${V}.`)
    console.log(`Type ".help" for more information. And ".q" to Quit`)
    console.log(`Type ".m" or ".memory" to see memory blocks`)
    function listen() {
        let str = prompt("> ")
        if (str == ".q") return
        if (str == ".m" || str == ".memory") {
            let add = prompt("Enter block address: ")
            process.stdout.write(memory[parseInt(add)] + "")
        }
        if (str == ".help") {
            print_info()
            listen()
        }
        eval(str)
        listen()
    }
    function print_info() {
        console.log(
            `    > = increases memory pointer, or moves the pointer to the right 1 block.\n    < = decreases memory pointer, or moves the pointer to the left 1 block.\n    + = increases value stored at the block pointed to by the memory pointer\n    - = decreases value stored at the block pointed to by the memory pointer\n    [ = like c while(cur_block_value != 0) loop.\n    ] = if block currently pointed to's value is not zero, jump back to [\n    , = like c getchar(). input 1 character.\n    . = like c putchar(). print 1 character(ASCII) to the console\n    = = print number in current memory pointer to console`
        )
    }
    listen()
}

if (process.argv[2]) {
    let filename = process.argv[2]
    let pattern = /\w+.brf/
    let name
    if (pattern.test(filename)) name = filename
    else name = `${filename}.brf`

    fs.readFile(name, (err, data) => {
        if (err) console.log(err)
        else {
            let str = new String(data)
            interpret(str)
        }
    })
} else {
    _first()
}
