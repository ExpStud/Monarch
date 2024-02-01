
export const capitalizeFirstLetter = (word: string): string => {
  // Check if the word is not an empty string
  if (word.length === 0) {
    return word;
  }

  // Capitalize the first letter and concatenate the rest of the word
  return word.charAt(0).toUpperCase() + word.slice(1);
};