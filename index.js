var randomNumberOne=Math.round(Math.random()*6)+1;
var randomConcactination="images/dice"+randomNumberOne+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomConcactination);
var randomNumber2=Math.round(Math.random()*6)+1;
var randomConcactination2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomConcactination2);

if(randomNumberOne>randomNumber2){

    document.querySelector("h1").innerHTML="🚩Player one wins";
}
else if(randomNumber2>randomNumberOne){

    document.querySelector("h1").innerHTML="Player 2 wins 🚩";

}
else {
    document.querySelector("h1").innerHTML="DRAW!";
}

