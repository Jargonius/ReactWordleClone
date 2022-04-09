import dictionary3 from '../words/3-letter-words.json';
import dictionary4 from '../words/4-letter-words.json';
import dictionary5 from '../words/5-letter-words.json';
import dictionary6 from '../words/6-letter-words.json';
import dictionary7 from '../words/7-letter-words.json';
import dictionary8 from '../words/8-letter-words.json';
import WordEntry from './Word.class';

class Dictionary {
  private dictionaries: WordEntry[][] = Array(9).fill([]);
  private _words: WordEntry[] = [];

  constructor(wordLength: number) {
    this.dictionaries[3] = dictionary3.map(w => new WordEntry(w.word, 0, 3));
    this.dictionaries[4] = dictionary4.map(w => new WordEntry(w.word, 0, 4));
    this.dictionaries[5] = dictionary5.map(w => new WordEntry(w.word, 0, 5));
    this.dictionaries[6] = dictionary6.map(w => new WordEntry(w.word, 0, 6));
    this.dictionaries[7] = dictionary7.map(w => new WordEntry(w.word, 0, 7));
    this.dictionaries[8] = dictionary8.map(w => new WordEntry(w.word, 0, 8));
    this.setWords(wordLength);
  }


  private setWords(wordLength: number) {
    this._words = this.dictionaries[wordLength]
  }

  get words(): WordEntry[] { return this._words}
}

export default Dictionary;