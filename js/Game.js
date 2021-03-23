/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// the game class

class Game {

    constructor(){
       this.missed = 0;
       this.phrases = [
        new Phrase('How are you'), 
        new Phrase('Hello March'), 
        new Phrase('Blowing in the wind'), 
        new Phrase('hallelujah'), 
        new Phrase('lonely')

       ];
       this.activePhrase = null; 
    }

    /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {}

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {};


}