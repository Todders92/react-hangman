const words = [
  "giraffe",
  "welcome to the black parade",
  "mongoose",
  "helena",
  "chimpanzee",
  "salmon",
  "spotted owl",
  "famous last words"
]

function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

export { randomWord }
