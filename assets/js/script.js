// Let's choose a direction

// Instruct to choose
alert("Choose a direction");

var chooseNow = function () {
  //Ask which way
  var askMe = "";
  var askMe = prompt("Will you go left or right");

  // Initial Alert: Check direction
  //
  if (askMe === "LEFT" || askMe === "left") {
    alert("You have choosen left.");
  } 

  else if (askMe === "RIGHT" || askMe === "right") {
    alert("You have choosen right.");
  } 
  
  else {
    var wrongDir = confirm("You must choose only left or right. Choose again");
    if (wrongDir) {
      chooseNow();
    } else {
      alert("You stay in place.");
    }
  }
};

chooseNow();
