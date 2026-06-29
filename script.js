
/* =========================================================
   MARIYA BIRTHDAY EXPERIENCE
   FINAL CLEAN SCRIPT.JS
========================================================= */

console.log("✨ Happy Birthday Mariya loaded successfully ❤️");

/* =========================================================
   GLOBAL STATE
========================================================= */

let heroIndex = 0;
let mapIndex = 0;
let currentHpSlide = 0;
let discoveredStars = 0;
let memorySaved = "";

/* =========================================================
   MUSIC
========================================================= */

const bgMusic = document.getElementById("bgMusic");

function playMusic() {
    if (!bgMusic) return;
    bgMusic.volume = 0.4;
    bgMusic.play().catch(() => {});
}

/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

function show(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("hidden");
}

function hide(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
}

function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   HERO TYPEWRITER
========================================================= */

const heroMessage = "Welcome to your Hogwarts story Mariya ✨";

function typeHero() {
    const el = document.getElementById("heroTitle");
    if (!el) return;

    if (heroIndex < heroMessage.length) {
        el.innerHTML += heroMessage.charAt(heroIndex);
        heroIndex++;
        setTimeout(typeHero, 80);
    }
}

/* =========================================================
   MAP INTRO
========================================================= */

function openMap() {
    const spark = document.getElementById("spellSpark");
    const btn = document.querySelector(".wand-btn");

    if (spark) spark.classList.add("spell-cast");
    if (btn) btn.disabled = true;

    setTimeout(() => {
        show("mapReveal");
        if (btn) btn.classList.add("hidden");
        scrollTop();
    }, 1800);
}

const mapMessage = "I solemnly swear that I am up to no good.";

function typeMapQuote() {
    const el = document.getElementById("mapQuote");
    if (!el) return;

    if (mapIndex < mapMessage.length) {
        el.innerHTML += mapMessage.charAt(mapIndex);
        mapIndex++;
        setTimeout(typeMapQuote, 60);
    }
}

/* =========================================================
   JOURNAL FLOW
========================================================= */

function startJourney() {
    show("journalSection");
    scrollTop();
}

function nextPage() {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));

    currentHpSlide++;
    if (currentHpSlide < pages.length) {
        pages[currentHpSlide].classList.add("active");
    }
}

/* =========================================================
   REASON POPUP
========================================================= */

function showReason(i) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("popupText");

    const reasons = [
        "You were never alone, Mariya ❤️",
        "Even in silence, you mattered ✨",
        "Every moment was leading here 💫"
    ];

    if (text) text.innerText = reasons[i - 1];
    if (popup) popup.classList.remove("hidden");
}

function closePopup() {
    hide("popup");
}

/* =========================================================
   HARRY POTTER SLIDES
========================================================= */

function enterHero() {
    show("harryPotterSection");
    scrollTop();
}

function nextHpSlide() {
    const slides = document.querySelectorAll(".hp-slide");

    if (slides.length === 0) return;

    slides[currentHpSlide].classList.remove("active-slide");

    currentHpSlide = (currentHpSlide + 1) % slides.length;

    slides[currentHpSlide].classList.add("active-slide");
}

/* =========================================================
   PENSIEVE
========================================================= */

function openPensieve() {
    show("pensieveSection");
    scrollTop();
}

function showMemory(id) {
    const orbs = document.querySelectorAll(".memory-content");

    orbs.forEach(o => o.classList.add("hidden"));

    const target = document.getElementById("memory" + id);
    if (target) target.classList.remove("hidden");
}

/* =========================================================
   FUTURE SECTION
========================================================= */

function goToFuture() {
    show("futureSection");
    scrollTop();
}

function goToLetter() {
    show("loveLetterSection");
    scrollTop();
}

/* =========================================================
   LETTER
========================================================= */

function openLetter() {
    const envelope = document.querySelector(".envelope");
    if (envelope) envelope.classList.toggle("open");
}

/* =========================================================
   VIDEO
========================================================= */

function goToVideo() {
    show("videoSection");
    scrollTop();
}

/* =========================================================
   COUNTDOWN
========================================================= */

function startCountdown() {
    show("countdownSection");

    let count = 3;
    const el = document.getElementById("countdownText");

    const timer = setInterval(() => {
        if (el) el.innerText = count;
        count--;

        if (count < 0) {
            clearInterval(timer);
            show("finalProposalSection");
        }
    }, 1000);
}

/* =========================================================
   PROPOSAL
========================================================= */

function showFinalQuestion() {
    show("finalProposalSection");
}

function showCrimsonQuestion() {
    show("crimsonSection");
}

/* =========================================================
   MEMORY SAVE
========================================================= */

function saveMemory() {
    const input = document.getElementById("mariyaMemoryInput");
    if (input) memorySaved = input.value;

    show("memorySavedSection");

    const display = document.getElementById("savedMemoryText");
    if (display) display.innerText = memorySaved;
}

function showMemoryBoxSection() {
    show("memoryBoxSection");
}

/* =========================================================
   MEMORY BOX
========================================================= */

function openMemory() {
    const popup = document.getElementById("memoryPopup");
    if (popup) popup.classList.remove("hidden");
}

/* =========================================================
   ENDING FLOW
========================================================= */

function showEnding() {
    show("endingSection");
}

function goToRealEnding() {
    show("secretSkySection");
}

function revealSecret() {
    show("realLetterSection");
}

/* =========================================================
   FINAL LETTER
========================================================= */

function showRealLetter() {
    show("realLetterSection");
}

/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    playMusic();
});
