const e = {
    "will you be my valentine?": "https://media1.tenor.com/m/wrK_6KnCPhsAAAAC/cat-dance.gif",
    "think again": "https://media1.tenor.com/m/GOabrbLMl4AAAAAd/plink-cat-plink.gif",
    "you really don't wanna be my valentine?": "https://media1.tenor.com/m/89MPCBQDPKYAAAAd/plink-nerd.gif",
    "please be my valentine": "https://media1.tenor.com/m/pFz1Q12_hXEAAAAd/cat-holding-head-cat.gif",
    "I'm begging you :sob:": "https://media.tenor.com/UdThavVus9oAAAAi/peach-and.gif",
    "please, please, please...": "https://media.tenor.com/r12YOeLvoLsAAAAi/sad-cute.gif",
    "you're the purrfect valentine": "https://media1.tenor.com/m/BrSW_82G4xkAAAAC/pa-ti-bb.gif",
    "let's celebrate love together": "https://media1.tenor.com/m/MHcdyIl-GGkAAAAC/mochi-mochimochi.gif",
    "my heart meows for you": "https://media1.tenor.com/m/XAabbheOS24AAAAC/goma-happy.gif",
    "you make my whiskers tingle": "https://media1.tenor.com/m/QL6iJs82s1gAAAAC/pusheen-cat.gif",
    "thousands please": "https://media1.tenor.com/m/Y3j6d3RoSEoAAAAC/sad-cat-content-aware-scale.gif",
    "Please say yes!": "https://media1.tenor.com/m/rKPIRDj0h0oAAAAC/crying-cat-blink.gif",
    "fine :/": "https://media.tenor.com/FxAkwHS0MDkAAAAi/sad.gif",
    "excited-spin": "https://media1.tenor.com/m/aKFaZBrZFYcAAAAC/excited-spin.gif"
}

const preloadedImages = [];
let loadedImages = 0;
const totalImages = Object.keys(e).length;

// I don't really know wtf am I doing
function preloadImages() {
    for (const url of [...Object.values(e), ...window.pictures]) {
        const img = new Image();
        img.src = url;
        preloadedImages.push(img);
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                showInitialMessage();
            }
        }
    }
}

// literally writing this code at 2am :rofl:
function showInitialMessage() {
    document.getElementById("loading").style.display = "none"
    const initialMessage = Object.keys(e)[0];
    const initialImage = preloadedImages[0];
    document.getElementById("message").textContent = initialMessage;
    document.getElementById("pic").src = initialImage.src;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function choose(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

window.addEventListener("load", () => {
    let messages = Object.keys(e).slice(0, -2);
    let currentIndex = 0;

    preloadImages();

    document.getElementById("yes").addEventListener("click", () => {
        // document.getElementById("message").textContent = "YIPEEEEEEEEE!! :3";
        // document.getElementById("pic").src = "https://media1.tenor.com/m/aKFaZBrZFYcAAAAC/excited-spin.gif";
        // document.querySelectorAll(".button").forEach(button => button.classList.add("hidden"));

        location.replace("index2.html");

    });

    document.getElementById("no").addEventListener("click", () => {
        const nextMessage = messages[currentIndex];
        const nextImage = preloadedImages[currentIndex];
        document.getElementById("message").textContent = nextMessage;
        document.getElementById("pic").src = nextImage.src;

        // currentIndex = (currentIndex + 1) % messagesa.length;
        currentIndex++

        if (currentIndex === messages.length - 1) {
            document.getElementById("message").textContent = choose(window.messages);
            console.log(choose(window.messages))
            document.getElementById("pic").src = choose(window.pictures);
            currentIndex--
        }
    });
});
