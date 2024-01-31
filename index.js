// RandomNumber1
var randomNumber1=Math.floor(Math.random()*6)+1;
var imagePath1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",imagePath1);

// RandomNumber2
var randomNumber2=Math.floor(Math.random()*6)+1;
var imagePath2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",imagePath2);


// conditions

if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerText="It's an Draw🚩";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="🚩Player 1 Wins!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText="🚩Player 2 Wins!!";
}















