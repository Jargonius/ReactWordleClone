class LetterUsageTracker {

  private containedLetters: Map<string, number> = new Map();

  /**
   * It creates a new Map object, and passes in an array of arrays, where each array is a key-value
   * pair. The key is a letter, and the value is 0
   */
  constructor() {
    this.containedLetters = new Map('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => [l, 0]));
  }

  checkLetter(letter: string, correctWord: string): boolean {
    const letterCount = (correctWord.match(new RegExp(letter, 'gi')) || []).length;
    return letterCount > 0 && this.containedLetters.get(letter) < letterCount;
  }

  update(letter: string) {
    this.containedLetters.set(letter, this.containedLetters.get(letter) + 1);
  }

}

export default LetterUsageTracker;