function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  strs.map((str, index) => {
    if (index === 0) {
      prefix = str;
    } else {
      if (prefix.length === 0) return;
      const prefixArray = prefix.split("");
      const index = prefixArray.findIndex(
        (letter, index) => str.length >= index - 1 && letter !== str[index]
      );
      if (index > -1) prefix = prefix.substring(0, index);
    }
  });
  console.log(prefix);
  return prefix;
}

longestCommonPrefix(["flower", "flower", "flower", "flower"]);
