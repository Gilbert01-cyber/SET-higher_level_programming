#!/usr/bin/node
const arg = process.argv[2];
const num = Number(arg);

if (arg === undefined || Number.isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${Math.floor(num)}`);
}
