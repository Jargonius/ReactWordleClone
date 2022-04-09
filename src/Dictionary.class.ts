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

    this.dictionaries.forEach((dict, index) => {
      dict.forEach(elem => {
        const key = `${index + 3}${elem.obscurity}`;
        const entries: WordEntry[] = this.dictionary.get(key) || [];
        const newEntry = new WordEntry(elem.word.toUpperCase(), elem.obscurity, 3);
        this.dictionary.set(key, [...entries, newEntry]);
      });
    });
  }

  get length(): number { return this.dictionary.size; }

  getRandomWord() {
    const index = Math.round(Math.random() * this.length);
    const words = Array.from(this.dictionary.values()).flat().map(val => val.word);
    return words[index].toUpperCase();
  }

  lookup(word: string) {
    word = word.toUpperCase();
    const entries = this.dictionary.get(`${this.wordLength}${this.obscurity}`);
    return entries?.find(entry => entry.word === word)?.word == word;
  }
}

export default Dictionary;