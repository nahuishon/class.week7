// define our first variable
//when someone clicks on the red circle, we want the background to turn red


// define our first variable
let redCircle = document.querySelector(".red-circle");

//what happens when someone interacts with the red circle
function turnRed() {
     document.body.style.background = "red";
     document.body.style.color = "white";
}

//add an event listener
//when someone clicks on the red circle, change the background red

redCircle.addEventListener("click", turnRed);

//defining the variable blue circle
let blueCircle = document.querySelector(".blue-circle");

function turnBlue() {
    document.body.style.background = "blue";
    document.body.style.color = "pink";
}

blueCircle.addEventListener("click",turnBlue);

//defining the variable white circle
let whiteCircle = document.querySelector(".white-circle");

function turnWhite() {
    document.body.style.background = "#fff";
    document.body.style.color = "black";
}

whiteCircle.addEventListener("click",turnWhite
);

//defining the variable black circle
let blackCircle = document.querySelector(".black-circle");

function turnblack() {
    document.body.style.background = "#000";
    document.body.style.color = "white";
}

blackCircle.addEventListener("click",turnblack);

//defining the variable orange squre
let orangeBox = document.querySelector(".orange-box");

function turnblack() {
    document.body.style.background = "yellow";
    document.body.style.color = "pink";
}

orangeBox.addEventListener("click",turnblack);


//when user hovers on the word "corner"
//cat image appears
//when user hovers off the word "corner"
//cat image disappers

let flyingCat = document.querySelector(".cat");
let hoverCorner = document.querySelector(".show-cat");

hoverCorner.addEventListener("mouseover", function(){
 flyingCat.classList.add("active");
});

hoverCorner.addEventListener("mouseout",hideCat);
 

function hideCat() {
    flyingCat.classList.remove("active");
});

//dog image

let dogs = document.querySelector(".dogs");

//the word halfway
let increaseDogImage = document.querySelector('.bigger-dogs');

increaseDogImage.addEventListener("mouseover",function(){
 dogs.classList.add("active");
})

increaseDogImage.addEventListener("mouseout",function(){
    dogs.classList.remove("active");
})
 
//pig show 
let pig = document.querySelector(".pig");

//the word halfway
let increasePigImage = document.querySelector('.flying-pig');

increasePigImage.addEventListener("mouseover",function(){
 pig.classList.add("active");
})

increasePigImage.addEventListener("mouseout",function(){
    pig.classList.remove("active");
})




