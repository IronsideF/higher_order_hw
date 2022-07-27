const IsogramFinder = function (word) {
    this.word=word.toLowerCase().split('')
}

IsogramFinder.prototype.isIsogram = function () {
    // let letters = [];
    // let flag = true;
    // workingWord = this.word;
    // workingWord.forEach((l) => {
    //     if (letters.includes(l)) {
    //         flag = false;
    //     } else {
    //         letters.push(l);
    //     };
    // });
    // return flag;
    return this.word.every((l, i) => this.word.indexOf(l) === i)
}

module.exports = IsogramFinder;
