import findReplace from 'find-replace'

const fruits = ['apple', 'pear', 'nectarine', 'pineapple', 'peach']
const bad = ['pear', 'pineapple']

const result = findReplace(
  fruits,
  fruit => bad.includes(fruit)
)

console.log(result)
