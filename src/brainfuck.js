const prompt = require("prompt-sync")()

const object = (function () {
    const lexer = (string) => {
        let arr = string.split("").filter((e) => e != " " && e != "\n")
        return arr
    }

    const parser = (lex) => {
        let moves = []
        for (let i = 0; i < lex.length; i++) {
            let move = lex[i]
            let m = {}
            switch (move) {
                case ">":
                    m = { type: "MOVE_RIGHT" }
                    break
                case "<":
                    m = { type: "MOVE_LEFT" }
                    break
                case "+":
                    m = { type: "UP_COUNT" }
                    break
                case "-":
                    m = { type: "DOWN_COUNT" }
                    break
                case ".":
                    m = { type: "OUTPUT_ASCII" }
                    break
                case ",":
                    m = { type: "INPUT" }
                    break
                case "[":
                    m = { type: "LOOP_START", end: 0 }
                    let e = 0
                    while (lex[i + e] != "]" && i + e != lex.length) {
                        m.end++
                        e++
                    }
                    if (i + e == lex.length)
                        console.error("Mismatched parentheses.")
                    break
                case "]":
                    m = { type: "LOOP_END" }
                    break
                case "=":
                    m = { type: "PRINT_DECIMAL" }
                    break
                default:
                    break
            }
            moves.push(m)
        }
        moves = moves.filter((e) => e.type != undefined)
        return moves
    }

    const MEMORY_SIZE = 30000
    let memory = new Array(MEMORY_SIZE).fill(0)
    let cp = 0
    let pogram_counter = 0

    const evaluate = (parse) => {
        //memory error
        let output = ""
        const memory_error = () => {
            if (cp < 0 || cp >= MEMORY_SIZE) {
                console.error(`Memory error: ${cp}`)
                return true
            }
            return false
        }
        for (let i = 0; i < parse.length; i++) {
            let e = parse[i]
            switch (e.type) {
                case "MOVE_RIGHT":
                    cp++
                    break
                case "MOVE_LEFT":
                    cp--
                    break
                case "UP_COUNT":
                    if (memory_error()) break
                    memory[cp] += 1
                    break
                case "DOWN_COUNT":
                    if (memory_error()) break
                    memory[cp] -= 1
                    break
                case "PRINT_DECIMAL":
                    output += memory[cp]
                    break
                case "LOOP_START":
                    if (memory[cp] == 0) {
                        i += e.end
                        break
                    }
                    program_counter = i
                    break
                case "LOOP_END":
                    if (memory[cp] == 0) break
                    i = program_counter
                    break
                case "OUTPUT_ASCII":
                    output += String.fromCharCode(memory[cp])
                    break
                case "INPUT":
                    let input = prompt("Enter a Character or a number: ")
                    if (isNaN(parseInt(input))) memory[cp] = input.charCodeAt(0)
                    else memory[cp] = parseInt(input)
                    break
            }
        }
        if (output != "") console.log(output)
    }

    const eval = (str) => {
        evaluate(parser(lexer(str)))
    }

    return {
        eval,
        MEMORY_SIZE,
        memory,
    }
})()

if (typeof module !== "undefined") module.exports = object
else window.brainfuck = object
