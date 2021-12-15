window.onload = chooseRandomImage;
const images = new Array(
    "images/MyChoiceLogo1.svg","images/MyChoiceLogo4.svg" ,"images/MyChoiceLogo5.svg","images/MyChoiceLogo6.svg");

const logo = document.querySelector(".logo");

function chooseRandomImage() {
var randomNumber = Math.floor(Math.random() * images.length);
logo.src = images[randomNumber];
}



var backgroundColors = new Array (
"#9ab0ef","#f1b605","#f15041","#1c594e","#8879f1"
);
document.body.style.background=backgroundColors[Math.floor(Math.random() * backgroundColors.length)
]
