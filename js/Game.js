/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
      this.missed = 0;
      this.phrases = [
        new Phrase('How are you'), 
        new Phrase('Gone with the wind'), 
        new Phrase('Thank you'), 
        new Phrase('Diamond'), 
        new Phrase('Please')
      ];
      this.activePhrase = null;
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
  
    startGame() {
      // Hide the overlayOverlay
      overlay.style.display = 'none';
  
      // Setting a random phrase as the active phrase
      this.activePhrase = this.getRandomPhrase();
  
      // Call 'addPhraseToDisplay()'
      this.activePhrase.addPhraseToDisplay();
  
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
  
    getRandomPhrase() {
      return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
  
    handleInteraction(userButton) {
      // Disable Selected Button
      userButton.disabled = true;
  
      // Check Letter Status
      const letterStatus = this.activePhrase.checkLetter(userButton);
  
      // Actions Based On Letter Status
      if (!letterStatus) {
        userButton.classList.add('wrong');
        this.removeLife();
      }
      else {
        userButton.classList.add('chosen');
        this.activePhrase.showMatchedLetter(userButton.textContent);
        const hasWon = this.checkForWin();
  
        // If User Has Won, Call Game Over
        if (hasWon) this.gameOver('You win!', 'win');
      }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
  
    removeLife() {
      // Increment Missed Guesses
      this.missed++;
    
      if (this.missed < 5) {
        const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
        liveHeart.setAttribute('src', 'images/lostHeart.png');
      }
      else {
        this.gameOver('Sorry, try again next time!', 'lose');
      }
  
    }


    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
  
    checkForWin() {
      const hiddenLetters = phraseOnBoard.querySelectorAll('.hide');
      
      return hiddenLetters.length === 0 ? true : false;
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
  
    gameOver(message, status) {
      // Display Overlay
      overlay.style.display = 'flex';
      overlay.className = status;
  
      // Set Text For Message
      overlay.querySelector('#game-over-message').textContent = message;
  
      // Set Text For 'Play Again' Button
      overlay.querySelector('#btn__reset').textContent = 'Play Again';
  
      // Reset Game
      // Remove Shown Letters On Board
      phraseOnBoard.innerHTML = '';
  
      // Enable All Keyboard Buttons & Reset Their Class
      qwerty.forEach(button => {
        button.disabled = false;
        button.className = 'key';
      });
  
      const hearts = document.querySelectorAll('#scoreboard img');
      for (let i = 0; i < hearts.length; i++) {
        hearts[i].setAttribute('src', 'images/liveHeart.png');
      }
  
    }
  }