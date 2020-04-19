INTRODUCTION
Brainfuck is probably the craziest language i have ever had the pleasure of coming across. And, yes, there are quite a few tutorials that you will find on google about the language and how to program in it, but i am writing this one as most of them that you will find seem to only cover just the basics of using the operators.

Brainfuck, language itself, is a Turing-complete language created by Urban Müller. The language only consists of 8 operators, yet with the 8 operators, <>+-[],. you are capable of writing almost any program you can think of.

To write programs in brainfuck, i would suggest you get a few things first.

First of all you will need an interpreter or a compiler. An experienced programmer could easily write one quite quickly after reading this. If you don't quite know how to write one, I have included the source to a Brainfuck-to-C interpreter that I wrote in C as well as one that I wrote in BrainFuck itself. Also i have included the source for the worlds smallest Compiler (171 bytes) written in x86 assembly by Brian Raiter. You'll find all those in the last section of this tutorial.

Next, i would suggest an ASCII chart with all the ASCII chars and their decimal equivalent value. Next on the items is would be a calculator. Any will do. It will help you figure out the Greatest Common Factors for use in incrementing a memory block quickly.

Lastly, i would recommend having no life and lots of time on your hands to actually want to sit and write programs in this amazingly inefficient language. I promise you, if you take the time to sit and write a program in brainfuck for an hour or five, you will definitely see why it deserves its name.

BASICS
The idea behind brainfuck is memory manipulation. Basically you are given an array of 30,000 1byte memory blocks. The array size is actually dependent upon the implementation used in the compiler or interpretor, but standard brainfuck states 30,000. Within this array, you can increase the memory pointer, increase the value at the memory pointer, etc. Let me first present to you the 8 operators available to us.

> = increases memory pointer, or moves the pointer to the right 1 block.
< = decreases memory pointer, or moves the pointer to the left 1 block.
+ = increases value stored at the block pointed to by the memory pointer
- = decreases value stored at the block pointed to by the memory pointer
[ = like c while(cur_block_value != 0) loop.
] = if block currently pointed to's value is not zero, jump back to [
, = like c getchar(). input 1 character.
. = like c putchar(). print 1 character to the console
Some rules:
Any arbitrary character besides the 8 listed above should be ignored by the compiler or interpretor. Characters besides the 8 operators should be con- sidered comments.

All memory blocks on the "array" are set to zero at the beginning of the program. And the memory pointer starts out on the very left most memory block.

Loops may be nested as many times as you want. But all [ must have a corre- sponding ].
