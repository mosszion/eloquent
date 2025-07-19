import { reverse } from './reverse.js';

//Index 2 holds the first acutal comman line argument
let argument = process.argv[2];

console.log(reverse(argument));