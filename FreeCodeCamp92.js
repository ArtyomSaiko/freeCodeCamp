function factorialize(num) {
  let a = 1;
  for (let i = 2; i <= num; i++) {
    a *= i;
  }
  return a;
}

factorialize(5);