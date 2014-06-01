(function() {

  var score=0;

  var answer = prompt("What is the capital of Hawaii?");
    if (answer =="Honolulu") {
      var newscore = score+1;
    } else {
      newscore = score+0;
    }
  }

  var answer = prompt("What is the state bird?");
    if (answer == "Nene") {
        var newscore=score+1;
    } else {
      newscore = score+0;
    }
  }

  var answer = prompt("What is the Hawaiian name for Diamond Head?");
    if (answer == "Leahi") {
      var newscore = score+1;
    } else {
      newscore = score+0;
    }
  }

  var answer = prompt("What is the traditional dance of Hawaii?");
    if (answer == "hula") {
      var newscore = score+1;
    } else {
        newscore = score+0;
      }
  }

  var answer = prompt("In what year did Hawaii become a state?");
    if (answer == "1959") {
      var newscore = score+1;
    } else {
          newscore = score+0;
        }
    }
    =
  alert ("Your score is " + (newscore) + "out of 5")

})();