class WordGuess {

  private word: string;
  private invalidWord: boolean = false;
  private letterStates: string[];

  constructor(word: string, letterStates: string[], wordLength: number) {
    this.word = word;
    this.letterStates = letterStates ? letterStates : new Array<string>(wordLength).fill('');
  }

  setInvalid(invalid: boolean) {
    this.invalidWord = invalid;
  }

  isInvalid(): boolean {
    return this.invalidWord;
  }

  getWord(): string {
    return this.word;
  }

  setWord(word: string) {
    this.word = word;
  }

  getLetterState(index: number): string {
    return this.letterStates[index];
  }

  setLetterState(index: number, state: string) {
    this.letterStates[index] = state;
  }

}

export default WordGuess;