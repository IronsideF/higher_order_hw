const UpperCaser = function (words) {
    this.words=words
}

UpperCaser.prototype.toUpperCase = function () {
    return this.words.map(w => w.toUpperCase())
}

module.exports = UpperCaser;
