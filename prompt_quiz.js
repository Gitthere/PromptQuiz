(function() {

  var score = 0;
  var newscore = 0;

  var answer = prompt("What is the capital of Hawaii?").toLowerCase();
    if (answer == "honolulu") {
      var newscore = newscore+1;
      alert("Correct!")
    } else {
      newscore = newscore+0; 
      alert("Sorry, the answer is Honolulu.")
  }

  var answer = prompt("What is the state bird?").toLowerCase();
    if (answer == "nene") {
        var newscore = newscore+1;
        alert("That's right.")
    } else {
      newscore = newscore+0; 
      alert("Nope. The answer is Nene.")  
  }

  var answer = prompt("What is the Hawaiian name for Diamond Head?").toLowerCase();
    if (answer == "leahi") {
      var newscore = newscore+1;
      alert("Awesome!")
    } else {
      newscore = newscore+0;  
      alert("Nice try, but the correct answer is Leahi.")  
  }

  var answer = prompt("What is the traditional dance of Hawaii?").toLowerCase();
    if (answer == "hula") {
      var newscore = newscore+1;
      alert("You are right again.")
    } else {
        newscore = newscore+0; 
        alert("How could you not know that?")     
  }

  var answer = prompt("In what year did Hawaii become a state?");
    if (answer == "1959") {
      var newscore = newscore+1;
      alert("You got it, you braniac.")
    } else {
          newscore = newscore+0; 
          alert("Not even close. The answer is 1959.  Please go buy a history book.")     
    }
    
  alert ("Your score is " + (newscore) + " out of 5")

})();