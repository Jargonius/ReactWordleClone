class WordGuess {

  private _word: string = '';
  private _invalidWord: boolean = false;
  private letterStates: string[];

  constructor(word: string, letterStates: string[], wordLength: number) {
    this.word = word;
    this.letterStates = letterStates ? letterStates : new Array<string>(wordLength).fill('');
  }

  set invalid(invalid: boolean) { this._invalidWord = invalid; }
  get invalid(): boolean { return this._invalidWord; }

  get word(): string { return this._word; }
  set word(word: string) { this._word = word; }

  getLetterState(index: number): string { return this.letterStates[index]; }
  setLetterState(index: number, state: string) { this.letterStates[index] = state; }

}

export default WordGuess;