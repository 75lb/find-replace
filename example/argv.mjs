import findReplace from '../index.mjs'

const argv = ['-vrf', 'file1.js', 'file2.js']
const combinedShortOptionRe = /^-[^\d-]{2,}$/

const result = findReplace(
  argv,
  arg => combinedShortOptionRe.test(arg),
  arg => {
    return arg
      .slice(1) /* remove initial hypen */
      .split('')
      .map(letter => '-' + letter)
  }
)

console.log(result)
