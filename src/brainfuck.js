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
                break
            case "]":
                m = { type: "LOOP_END" }
                break
            default:
                break
        }
        moves.push(m)
    }
    moves = moves.filter((e) => e.type != undefined)
    console.log(moves)
    return moves
}

const evaluate = (parse) => {
    const MEMORY_SIZE = 30000
    let memory = new Array(MEMORY_SIZE).fill(0)
    let cp = 0
    let pogram_counter = 0
    //memory error
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
                console.log(String.fromCharCode(memory[cp]))
                break
            case "INPUT":
                let input = prompt("Enter Input: ")
                if (isNaN(parseInt(input))) memory[cp] = input.charCodeAt(0)
                else memory[cp] = parseInt(input)
                break
        }
    }
    console.log(memory)
}
