import dictionary3 from '../words/3-letter-words.json';
import dictionary4 from '../words/4-letter-words.json';
import dictionary5 from '../words/5-letter-words.json';
import dictionary6 from '../words/6-letter-words.json';
import dictionary7 from '../words/7-letter-words.json';
import dictionary8 from '../words/8-letter-words.json';
import Obscurity from './Obscurity.enum';
import WordEntry from './WordEntry.class';

import Localbase from 'localbase'
let db = new Localbase('db')

class Dictionary {
  private dictionary: Map<string, WordEntry[]> = new Map<string, WordEntry[]>();
  private wordLength: number = 0;
  private obscurity: Obscurity = Obscurity.Common;
  private _collectionName = '';
  private _wordNum = 0;
  private dictionaries = [
    dictionary3,
    dictionary4,
    dictionary5,
    dictionary6,
    dictionary7,
    dictionary8
  ];

  /**
   * It takes a word length and an obscurity level, and then it creates a new dictionary entry for each
   * word in the dictionary, and then it adds that entry to the dictionary.
   * 
   * The first thing we do is set the word length and obscurity level.
   * Then we loop through each dictionary.
   * For each dictionary, we loop through each word in the dictionary.
   * For each word, we create a new dictionary entry.
   * Then we add that entry to the dictionary.
   * The dictionary is a Map, which is a key-value store.
   * The key is a string that is the word length and the obscurity level.
   * The value is an array of WordEntry objects.
   * The WordEntry object is a class that contains the word, the obscurity level, and the word length.
   * 
   * @param {number} wordLength - number - the length of the word you want to generate
   * @param {Obscurity} obscurity - Obscurity = Obscurity.Normal;
   */
  constructor(wordLength: number, obscurity: Obscurity) {
    this.wordLength = wordLength;
    this.obscurity = obscurity;
    this.initializeDB(false, false);
  }

  private initializeDB(showLogs: boolean, reInit: boolean) {
    db.config.debug = showLogs;
    if (reInit) {
      db.delete();
    }
    this.dictionaries.forEach((dict, dictIndex) => {
      const length = dictIndex + 3;
      const collectionName = `${length}-letter-words`;
      db.collection(collectionName).get().then((words: any[]) => {
        // if (words.length == 0) {
          dict.forEach((elem, wordIndex) => {
            db.collection(collectionName).add(
              // new WordEntry(elem.word, elem.obscurity, length), `${wordIndex}`
              {
              id: wordIndex,
              word: elem.word,
              obscurity: elem.obscurity
            }
            );
          });
        // }
      });
    });
  }

  /**
   * If the key property is accessed, return the wordLength property concatenated with the obscurity
   * property.
   * @returns The key property is being returned.
   */
  get key(): string { return `${this.wordLength}${this.obscurity}`; }

  get collectionName(): string { return `${this.wordLength}-letter-words`; }

  /**
   * If the key exists in the dictionary, return the length of the array stored at that key, otherwise
   * return 0.
   * @returns The length of the array stored in the dictionary at the key.
   */
  get length(): number { return (this.dictionary.get(this.key) || []).length; }

  /**
   * If the key exists in the dictionary, return the value, otherwise return an empty array.
   * @returns The entries for the key.
   */
  get entries(): WordEntry[] { return this.dictionary.get(this.key) || []; }

/**
 * It takes a random number between 0 and the length of the dictionary, then uses that number to get a
 * random word from the dictionary.
 * @returns A random word from the dictionary.
 */
  getRandomWord() {
    // const index = Math.round(Math.random() * this.length);
    // const words = Array.from(this.dictionary.values()).flat().map(val => val.word);
    // return words[index].toUpperCase();

    db.collection(this.collectionName).get().then((words: any[]) => {
      const index = Math.round(Math.random() * words.length);
      const word = words[index].word;
      return word.toUpperCase();
    });
    // return 'Apple'
  }

/**
 * If the word is in the dictionary, return true, otherwise return false.
 * @param {string} word - The word to look up.
 * @returns The filter method returns an array of entries that match the word.
 */
  lookup(word: string) {
    // word = word.toUpperCase();
    // return this.entries.filter(entry => entry.word === word)[0].word == word;
    db.collection('users').doc({ word: word.toLowerCase() }).get().then((w: any) => {
      console.log(w)
    });
  }
}

export default Dictionary;