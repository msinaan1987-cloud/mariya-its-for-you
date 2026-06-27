/*==================================================
    HAPPY BIRTHDAY MARIYA
    SCRIPT.JS
    Part 1
==================================================*/


/*==================================================
                GLOBAL VARIABLES
==================================================*/

let discoveredStars = 0;
let currentPage = 0;
let hpCurrent = 0;

const pages = document.querySelectorAll(".page");
const hpSlides = document.querySelectorAll(".hp-slide");



/*==================================================
                PAGE INITIALIZATION
==================================================*/

window.addEventListener("load", () => {

    showPage(0);

    typeHero();

    typeMapQuote();

    animateSchoolMemory();

});



/*==================================================
                JOURNAL SYSTEM
==================================================*/

function showPage(index){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    if(pages[index]){
        pages[index].classList.add("active");
    }

}



function nextPage(){

    if(currentPage < pages.length-1){

        currentPage++;

        showPage(currentPage);

        switch(currentPage){

            case 1:
                animateLonelyChat();
                break;

            case 2:
                animateMeetingScene();
                break;

        }

    }

    else{

        document.getElementById("journalSection").style.display="none";

        document
        .getElementById("starsSection")
        .classList.remove("hidden");

    }

}



function prevPage(){

    if(currentPage>0){

        currentPage--;

        showPage(currentPage);

    }

}



/*==================================================
                JOURNEY START
==================================================*/

function startJourney(){

    const music=document.getElementById("bgMusic");

    music.volume=0.3;

    music.play().catch(()=>{});

    document
    .querySelector(".hero")
    .style.display="none";

    document
    .getElementById("journalSection")
    .classList.remove("hidden");

}



/*==================================================
                STAR SECTION
==================================================*/

function showReason(number){

    confetti({

        particleCount:50,

        spread:70

    });

    const clickedStar=document.querySelector(
        `.star[data-star="${number}"]`
    );

    if(clickedStar &&
       !clickedStar.classList.contains("found")){

        clickedStar.classList.add("found");

        discoveredStars++;

        checkConstellation();

    }

    const popup=document.getElementById("reasonPopup");

    const text=document.getElementById("popupText");

    popup.classList.remove("hidden");



    switch(number){

        case 1:

            text.innerHTML=`

            <h2>Reason One ❤️</h2>

            <p>

            Your smile makes even my hardest days brighter.

            </p>

            `;

            break;



        case 2:

            text.innerHTML=`

            <h2>Reason Two ❤️</h2>

            <p>

            You make me feel understood in a way nobody else does.

            </p>

            `;

            break;



        case 3:

            text.innerHTML=`

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

            <button
            class="magic-btn"
            onclick="startHarryPotter()">

            ✨ Enter Our Hogwarts Story ⚡

            </button>

            `;

            break;

    }

}



function closePopup(){

    document
    .getElementById("reasonPopup")
    .classList.add("hidden");

}



/*==================================================
                HARRY POTTER STORY
==================================================*/

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



function nextHpSlide(){

    hpSlides[hpCurrent]
    .classList.remove("active-slide");

    hpCurrent++;

    if(hpCurrent>=hpSlides.length){

        hpCurrent=hpSlides.length-1;

    }

    hpSlides[hpCurrent]
    .classList.add("active-slide");

}



/*==================================================
                PENSIEVE
==================================================*/

function openPensieve(){

    document
    .getElementById("harryPotterSection")
    .style.display="none";

    document
    .getElementById("pensieveSection")
    .classList.remove("hidden");

}



function showMemory(number){

    let text="";

    switch(number){

        case 1:

            text=`

The Sharpener Day ❤️

Nobody noticed.

Nobody asked.

But you did.

And I never forgot it.

`;

            break;

        case 2:

            text=`

The Cycle Ride 🚲

I rode all the way just to see you.

Only for a few seconds.

Yet it felt completely worth it.

`;

            break;

        case 3:

            text=`

The Award Ceremony 🏆

You wore a black dress.

Black nail polish.

And I couldn't stop looking at you.

`;

            break;

    }

    alert(text);

}

/*==================================================
                FUTURE SECTION
==================================================*/

function goToFuture(){

    const hp=document.getElementById("harryPotterSection");

    if(hp){
        hp.style.display="none";
    }

    const pensieve=document.getElementById("pensieveSection");

    if(pensieve){
        pensieve.style.display="none";
    }

    document
    .getElementById("futureSection")
    .classList.remove("hidden");

}



/*==================================================
                MUSIC SYSTEM
==================================================*/

function changeMusic(fileName){

    const music=document.getElementById("bgMusic");

    music.pause();

    music.src=fileName;

    music.load();

    music.volume=0.25;

    music.play().catch(()=>{});

}



function toggleMusic(){

    const music=document.getElementById("bgMusic");

    if(music.paused){

        music.play();

    }

    else{

        music.pause();

    }

}



/*==================================================
                LOVE LETTER
==================================================*/

function goToLetter(){

    changeMusic("music/loveletter.mp3");

    document
    .getElementById("futureSection")
    .style.display="none";

    document
    .getElementById("loveLetterSection")
    .classList.remove("hidden");

}



const letterText=`

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

    const envelope=document.querySelector(".envelope");

    envelope.classList.add("open");



    setTimeout(()=>{

        document
        .querySelector(".letter-container")
        .style.display="none";

        document
        .getElementById("letterContent")
        .classList.remove("hidden");

    },1500);



    let index=0;

    const speed=35;

    const typed=document.getElementById("typedLetter");

    typed.innerHTML="";



    function typeLetter(){

        if(index<letterText.length){

            typed.innerHTML+=letterText.charAt(index);

            index++;

            setTimeout(typeLetter,speed);

        }

    }

    typeLetter();

}



/*==================================================
                VIDEO SECTION
==================================================*/

const video=document.getElementById("birthdayVideo");

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
    .style.display="none";

    document
    .getElementById("videoSection")
    .classList.remove("hidden");

}



/*==================================================
                FINAL COUNTDOWN
==================================================*/

function showFinalQuestion(){

    document
    .getElementById("videoSection")
    .style.display="none";

    document
    .getElementById("countdownSection")
    .classList.remove("hidden");



    const countdown=document.getElementById("countdownText");

    const numbers=["3","2","1"];

    let index=0;



    function nextNumber(){

        if(index<numbers.length){

            countdown.innerHTML=numbers[index];

            index++;

            setTimeout(nextNumber,1000);

        }

        else{

            document
            .getElementById("countdownSection")
            .style.display="none";

            document
            .getElementById("finalProposalSection")
            .classList.remove("hidden");

        }

    }



    setTimeout(nextNumber,2000);

}

/*==================================================
                PROPOSAL FLOW
==================================================*/

function showCrimsonQuestion(){

    confetti({
        particleCount:400,
        spread:180
    });

    document
    .getElementById("finalProposalSection")
    .style.display="none";

    document
    .getElementById("heartbeatSection")
    .classList.remove("hidden");

    setTimeout(()=>{

        document
        .getElementById("heartbeatSection")
        .style.display="none";

        document
        .getElementById("crimsonSection")
        .classList.remove("hidden");

    },5000);

}



function showEnding(){

    document
    .getElementById("crimsonSection")
    .style.display="none";

    document
    .getElementById("mariyaMemorySection")
    .classList.remove("hidden");

}



function saveMemory(){

    const memory=document
    .getElementById("mariyaMemoryInput")
    .value;

    if(memory.trim()===""){

        alert("Write a memory first ❤️");

        return;

    }

    document
    .getElementById("mariyaMemorySection")
    .style.display="none";

    document
    .getElementById("memorySavedSection")
    .classList.remove("hidden");

    document
    .getElementById("savedMemoryText")
    .innerHTML=

`Mariya's Memory ❤️

<br><br>

"${memory}"`;

}



function showCrimsonSection(){

    document
    .getElementById("memorySavedSection")
    .style.display="none";

    document
    .getElementById("crimsonSection")
    .classList.remove("hidden");

}



function goToRealEnding(){

    document
    .getElementById("memoryBoxSection")
    .style.display="none";

    document
    .getElementById("endingSection")
    .classList.remove("hidden");

}



function revealSecret(){

    document
    .getElementById("endingSection")
    .style.display="none";

    document
    .getElementById("secretSkySection")
    .classList.remove("hidden");

}



function showRealLetter(){

    document
    .getElementById("secretSkySection")
    .style.display="none";

    document
    .getElementById("realLetterSection")
    .classList.remove("hidden");

}



/*==================================================
                HERO TITLE
==================================================*/

const heroMessage="Happy Birthday Mariya ✨";

let heroIndex=0;

function typeHero(){

    if(heroIndex<heroMessage.length){

        document
        .getElementById("heroTitle")
        .innerHTML+=heroMessage.charAt(heroIndex);

        heroIndex++;

        setTimeout(typeHero,100);

    }

}



/*==================================================
                MAP INTRO
==================================================*/

function openMap(){

    const spark=document.getElementById("spellSpark");

    spark.classList.add("spell-cast");

    document
    .querySelector(".wand-btn")
    .disabled=true;

    setTimeout(()=>{

        document
        .getElementById("mapReveal")
        .classList.remove("hidden");

        document
        .querySelector(".wand-btn")
        .style.display="none";

    },2000);

}



const mapMessage=

"I solemnly swear that I am up to no good.";

let mapIndex=0;

function typeMapQuote(){

    if(mapIndex<mapMessage.length){

        document
        .getElementById("mapQuote")
        .innerHTML+=mapMessage.charAt(mapIndex);

        mapIndex++;

        setTimeout(typeMapQuote,70);

    }

}



function enterHero(){

    document
    .getElementById("mapIntro")
    .style.display="none";

    document
    .querySelector(".hero")
    .classList.remove("hidden");

}



/*==================================================
                SECRET STAR
==================================================*/

function secretMessage(){

    alert(

`⭐ Secret Found

Out of every star in this sky...

you're still my favorite one.

❤️`

);

}



/*==================================================
                CONSTELLATION
==================================================*/

function checkConstellation(){

    if(discoveredStars>=4){

        document
        .getElementById("constellationMessage")
        .classList.remove("hidden");

    }

}



/*==================================================
                MEMORY POPUP
==================================================*/

function openMemory(num){

    const popup=document
    .getElementById("memoryPopup");

    const text=document
    .getElementById("memoryText");

    popup.classList.remove("hidden");

    switch(num){

        case 1:

            text.innerHTML=`

Do You Remember that Anandu

Proposed you??

For a second i thought I'm Dead

But you said you rejected.

That made me feel Alive again.

`;

        break;

        case 2:

            text.innerHTML=`

That award ceremony.

You kept saying

you weren't beautiful.

I spent the entire day

thinking the opposite.

`;

        break;

        case 3:

            text.innerHTML=`

When i rode the cycle

To your house

I didn't Know Where would I

End up.

But i wanted to see you

Soo Badly.

`;

        break;

        case 4:

            text.innerHTML=`

A few seconds seeing you

was enough to make

an entire day better.

`;

        break;

    }

}

/*==================================================
                SCHOOL MEMORY STORY
==================================================*/

const schoolLines = [

"It all started on the day you came and sat behind my bench.",

"Looking back now, it feels like such a small moment.",

"But somehow, it changed everything.",

"From that day on, things moved so fast.",

"I never imagined that the girl sitting behind me...",

"Would become someone I could talk to for hours without ever getting bored.",

"Little by little, you became a part of my everyday life.",

"You laughed at my silly jokes.",

"Even the ones that weren't funny.",

"You listened to me whenever I had something to say.",

"And somehow...",

"You always knew how to comfort me whenever I needed it.",

"Those moments may have seemed ordinary.",

"But they meant so much to me.",

"You made me happier than you probably ever realized.",

"There is one memory that has stayed in my heart all these years.",

"And I don't know if you even remember it.",

"Back then, my friends and I used to play football with a sharpener during school.",

"One morning, while we were playing...",

"I got a cut on my leg from its blade.",

"It hurt.",

"But what hurt more was that nobody seemed to care.",

"Not even my friends asked me what happened.",

"But you did.",

"You were the first person to notice.",

"You were the first person to ask me...",

"'What happened?'",

"You even asked if I wanted to wrap it up.",

"It might have seemed like a small act of kindness to you.",

"But to me...",

"It was never small.",

"At that moment...",

"I felt seen.",

"I felt cared for.",

"And I felt important.",

"That memory still lives in my heart.",

"Because it was one of the first times I saw how beautiful your heart truly was.",

"As time passed...",

"My feelings for you only grew stronger.",

"Somewhere between our conversations...",

"Your laughter.",

"Your kindness.",

"And all those little moments we shared.",

"I found myself falling deeply in love with you.",

"And the funny thing is...",

"I knew it.",

"I knew exactly how I felt.",

"But I was terrified of telling you.",

"I even prepared a letter.",

"A letter that contained everything I wanted to say.",

"Every feeling.",

"Every hope.",

"Every piece of my heart.",

"But every time I thought about giving it to you...",

"Fear won.",

"I wasn't brave enough back then.",

"I wish I had been.",

"But I wasn't.",

"And then...",

"The last day of school arrived.",

"Out of all the memories from that day.",

"One moment shines brighter than the rest.",

"You gave me a Dairy Milk.",

"To anyone else...",

"It might have looked like a simple chocolate.",

"But to me...",

"It was never just a chocolate.",

"It became a memory.",

"A beautiful memory.",

"A memory I carried with me long after school ended.",

"And even now.",

"After all this time.",

"When I look back at where everything began.",

"I realize that some of the most beautiful chapters of my life...",

"Started with a girl.",

"A girl who simply came and sat behind my bench."

];



function animateSchoolMemory(){

    animateStory(

        "schoolMemory",

        schoolLines,

        "memory-line",

        2500

    );

}



/*==================================================
                LONELY CHAT
==================================================*/

const lonelyMessages=[

"I thought I could get over your absence.",

"I was wrong.",

"Every day felt a little quieter.",

"I kept opening our chats.",

"I kept rereading old messages.",

"I rode my cycle just to see you once.",

"Those few seconds made my entire day.",

"That's when I realized how much you meant to me. ❤️"

];



function animateLonelyChat(){

    const container=document.getElementById("lonelyChat");

    if(!container) return;

    container.innerHTML="";

    let index=0;

    function next(){

        if(index>=lonelyMessages.length) return;

        container.innerHTML+=`

<div class="chat-bubble">

${lonelyMessages[index]}

</div>

`;

        container.scrollTop=container.scrollHeight;

        index++;

        setTimeout(next,2500);

    }

    next();

}



/*==================================================
                MEETING STORY
==================================================*/

const meetingMoments=[

"June 7th.",

"The award ceremony.",

"You were wearing a black dress.",

"Black nail polish.",

"You looked beautiful.",

"I couldn't stop looking at you.",

"Fifteen minutes on my cycle suddenly felt worth it.",

"Every ride after that felt easier. ❤️"


];



function animateMeetingScene(){

    animateStory(

        "meetingScene",

        meetingMoments,

        "meeting-line",

        2500,

        true

    );

}



/*==================================================
                UNIVERSAL STORY ENGINE
==================================================*/

function animateStory(

    containerId,

    lines,

    className,

    delay,

    replace=false

){

    const container=document.getElementById(containerId);

    if(!container) return;

    container.innerHTML="";

    let index=0;

    function show(){

        if(index>=lines.length) return;

        if(replace){

            container.innerHTML=`

<div class="${className}">

${lines[index]}

</div>

`;

        }

        else{

            container.innerHTML+=`

<div class="${className}">

${lines[index]}

</div>

`;

        }

        index++;

        setTimeout(show,delay);

    }

    show();

}



/*==================================================
                FLOATING HEARTS
==================================================*/

function createHeart(){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=

        6+Math.random()*4+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}



setInterval(createHeart,2500);



/*==================================================
                MAGIC PARTICLES
==================================================*/

function createMagicParticle(){

    const particle=document.createElement("span");

    particle.innerHTML="✨";

    particle.style.position="fixed";

    particle.style.left=Math.random()*100+"vw";

    particle.style.top="110vh";

    particle.style.fontSize=

        10+Math.random()*18+"px";

    particle.style.opacity=".3";

    particle.style.pointerEvents="none";

    particle.style.zIndex="1";

    particle.style.animation=

        "floatMagic 16s linear forwards";

    document.body.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },17000);

}



setInterval(createMagicParticle,1800);



/*==================================================
                BUTTON HOVER SOUND (OPTIONAL)
==================================================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.04)";

    });



    button.addEventListener("mouseleave",()=>{

        button.style.transform="";

    });

});

.hp-slide{

display:none;

}

.hp-slide.active-slide{

display:flex;

}

const runaway=document.getElementById("runawayBtn");

if(runaway){

runaway.addEventListener("mouseover",()=>{

runaway.style.position="absolute";

runaway.style.left=Math.random()*70+"vw";

runaway.style.top=Math.random()*70+"vh";

});

}


function showMemoryBoxSection(){

document.getElementById("memorySavedSection").style.display="none";

document.getElementById("memoryBoxSection").classList.remove("hidden");

}

/*==================================================
                END OF SCRIPT
==================================================*/

console.log(

"✨ Happy Birthday Mariya loaded successfully ❤️"

);



