#!/usr/bin/node
const arg = process.argv[2];
const size = Number(arg);

if (arg === undefined || Number.isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
