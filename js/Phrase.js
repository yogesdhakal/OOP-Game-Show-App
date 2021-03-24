/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
  
    addPhraseToDisplay() {
      // Splitting the  Phrase Into Letters & Words
      const splitPhrase = this.phrase.split('');
  
      // Displaying Phrase On Board
      let html = '';
  
      splitPhrase.forEach(character => {
        if (character === ' ') {
          html += `
            <li class="space"> </li>
          `;
        } 
        else {
          html += `
            <li class="hide letter ${character}">${character}</li>
          `;
        }
      })
  
      phraseOnBoard.innerHTML = html;
  
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
  
    checkLetter(userButton) {
      return this.phrase.includes(userButton.textContent) ? true : false;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
  
    showMatchedLetter(userLetter) {
      const lettersOnBoard = phraseOnBoard.querySelectorAll('.hide');
  
      lettersOnBoard.forEach(letter => {
        if (letter.textContent === userLetter) {
          letter.classList.replace('hide', 'show');

          //shows animation at after certain time 
          setInterval(function(){ letter.classList.add('rainbow'); }, 200);
          
          
        }
      })
      
    }
  }