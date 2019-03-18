// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const cash = {
      "H": 50,
      "Q": 25,
      "D": 10,
      "N": 5,
      "P": 1
    };
    let exchange = {};
    if (currency <= 0) {
      return {};
    } else if (currency > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
      for (let i in cash) {
        exchange[i] = Math.floor(currency / cash[i]);
        currency = currency - exchange[i] * cash[i];
        if (exchange[i] == 0) {
          delete exchange[i];
        }
      }
    return exchange;
    }
}
