## INSTALLATION
- `git clone https://github.com/notshekhar/brainfuck_interpreter.git`
- `cd brainfuck_interpreter`
- `npm install`
- `npm i -g pkg`
- `pkg index.js`
- `rename` `index-win.exe` to brainfuck and add its Path to environment `path`
- Create a file with `<filename>.drf`
- and interpret is using `brainfuck <filename>`
## INTRODUCTION

**Brainfuck** is probably the craziest language i have ever had the pleasure of coming across. And, yes, there are quite a few tutorials that you will find on google about the language and how to program in it, but i am writing this one as most of them that you will find seem to only cover just the basics of using the operators.

## BASICS

The idea behind `brainfuck` is memory manipulation. Basically you are given an array of 30,000 1byte memory blocks. The array size is actually dependent upon the implementation used in the compiler or interpretor, but standard brainfuck states 30,000. Within this array, you can increase the memory pointer, increase the value at the memory pointer, etc. Let me first present to you the 9 operators available to us.

```brainfuck
> = increases memory pointer, or moves the pointer to the right 1 block.
< = decreases memory pointer, or moves the pointer to the left 1 block.
+ = increases value stored at the block pointed to by the memory pointer
- = decreases value stored at the block pointed to by the memory pointer
[ = like c while(cur_block_value != 0) loop.
] = if block currently pointed to's value is not zero, jump back to [
, = like c getchar(). input 1 character.
. = like c putchar(). print 1 character to the console
= = print number in current memory pointer to console
```

#### Some rules:

- Any arbitrary character besides the 8 listed above should be ignored by the
compiler or interpretor. Characters besides the 8 operators should be con-
sidered comments.

- All memory blocks on the "array" are set to zero at the beginning of the
program. And the memory pointer starts out on the very left most memory
block.

- Loops may be nested as many times as you want. But all [ must have a corre-
sponding ].

---

**Lets start with some examples of how to program in brainfuck**.

#### The simplest program in brainfuck is:

```brainfuck
[-]
```

Well, that's what they say anyway, but I hardly consider that a program. All it does is enter a loop that decreases the value stored at the current memory pointer until it reaches zero, then exits the loop. But since all memory blocks start out at zero, it will never enter that loop. 

#### So lets write a real program.

```brainfuck
+++++[-]
```


This is equivalent in C to:

```c
*p=+5;
while(*p != 0){
*p--;
}
```

In that program we are incrementing the current memory pointers value to 5, then entering a loop that decreases the value located at the memory pointer till it is zero, then exits the loop.

```brainfuck
>>>>++
```


This will move the memory pointer to the fourth memory block, and increment the value stored there by 2. So it looks like

```brainfuck
memory blocks
-------------
[0][0][0][2][0][0]...
^
memory pointer
```