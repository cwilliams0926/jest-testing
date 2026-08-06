const shiftCharacter = (char, shiftFactor) => {
  const normalizedShift = ((shiftFactor % 26) + 26) % 26;
  const code = char.charCodeAt(0);

  // Uppercase A-Z
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
  }

  // Lowercase a-z
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
  }

  // Non-letter characters (spaces, punctuation, numbers) pass through unchanged
  return char;
};

const caesarCipher = (string, shiftFactor) => {
  const cipherArray = Array.from(string);
  const shiftedArray = cipherArray.map((char) =>
    shiftCharacter(char, shiftFactor)
  );
  return shiftedArray.join('');
};

export default caesarCipher;
