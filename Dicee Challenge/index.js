
//document.querySelector("h1").innerHTML = "hello buddies";

//  creating new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6.

var randomNumber1 = Math.random() * 6 ; 
randomNumber = Math.floor(randomNumber1) + 1; // 1-6 number
console.log(randomNumber1);

// in one line randomNumber1

// var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage = "dice" + randomNumber + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage ; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource );


// randomNumber2

var randomNumber2 = Math.random() * 6 ; 
randomNumber2 = Math.floor(randomNumber2) + 1; // 1-6 number
console.log(randomNumber2);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// for winner

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 win !";
}
 else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 win 🚩🚩";
}
else{ 
    document.querySelector("h1").innerHTML = "Draw !";
}

