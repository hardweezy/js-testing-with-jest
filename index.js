module.exports = {
  sum: function (a, b) {
    return a + b
  },
  baseSalary: function (yearlySalary) {
    if (yearlySalary) {
      return (yearlySalary / 12)
    }
  },
  stringPromise: function () {
    return new Promise((resolve) => resolve('peanut butter'))
  }
}
