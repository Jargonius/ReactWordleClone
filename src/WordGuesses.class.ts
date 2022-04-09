import WordGuess from "./WordGuess.class";

class WordGuesses {

  private _guesses: WordGuess[] = [];
  private guessNum: number;
  private wordLength: number;

  constructor(guessNum: number, wordLength: number) {
    this.guessNum = guessNum;
    this.wordLength = wordLength;
    // For some dumb reason js fills the array with shallow copies.
    // The solution is to fill with a primitive value and then map each value to a new object.
    this.guesses = new Array(guessNum).fill(undefined).map(() => new WordGuess('', [], wordLength));
  }

  clone(): WordGuesses {
    let clone = new WordGuesses(this.guessNum, this.wordLength);
    clone.guesses = this.guesses;
    return clone;
  }

  setInvalidWord(index: number, invalid: boolean) {
    this.guesses[index].invalid = invalid;
  }

  getWord(index: number): string { return this.guesses[index].word; }
  setWord(index: number, word: string) { this.guesses[index].word = word; }

  get guesses(): WordGuess[] { return this._guesses; }
  set guesses(value: WordGuess[]) { this._guesses = value; }

  getGuess(index: number) {
    return this.guesses[index];
  }

}

export default WordGuesses;