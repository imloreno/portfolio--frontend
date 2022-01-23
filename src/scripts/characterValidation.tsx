const EXP_REG_TEXT = /[&/\\#,+(!)$~%.'":;*<>{}]/g;
const REG_EXP_EMAIL = /^[^@'"><;:, ]+@[^@'"><;:, ]+\.[a-zA-Z]{2,}$/;

//Verify if is valid
const isValid = (word: string): boolean => {
  return !EXP_REG_TEXT.test(word) ? true : false;
};

//Validate if is email
const isEmail = (word: string): boolean => {
  const RES = word.toLowerCase();
  return REG_EXP_EMAIL.test(RES);
};

//Replace characters
const replaceCharacters = (word: string): string => {
  return word.replace(EXP_REG_TEXT, ",");
};

export { isValid, isEmail, replaceCharacters };
