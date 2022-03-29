import WordGuess from "./WordGuess.class";

class WordGuesses {

  private guesses: WordGuess[];
  private guessNum: number;
  private wordLength: number;

  // get guesses(): WordGuess[] {
  //   return this.guesses;
  // }

  // set guesses(value: WordGuess[]) {
  //   this.guesses = value;
  // }

  constructor(guessNum: number, wordLength: number) {
    this.guessNum = guessNum;
    this.wordLength = wordLength;
    // For some dumb reason js fills the array with shallow copies.
    // The solution is to fill with a primitive value and then map each value to a new object.
    this.guesses = new Array(guessNum).fill(undefined).map(() => new WordGuess('', [], wordLength));
  }

  clone(): WordGuesses {
    let clone = new WordGuesses(this.guessNum, this.wordLength);
    clone.setGuesses(this.guesses);
    return clone;
  }

  setInvalidWord(index: number, invalid: boolean) {
    this.guesses[index].setInvalid(invalid);
  }

  getWord(index: number): string {
    return this.guesses[index].getWord();
  }

  setWord(index: number, word: string) {
    this.guesses[index].setWord(word);
  }

  getGuesses(): WordGuess[] {
    return this.guesses;
  }

  setGuesses(guesses: WordGuess[]) {
    this.guesses = guesses;
  }

}

export default WordGuesses;