function primeNumbers(n) {

  arrPrim = []

  num: for (let i = 2; i <= n; i++) {
    for (let j = 2, max = Math.sqrt(i); j <= max; j++) {
      if (i % j === 0) {
        continue num;
      }
    }
    // console.log(i);
    arrPrim.push(i);
  }
  console.log(arrPrim);
}

console.time();
console.log(primeNumbers(+process.argv[2]));
console.timeEnd();