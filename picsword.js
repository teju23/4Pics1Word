window.onload = function() {
  var word = ['cook', 'ball', 'play', 'old'];
  var alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  var letters;
  var guess = '';
  var guessesWord = [];
  var guesses = [];
  var index = Math.floor(Math.random() * word.length);
  var guessWord = word[index];
  console.log(word.length, index, guessWord);
  var image1 = ['cook1.jpg', 'cook2.jpg', 'cook3.jpg', 'cook4.jpg'];
  var image2 = ['old.jpg', 'old1.jpg', 'old3.jpg', 'old2.jpg'];
  var image3 = ['ball1.jpg', 'ball2.jpg', 'ball3.jpg', 'ball4.jpg'];
  var image4 = ['play1.jpg', 'play2.jpg', 'play3.jpg', 'play4.jpg'];
  if (guessWord == 'cook') {
    var myElem = document
      .getElementsByClassName('wordpics')
      .createElement('IMG');
    for (var i = 0; i < 4; i++) {
      var x = myElem.appendChild(img);
      x.setAttribute('id', 'Div1');
      x.setAttribute('src', image1[i]);
      x.setAttribute('width', '300');
      x.setAttribute('height', '220');
      x.setAttribute('alt', 'The 4pics1word');
      document.body.appendChild(x);
    }
  }
  if (guessWord === 'old') {
    var myElem = document.getElementById('wordPics');
    for (var i = 0; i < 4; i++) {
      var x = document.createElement('IMG');
      x.setAttribute('id', 'Div1');
      x.setAttribute('src', image2[i]);
      x.setAttribute('width', '300');
      x.setAttribute('height', '220');
      x.setAttribute('alt', 'The 4pics1word');
      document.body.appendChild(x);
    }
  }
  if (guessWord === 'ball') {
    var myElem = document.getElementById('wordPics');
    for (var i = 0; i < 4; i++) {
      var x = document.createElement('IMG');
      x.setAttribute('id', 'Div1');
      x.setAttribute('src', image3[i]);
      x.setAttribute('width', '300');
      x.setAttribute('height', '220');
      x.setAttribute('alt', 'The 4pics1word');
      document.body.appendChild(x);
    }
  }
  if (guessWord === 'play') {
    var myElem = document.getElementById('wordPics');
    for (var i = 0; i < 4; i++) {
      var x = document.createElement('IMG');
      x.setAttribute('id', 'Div1');
      x.setAttribute('src', image4[i]);
      x.setAttribute('width', '300');
      x.setAttribute('height', '220');
      x.setAttribute('alt', 'The 4pics1word');
      document.body.appendChild(x);
    }
  }
  var buttons = () => {
    mybuttons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('span');
      list.id = 'letter';
      list.innerHTML = `${alphabet[i]}`;
      wordCheck();
      mybuttons.appendChild(letters);
      letters.appendChild(list);
    }
  };
  wordGuess = () => {
    wordHolder = document.getElementById('wordShow');
    correct = document.createElement('ul');
    for (var i = 0; i < guessWord.length; i++) {
      correct.setAttribute('id', 'myword');
      guess = document.createElement('p');
      guess.setAttribute('class', 'guess');
      if (guessWord[i] == '-') {
        guess.innerHTML = '-';
      } else {
        guess.innerHTML = '_';
      }
      guessesWord[i] = '_';
      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };
  wordCheck = () => {
    list.onclick = function() {
      var guess = this.innerHTML;
      this.setAttribute('class', 'active');
      this.onclick = null;
      for (var i = 0; i < guessWord.length; i++) {
        if (guessWord[i] === guess) {
          guesses[i].innerHTML = guess;
          guessesWord[i] = guess;
        }
      }
    };
  };
  buttons();
  wordGuess();
  wordCheck();
};
