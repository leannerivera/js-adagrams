const Adagrams = {
  drawLetters() {
    const letters = ("E".repeat(12) + "AI".repeat(9) + "O".repeat(8) +
    "NRT".repeat(6) + "DLSU".repeat(4) + "G".repeat(3) +  "BCFHMPVYW".repeat(2) +
     "JKQXZ").split(""); //split string into array
    //
    let drawing = function() {
      let usedIndices = []; //collect indices already used in this hand
      let playersLetters = []; //drawn letter storage
      for (let i = 0; i < 10; i++) {
        let rand = Math.floor (Math.random () * letters.length); //<= create as function?
        do {
          rand = Math.floor (Math.random () * letters.length);
        }
        while (usedIndices.includes(rand)); //stops once it is not included in used index list
        usedIndices.push(rand);
        playersLetters.push(letters[rand]);
      }
      return (playersLetters);
    };
    return drawing();
  },//drawLetters end

  usesAvailableLetters(input, lettersInHand) {
    let playerInput = input.split("");
    let compareValues = lettersInHand;
    let allGood = true; //default
    playerInput.forEach((ltr, i) => {

      compareValues.includes(ltr) ? compareValues.splice(i, 1) : allGood = false;
      // if ( compareValues.includes(ltr) ) {
      //   compareValues.splice(i, 1);
      // } else if (!compareValues.includes(ltr)) {
      //   allGood = false;
      // }
    });
    return allGood;
  }, //usesAvail end
  scoreWord(word) {
    let score = 0;

    if (word.length < 1) {
      return score;
    }
    else if (word.length >= 7) {
      score += 8;
    }
    word = word.toLowerCase().split("")
    const onePoint = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    const threePoint = ["b", "c", "m", "p"];
    const fourPoint = ["f", "h", "v", "w", "y"];

    word.forEach((ltr) => {
      switch(ltr) {
      case onePoint.find( alpha => alpha == ltr ): //finds ltr in array's 'alpha' values
        score += 1;
        break;
      case "d":
      case "g":
        score += 2;
        break;
      case threePoint.find( alpha => alpha == ltr ):
        score += 3;
        break;
      case fourPoint.find( alpha => alpha == ltr ):
        score += 4;
        break;
      case "k":
        score += 5;
        break;
      case "j":
      case "x":
        score += 8;
        break;
      case "q":
      case "z":
        score += 10;
        break;
      } //switch end
    }); //forEach end
    return score;
  }, //scoreWord end

  highestScoreFrom(words) {
    let hiScore = {
      word: "",
      score: 0,
    }; //hiScore end
    words.forEach((word) => {
      let score = Adagrams.scoreWord(word);
      if (score > hiScore[score]) {
        hiScore[score] = score;
        hiScore[word] = word;
      } else if (hiScore[word].length == 10) {
        return;
      } else if (hiScore[word].length < word.length && score <= hiScore[word]) {
        return;
      }
    });
    return hiScore;
  }//end of highestScoreFrom

};// Adagrams end

console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
