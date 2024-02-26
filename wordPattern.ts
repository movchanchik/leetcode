function wordPattern(pattern: string, s: string): boolean {
  const value = new Set(pattern.split(""));
  const keys = new Set(s.split(" "));

  if (value.size !== keys.size || pattern.length !== s.split("").length) {
    return false;
  }
  const map = new Map();
  let isValid = true;
  s.split(" ").map((word, index) => {
    if (!map.get(pattern.charAt(index))) {
      map.set(pattern.charAt(index), word);
    } else if (
      map.get(pattern.charAt(index)) &&
      map.get(pattern.charAt(index)) !== word
    ) {
      isValid = false;
    }
  });
  return isValid;
}

wordPattern("abba", "dog cat cat fish");
