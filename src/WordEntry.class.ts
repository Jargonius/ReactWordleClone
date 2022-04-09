import Obscurity from "./Obscurity.enum";

class WordEntry {

  private _word: string = '';
  private _obscurity: number = 0;
  private _length: number = 0;

  constructor(word: string, obscurity: Obscurity, length: number) {
    this.word = word;
    this.obscurity = obscurity;
    this.length = length;
  }

  get word(): string { return this._word; }
  set word(value: string) { this._word = value; }

  get obscurity(): number { return this._obscurity; }
  set obscurity(value: number) { this._obscurity = value; }

  get length(): number { return this._length; }
  set length(value: number) { this._length = value; }

  clone(): WordEntry { return new WordEntry(this.word, this.obscurity, this.length); }

}

export default WordEntry;