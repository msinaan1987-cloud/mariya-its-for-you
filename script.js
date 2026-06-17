let currentPage = 0;

const pages = document.querySelectorAll(".page");

function showPage(index) {
    pages.forEach(page => {
        page.classList.remove("active");
    });

    pages[index].classList.add("active");
}

function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage(currentPage);

    } else {

        document.getElementById("journalSection").style.display = "none";

        document.getElementById("starsSection").classList.remove("hidden");

    }

}

function prevPage() {

    if (currentPage > 0) {

        currentPage--;

        showPage(currentPage);

    }

}
function startJourney() {

    const music = document.getElementById("bgMusic");

    music.volume = 0.3;

    music.play();

    document.querySelector(".hero").style.display = "none";

    document
        .getElementById("journalSection")
        .classList.remove("hidden");
}

function showReason(number){
confetti({

particleCount:50,

spread:70

});
const popup =
document.getElementById("reasonPopup");

const text =
document.getElementById("popupText");

popup.classList.remove("hidden");

if(number === 1){

text.innerHTML = `
<h2>Reason One ❤️</h2>

<p>
Your smile makes even my hardest days brighter.
</p>
`;

}

if(number === 2){

text.innerHTML = `
<h2>Reason Two ❤️</h2>

<p>
You make me feel understood in a way nobody else does.
</p>
`;

}

if(number === 3){

text.innerHTML = `

<h2>
100 Reasons Why I Love You ❤️
</h2>

<p>
# 100 Reasons I Love You, Mariya

1. Because your smile can change my entire day.

2. Because your happiness matters to me.

3. Because you are beautiful inside and out.

4. Because you make ordinary moments feel special.

5. Because your laugh is contagious.

6. Because you are kind to people.

7. Because you care deeply.

8. Because you have a beautiful heart.

9. Because talking to you never feels boring.

10. Because you make me feel understood.

11. Because you inspire me to become a better person.

12. Because you are stronger than you realize.

13. Because you keep going even when things are difficult.

14. Because you make me believe in good people.

15. Because you make me feel lucky.

16. Because your voice is comforting.

17. Because your presence calms me.

18. Because I miss you even when we just talked.

19. Because you make me smile without trying.

20. Because you are unforgettable.

21. Because every memory with you means something to me.

22. Because you make me look forward to tomorrow.

23. Because you make difficult days easier.

24. Because you are uniquely you.

25. Because I love the way you think.

26. Because you notice little things.

27. Because you are thoughtful.

28. Because you are genuine.

29. Because you are caring.

30. Because you are patient.

31. Because you make me feel seen.

32. Because your eyes tell stories.

33. Because you make my heart race.

34. Because you make my heart feel at home.

35. Because your existence makes my world brighter.

36. Because you have beautiful dreams.

37. Because I love hearing your opinions.

38. Because you make conversations meaningful.

39. Because you are worth listening to.

40. Because you matter to me more than you know.

41. Because you taught me things without realizing it.

42. Because you changed me for the better.

43. Because you helped me grow.

44. Because you make me believe in love.

45. Because I admire you.

46. Because I respect you.

47. Because I trust you.

48. Because I cherish our memories.

49. Because I treasure every moment with you.

50. Because you make my world feel less lonely.

51. Because you are beautiful when you are happy.

52. Because you are beautiful when you are excited.

53. Because you are beautiful when you are passionate.

54. Because you are beautiful when you are simply being yourself.

55. Because your imperfections make you real.

56. Because your strengths inspire me.

57. Because your weaknesses make me want to support you.

58. Because you deserve good things.

59. Because you deserve to be appreciated.

60. Because you deserve to be loved.

61. Because you make me want to work harder.

62. Because you make me want to become the man you deserve.

63. Because I love learning more about you.

64. Because every day reveals something new about you.

65. Because I never get tired of thinking about you.

66. Because your messages make me happy.

67. Because your presence makes places better.

68. Because your absence is noticeable.

69. Because you make memories unforgettable.

70. Because you make life feel more meaningful.

71. Because you are one of the most beautiful chapters of my life.

72. Because you make me feel grateful.

73. Because you remind me that love can be gentle.

74. Because you remind me that love can be patient.

75. Because you remind me that love can be real.

76. Because you make my heart choose you again and again.

77. Because you are worth every prayer.

78. Because you are worth every effort.

79. Because you are worth every risk.

80. Because you are worth every wait.

81. Because I love the way you make me feel.

82. Because I love the way you see the world.

83. Because I love your heart.

84. Because I love your mind.

85. Because I love your soul.

86. Because you make me feel alive.

87. Because you make me believe beautiful things are possible.

88. Because you bring warmth into my life.

89. Because you bring joy into my life.

90. Because you bring peace into my life.

91. Because you became important to me without permission.

92. Because you became my favorite thought.

93. Because you became my favorite person to talk to.

94. Because you became part of my dreams.

95. Because you became part of my future.

96. Because you became part of my story.

97. Because I am happier knowing you exist.

98. Because my heart feels safest with you.

99. Because I can imagine a future with you.

100. Because out of all the people in this world, my heart chose you.

</p>

<br>

<button class="magic-btn" onclick="startHarryPotter()">
    ✨ Enter Our Hogwarts Story ⚡
</button>

`;

}


}

function closePopup(){

document
.getElementById("reasonPopup")
.classList.add("hidden");

}

let hpCurrent = 0;

const hpSlides =
document.querySelectorAll(".hp-slide");

function nextHpSlide(){

hpSlides[hpCurrent]
.classList.remove("active-slide");

hpCurrent++;

if(hpCurrent >= hpSlides.length){

hpCurrent = hpSlides.length - 1;

}

hpSlides[hpCurrent]
.classList.add("active-slide");

}

function startHarryPotter(){

document
.getElementById("reasonPopup")
.classList.add("hidden");

document
.getElementById("starsSection")
.style.display="none";

document
.getElementById("harryPotterSection")
.classList.remove("hidden");

}

function goToFuture(){

document
.getElementById("harryPotterSection")
.style.display="none";

document
.getElementById("futureSection")
.classList.remove("hidden");

}

function toggleMusic(){

    const music =
    document.getElementById("bgMusic");

    if(music.paused){

        music.play();

    }else{

        music.pause();

    }

}


function changeMusic(fileName){

    const music = document.getElementById("bgMusic");

    music.pause();

    music.src = fileName;

    music.load();

    music.play().catch(err => {
        console.log("Music error:", err);
    });

}


function goToLetter(){

    changeMusic("music/loveletter.mp3");

    document
    .getElementById("futureSection")
    .style.display="none";

    document
    .getElementById("loveLetterSection")
    .classList.remove("hidden");

}
const letterText = `

My Dearest Mariya,

Today is your birthday.

And before anything else,
I just want to thank you.

Thank you for becoming one of
the most beautiful parts of my life.

Thank you for every smile.

Thank you for every memory.

Thank you for simply being you.

The truth is...

somewhere along this journey,

you became much more than
just another person in my life.

You became someone I care about deeply.

Someone I pray for.

Someone I dream about.

Someone I imagine a future with.

And today,

with all my heart,

I want you to know that

I love you.

❤️

`;

function openLetter(){

    document
    .querySelector(".letter-container")
    .style.display = "none";

    document
    .getElementById("letterContent")
    .classList.remove("hidden");

    let i = 0;

    const speed = 35;

    function type(){

        if(i < letterText.length){

            document
            .getElementById("typedLetter")
            .innerHTML += letterText.charAt(i);

            i++;

            setTimeout(type, speed);

        }

    }

    type();

}

function changeMusic(fileName){

    const music = document.getElementById("bgMusic");

    music.pause();

    music.src = fileName;

    music.load();

    music.volume = 0.25;

    music.play();

}


const video =
document.getElementById("birthdayVideo");

if(video){

video.addEventListener("play",()=>{

document
.getElementById("bgMusic")
.pause();

});

video.addEventListener("ended",()=>{

document
.getElementById("bgMusic")
.play();

});

}

function goToVideo(){

    document
        .getElementById("loveLetterSection")
        .style.display = "none";

    document
        .getElementById("videoSection")
        .classList.remove("hidden");

}

function showFinalQuestion(){

document
.getElementById("videoSection")
.style.display = "none";

document
.getElementById("countdownSection")
.classList.remove("hidden");

let count = 3;

const countdownText =
document.getElementById("countdownText");

setTimeout(() => {

countdownText.innerHTML = "3";

setTimeout(() => {

countdownText.innerHTML = "2";

setTimeout(() => {

countdownText.innerHTML = "1";

setTimeout(() => {

document
.getElementById("countdownSection")
.style.display="none";

document
.getElementById("finalProposalSection")
.classList.remove("hidden");

},1000);

},1000);

},1000);

},2000);

}
function showCrimsonQuestion(){
confetti({

particleCount:400,

spread:180

});
    document
    .getElementById("finalProposalSection")
    .style.display="none";

    document
    .getElementById("crimsonSection")
    .classList.remove("hidden");

}

function showEnding(){

    document
    .getElementById("crimsonSection")
    .style.display="none";

    document
    .getElementById("endingSection")
    .classList.remove("hidden");

}

function revealSecret(){

alert(

`Mariya ❤️

Everything you saw today
was digital.

The memories.

The story.

The dreams.

The music.

But one thing isn't.

There's a real letter waiting
for you under your bed.

Every word inside it
comes directly from my heart.

❤️`

);

}

function showEnding(){

    confetti({
        particleCount: 250,
        spread: 120
    });

    document
    .getElementById("crimsonSection")
    .style.display="none";

    document
    .getElementById("endingSection")
    .classList.remove("hidden");

}

function showCrimsonQuestion(){
confetti({

particleCount:400,

spread:180

});
document
.getElementById("finalProposalSection")
.style.display = "none";

document
.getElementById("crimsonSection")
.classList.remove("hidden");

}

function showEnding(){

document
.getElementById("crimsonSection")
.style.display = "none";

document
.getElementById("endingSection")
.classList.remove("hidden");

}

const heroMessage =
"Happy Birthday Mariya ✨";

let heroIndex = 0;

function typeHero(){

if(heroIndex < heroMessage.length){

document
.getElementById("heroTitle")
.innerHTML +=
heroMessage.charAt(heroIndex);

heroIndex++;

setTimeout(typeHero,100);

}

}

typeHero();
