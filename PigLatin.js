function translatePigLatin(str) {
  let pigLatinStr = str;
  const vowels = ["a", "e", "i", "o", "u"];

  const hasNoVowels = str
    .split("")
    .every(character => vowels.findIndex(el => el === character) <= -1);

  if (vowels.findIndex(el => el === str.charAt(0)) <= -1 && !hasNoVowels) {
    const index = str.split("").findIndex(el => vowels.indexOf(el) > -1);
    pigLatinStr = pigLatinStr
      .split("")
      .splice(index, pigLatinStr.length, "")
      .join("")
      .concat(`${str.slice(0, index)}ay`);
  } else if (hasNoVowels) {
    pigLatinStr = pigLatinStr.concat("ay");
  } else if (vowels.findIndex(el => el === str.charAt(0)) > -1) {
    pigLatinStr = pigLatinStr.concat("way");
  }
  console.log(pigLatinStr);
  return pigLatinStr;
}

translatePigLatin("consonant");
