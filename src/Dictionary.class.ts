import dictionary3 from '../words/3-letter-words.json';
import dictionary4 from '../words/4-letter-words.json';
import dictionary5 from '../words/5-letter-words.json';
import dictionary6 from '../words/6-letter-words.json';
import dictionary7 from '../words/7-letter-words.json';
import dictionary8 from '../words/8-letter-words.json';
import Obscurity from './Obscurity.enum';
import WordEntry from './WordEntry.class';

class Dictionary {
  private dictionary: Map<string, WordEntry[]> = new Map<string, WordEntry[]>();
  private wordLength: number = 0;
  private obscurity: Obscurity = Obscurity.Common;
  private dictionaries = [
    dictionary3,
    dictionary4,
    dictionary5,
    dictionary6,
    dictionary7,
    dictionary8
  ];

  constructor(wordLength: number, obscurity: Obscurity) {
    this.wordLength = wordLength;
    this.obscurity = obscurity;

    // this.dictionaries.forEach((dict, index) => {
      this.dictionaries[wordLength-3].forEach(elem => {
        const key = `${wordLength}${elem.obscurity}`;
        const entries: WordEntry[] = this.dictionary.get(key) || [];
        const newEntry = new WordEntry(elem.word.toUpperCase(), elem.obscurity, wordLength);
        this.dictionary.set(key, [...entries, newEntry]);
      });
    // });
  }

  get key(): string { return `${this.wordLength}${this.obscurity}`; }

  get length(): number { return (this.dictionary.get(this.key) || []).length; }

  get entries(): WordEntry[] { return this.dictionary.get(this.key) || []; }

  getRandomWord() {
    const index = Math.round(Math.random() * this.length);
    const words = Array.from(this.dictionary.values()).flat().map(val => val.word);
    return words[index].toUpperCase();
  }

  lookup(word: string) {
    word = word.toUpperCase();
    return this.entries.filter(entry => entry.word === word)[0].word == word;
  }
}

export default Dictionary;