function isHappy(n: number): boolean {
  if (n < 0) return false;
  let checkedSet = new Set();
  let newNumber = 0;
  let oldNumber = n;
  while (!checkedSet.has(oldNumber)) {
    console.log(checkedSet);
    checkedSet.add(oldNumber);
    while (oldNumber > 0) {
      console.log(oldNumber);
      newNumber += Math.pow(oldNumber % 10, 2);
      oldNumber = Math.floor(oldNumber / 10);
      console.log(newNumber);
    }

    if (newNumber === 1) {
      console.log("Yes");
      return true;
    }

    oldNumber = newNumber;
    newNumber = 0;
  }
  console.log("no");
  return false;
}

isHappy(19);
