function squareRoot(n) {
  let low = 0, high = n, ans = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid * mid === n) return mid;

    if (mid * mid < n) {
      low = mid + 1;
      ans = mid;
    } else {
      high = mid - 1;
    }
  }

  return ans; 
}

console.log(squareRoot(25));