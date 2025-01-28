function charCount(str) {
  if (typeof str !== "string") {
    return;
  }
  let obj = {};
  strWithoutSpaces = str.split(" ").join("").toLocaleLowerCase();
  for (let i = 0; i < strWithoutSpaces.length; i++) {
    char = strWithoutSpaces[i];
    if (obj[char] > 0) {
      // that line means is exist
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

console.log(charCount("Your PIN number is 1234!"));
