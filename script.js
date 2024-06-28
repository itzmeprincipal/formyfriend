var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    
    location.replace("final_video.html");
    // button.textContent = "loading...";
    // fetch('send_mail.php')
    //   .then(response => {
    //     if (response.ok) {
    //       button.textContent = "Check Your Email 🙃";
    //     } else {
    //       console.error('Failed to send email');
    //       button.textContent = "Error 😞";
    //     }
    //   })
    //   .catch(error => {
    //     // Handle network errors or other issues
    //     console.error('Error:', error);
    //     button.textContent = "Error 😞";
    //   });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 20); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(255, 255, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 125){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 125 && frameNumber < 250){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 250){
        opacity = 0;
    }
    if(frameNumber > 250 && frameNumber < 375){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 1000) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 375 && frameNumber < 500){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        
        if (window.innerWidth < 1000) {
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 625){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        drawTextWithLineBreaks(["to be alive, and to get to spend this life with"," you as my friend"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        //context.fillText("to be alive, and to get to spend this life with"," you as my friend", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 625 && frameNumber < 750){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        drawTextWithLineBreaks(["to be alive, and to get to spend this life with"," you as my friend"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        //context.fillText("to be alive, and to get to spend this life with"," you as my friend", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 750){
        opacity = 0;
    }
    if(frameNumber > 750 && frameNumber < 875){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 875 && frameNumber < 1000){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1125){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 1000) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1125 && frameNumber < 1250){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 1000) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1250){
        opacity = 0;
    }
    if(frameNumber > 1250 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 1000) {
            drawTextWithLineBreaks(["Very Very Happy Birthday Siya, more than", "all the time and space in the universe can contain"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Very Very Happy Birthday Siya, more than all the time and space in the universe can contain", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 1375 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;


        if (window.innerWidth < 1000) {
            drawTextWithLineBreaks(["and You will get whatever you desire ", "never doubt yourself!"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("and You will get whatever you desire never doubt yourself!", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 1500 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
        context.fillText("Happy Birthday Day, Hina <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
