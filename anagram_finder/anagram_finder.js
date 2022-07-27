const AnagramFinder = function (word) {
    this.word=word.toLowerCase().split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(w => {
        if (w.length === this.word.length && w != this.word.join('')) {
        return this.word.every(l => w.toLowerCase().split('').includes(l));
        };
    })
}

module.exports = AnagramFinder;
