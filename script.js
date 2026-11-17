/* =================================
   MARYAM BIRTHDAY WEBSITE
   VERSION 3.0
================================= */

// ELEMENTS

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

const openSurprise = document.getElementById("openSurprise");
const messageElement = document.getElementById("typingMessage");

const cakeEmoji = document.getElementById("cakeEmoji");
const wishButton = document.getElementById("wishButton");
const cakeMessage = document.getElementById("cakeMessage");

const heartsContainer = document.getElementById("hearts");


// VARIABLES

let isPlaying = false;
let messageStarted = false;
let wishMade = false;


// PERSONAL MESSAGE

const birthdayMessage = `كل سنة وإنتِ طيبة يا مريم! 🎀

يارب السنه الجديدة تكون مليانه فرحه
وضحك ونجاحات وحاجات حلوة شبهك كده

عايز أقولك إني مبسوط إن عندي صاحبة زيك 
وإن بجد مبسوط اني عرفتك

أتمنى تفضلي دايمًا مبسوطة
وتحققي كل حاجة نفسك فيها

happy birthday maryam 
love you♥️
ويا رب أيامك كلها تبقى جميلة زيك. ♡`;


// MUSIC CONTROL

if (musicButton && music) {

    musicButton.addEventListener("click", async () => {

        if (!isPlaying) {

            try {

                await music.play();

                isPlaying = true;

                musicButton.innerHTML =
                    "♫ <span>Pause Music</span>";

            } catch (error) {

                console.log("Music error:", error);

            }

        } else {

            music.pause();

            isPlaying = false;

            musicButton.innerHTML =
                "♫ <span>Play Music</span>";

        }

    });

}


// OPEN MESSAGE

if (openSurprise) {

    openSurprise.addEventListener("click", () => {

        document.getElementById("message")
            .scrollIntoView({
                behavior: "smooth"
            });

        if (!messageStarted) {

            messageStarted = true;

            typeMessage();

        }

        createHearts(15);

    });

}


// TYPING EFFECT

function typeMessage() {

    if (!messageElement) return;

    let index = 0;

    messageElement.textContent = "";

    function write() {

        if (index < birthdayMessage.length) {

            messageElement.textContent +=
                birthdayMessage.charAt(index);

            index++;

            setTimeout(write, 35);

        }

    }

    write();

}


// CAKE BUTTON

if (wishButton) {

    wishButton.addEventListener("click", () => {

        if (wishMade) return;

        wishMade = true;

        if (cakeEmoji) {
            cakeEmoji.textContent = "🎉";
        }

        if (cakeMessage) {

            cakeMessage.textContent =
                "Your wish is on its way! Keep shining, Maryam! ♡";

        }

        wishButton.textContent = "Wish Made! 💗";

        createHearts(40);

    });

}


// CLICK CAKE

if (cakeEmoji) {

    cakeEmoji.addEventListener("click", () => {

        createHearts(15);

        if (cakeMessage) {

            cakeMessage.textContent =
                "You deserve the sweetest birthday ever! 🎂";

        }

    });

}


// FLOATING HEARTS

function createHearts(amount) {

    if (!heartsContainer) return;

    const symbols = ["♡", "♥", "✿", "✨"];

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("span");

        heart.className = "heart";

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }

}


// AUTOMATIC HEARTS

setInterval(() => {
    createHearts(2);
}, 3000);