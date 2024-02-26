function isAnagram(s: string, t: string): boolean {
  const str1 = createMap(s);
  const str2 = createMap(t);
  let isAnagram = true;
  if (str1.size !== str2.size) return false;
  str1.forEach((value, key) => {
    if (!str2.get(key) || value !== str2.get(key)) {
      isAnagram = false;
    }
  });
  return isAnagram;
}

const createMap = (s: string): Map<string, number> => {
  const map = new Map();

  s.split("").map((letter) => {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  });
  return map;
};

isAnagram("rat", "car");
