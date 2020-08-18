const sumAll = function(first, second) {
    if (first < 0 || second < 0) return "ERROR";
    if (typeof first !== "number" || typeof second !== "number") return "ERROR";
    if (first > second) {
      const temp = first;
      first = second;
      second = temp;
    }
    let sum = 0;
    for (let i = first; i < second + 1; i++) {
      sum += i;
    }
    return sum;
  };
  
module.exports = sumAll
