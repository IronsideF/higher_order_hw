const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(l => this.phrase.toLowerCase().includes(l))
}

module.exports = PangramFinder;
