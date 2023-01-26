import Words from "./words";

export const generateSentence = () => {
  const senLength = 75;
  const words = [];

  for (let i = 0; i < senLength; i++) {
    words.push(Words[Math.round(Math.random() * Words.length)]);
  }
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);

  return words.join(" ");
};

export const isAlpha = (ch: string) => {
  return /^[A-Z]$/i.test(ch);
};
