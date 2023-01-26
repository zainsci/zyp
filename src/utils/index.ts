import Words from "./words";

export const generateSentence = () => {
  const senLength = 75;
  const words = [];

  for (let i = 0; i < senLength; i++) {
    words.push(Words[Math.round(Math.random() * Words.length)]);
  }

  console.log(words.join(" "));
  return words.join(" ");
};

export const isAlpha = (ch: string) => {
  return /^[A-Z]$/i.test(ch);
};
