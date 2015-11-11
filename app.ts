let word: string = '';
let wordDisplay: string = '';
let numberOfGuesses: number = 1;
$(document).ready(function() {

  let words = ['grandmother', 'conditioner', 'neighbour', 'university', 'furniture', 'basketball', 'refridgerator', 'mathematics', 'astronomy', 'sausage', 'codercamps'];
  let idx: number = Math.floor(Math.random() * words.length);

  word = words[idx];

  for (let i: number = 0; i < word.length; i++) {
    wordDisplay += '_';
  }
  $('#display1').html('<h4> ' + wordDisplay + ' </h4>');

  $('#submit').on('click', function() {
    let guess: string = $('#userLetter').val();
    makeGuess(guess);
  });
});

function makeGuess(guess: string) {

  if (guess.length !== 0) {
    if (numberOfGuesses < 6) {

      let idx: number = word.indexOf(guess);

      if (guess == word) { // the user can finish the word
        wordDisplay = word;
        setWinOrLose('Congratulations! You won!');
      }
      else if (idx < 0) { // the letter wansn't in the word
        setImage(numberOfGuesses++);
        $('#numberOfGuesses').text(numberOfGuesses);
      }
      else {             // the letter is in the word
        while(idx >= 0) {
          wordDisplay = wordDisplay.substring(0, idx) + guess + wordDisplay.substr(idx + 1);
          idx = word.indexOf(guess, idx + 1);
        }
      }
    }
    else {
      setWinOrLose('Game Over! You lost!');
      setImage(numberOfGuesses);
    }
  }

  if (wordDisplay === word) {
    setWinOrLose('Congratulations! You won!');
  }
  $('#display1').html(wordDisplay);
  clearInput();
}

function setWinOrLose(message:string) {
  $('#display2').text(message);
}

function setImage(num:number) {
  $('#image').attr('src', '0' + num + '.png');
}

function clearInput() {
  $('#userLetter').val('');
}
