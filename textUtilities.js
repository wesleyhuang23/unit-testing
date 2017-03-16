var expect = require('chai').expect;

expect(true).to.be.true;

function titleCase(title){
    var words = title.split(' ');
    var titleCasedWords = words.map(function(word){
        return word[0].toUpperCase() + word.substring(1);
    });
    return titleCasedWords.join(' '); 
};
//defining the function

// testing the spcific function by name
expect(titleCase('the great mouse detective')).to.be.a('string'); //be a type
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective'); //must be exactly like this