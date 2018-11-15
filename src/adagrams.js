const Adagrams = {
  drawLetters() {
    const letters = ("E".repeat(12) + "AI".repeat(9) + "O".repeat(8) +
    "NRT".repeat(6) + "DLSU".repeat(4) + "G".repeat(3) +  "BCFHMPVYW".repeat(2) +
     "JKQXZ").split("");
    //
    let drawing = function() {
      let usedIndices = [];
      let playersLetters = [];
      for (let i = 0; i < 10; i++) {
        let rand = Math.floor (Math.random () * letters.length); //<= create as function?
        do {
          rand = Math.floor (Math.random () * letters.length);
        }
        while (usedIndices.includes(rand)); //stops once it is not included in index list
        usedIndices.push(rand);
        playersLetters.push(letters[rand]);
      }
      return (playersLetters);
    };

    return drawing();
  },//drawLetters end

  usesAvailableLetters(input, lettersInHand) {
    let playerInput = input.split("");
    let compareValues = Object.assign({}, lettersInHand);
    let allGood = true; //default
    playerInput.forEach((ltr, i) => {
      if (compareValues.includes(ltr)) {
        compareValues.splice(i, 1);
      } else if (!compareValues.includes(ltr)) {
        allGood = false;
      }
    });
    return allGood;
  }, //usesAvail end

};// Adagrams end

console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
