// function sum(arr) {
//   return arr.reduce(function(a, b) {
//     return a + b
//   }, 0)
// }

const sum = (arr) => {
  return arr.reduce((a, b) => {
    return a + b
  }, 0)
}

module.exports.sum = sum