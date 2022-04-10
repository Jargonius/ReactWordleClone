class LetterUsageTracker {

  private containedLetters: Map<string, number> = new Map();

  constructor() {
    this.containedLetters = new Map('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((l) => [l, 0]));
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