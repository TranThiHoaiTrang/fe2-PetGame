let hunger = 100;
let hygienic = 100;
let happiness = 100;
let coins = 100;
let countFree = 2;
let eatFood = 4;
var circleHungerProgress = document.querySelector('#progressBarHung');
var circleHappinessProgress = document.querySelector('#progressBarHapp');
var circleHygienicProgress = document.querySelector('#progressBarHygienic');
let dogFeel = document.getElementById("dogFeel");
let hungryPet = document.getElementById("hungryPet");
let free = document.getElementById("countFree");
let coinTab = document.getElementById("coins")
let foodDog = document.getElementById("foodDog");
let startGame = document.getElementById("startGame");
let mainGame = document.getElementById("mainGame");
let noteGame = document.getElementById("noteGame");
let notiGameTile = document.getElementById("noti-game-title");
let gameOver = document.getElementById("gameOver");
function setCircleHungerProgress(hunger) {
    var radius = circleHungerProgress.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circleHungerProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    circleHungerProgress.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - hunger / 100 * circumference;
    circleHungerProgress.style.strokeDashoffset = offset;
}
function setCircleHappinessProgress(happiness) {
    var radius = circleHappinessProgress.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circleHappinessProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    circleHappinessProgress.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - happiness / 100 * circumference;
    circleHappinessProgress.style.strokeDashoffset = offset

}
function setCircleHygienicProgress(hygienic) {
    var radius = circleHygienicProgress.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circleHygienicProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    circleHygienicProgress.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - hygienic / 100 * circumference;
    circleHygienicProgress.style.strokeDashoffset = offset;
}
function setImageDog(hunger) {
    if (hunger > 50) {
        dogFeel.style.display = "block";
        hungryPet.style.display = "none"
    } else {
        dogFeel.style.display = "none";
        hungryPet.style.display = "block"
    }
}
function showNoti() {
    noteGame.style.display = "block";
}
function onBuy(name, price) {
    if (name === "food") {
        countFree = countFree - 1;
        if (countFree < 0) {
            free.textContent = 0;
            if (hunger >= 100) {
                showNoti();
                notiGameTile.innerHTML = `
                    <span>Thức ăn đã</span>
                    <br>
                    <b>đầy đủ</b>
                `
                //    show thông báo thức ăn đã 100%
            } else if (coins < 20) {
                showNoti();
                notiGameTile.innerHTML = `
                    <span>Số tiền không đủ để mua</span>
                    <br>
                    <b>Thức ăn</b>
                `
                //    show thông báo số tiền không đủ
            }
            else if (coins >= 20) {
                eatFood += 2;
                foodDog.src = "./public/images/dodungtas-removebg.png";
                coins -= price;
                hunger += price;
                if (coins < 0) { coins = 0; };
                if (hunger > 100) { hunger = 100; };
                coinTab.textContent = coins;
                setCircleHungerProgress(hunger);
            }
        }
        else {
            // free.textContent = countFree;
            if (hunger >= 100) {
                showNoti();
                notiGameTile.innerHTML = `
                    <span>Thức ăn đã</span>
                    <br>
                    <b>đầy đủ</b>
                `
                //    show thông báo thức ăn đã 100%
            } else if (coins < 20) {
                showNoti();
                notiGameTile.innerHTML = `
                    <span>Số tiền không đủ để mua</span>
                    <br>
                    <b>Thức ăn</b>
                `
                //    show thông báo số tiền không đủ
            }
            else if (coins >= 20) {
                foodDog.src = "./public/images/dodungtas-removebg.png";
                free = Math.round(eatFood / 2);
                free.textContent = countFree;
                // coins -= price;
                hunger += price;
                if (coins < 0) { coins = 0; };
                if (hunger > 100) { hunger = 100; };
                coinTab.textContent = coins;
                setCircleHungerProgress(hunger);
            }
        }
    }
    else if (name === "happiness") {
        if (happiness >= 100) {
            // show thông báo cảm xúc đã 100%
            showNoti();
            notiGameTile.innerHTML = `
                <span>Cảm xúc đã</span>
                <br>
                <b>100%</b>
            `
        }
        else if (coins < price) {
            //   show thông báo tiền không đủ
            showNoti();
            notiGameTile.innerHTML = `
                <span>Tiền của bạn không đủ mua thêm</span>
                <br>
                <b>cảm xúc</b>
            `
        } else if (coins >= price) {
            coins -= price;
            happiness += price;
            if (coins < 0) { coins = 0; };
            if (happiness > 100) { happiness = 100; }
            setCircleHappinessProgress(happiness);
            coinTab.textContent = coins
        }
    }
    else if (name === "hygienic") {
        if (hygienic >= 100) {
            // show thông báo cảm xúc đã 100%
            showNoti();
            notiGameTile.innerHTML = `
                <span>Vệ sinh đã </span>
                <br>
                <b>sạch sẽ </b>
            `
        }
        else if (coins < price) {
            //   show thông báo tiền không đủ
            showNoti();
            notiGameTile.innerHTML = `
                <span>Tiền của bạn không đủ mua thêm</span>
                <br>
                <b>dịch vụ Vệ sinh</b>
            `
        } else if (coins >= price) {
            coins -= price;
            hygienic += price;
            if (coins < 0) { coins = 0; };
            if (hygienic > 100) { hygienic = 100; }
            setCircleHygienicProgress(hygienic);
            coinTab.textContent = coins
        }
    }
}
foodDog.onclick = function () {
    foodDog.src = "./public/images/trong-removebg-preview.png";
    eatFood -= 1;
    free = Math.round(eatFood / 2);
    free.textContent = countFree;
}
function onStartGame() {
    startGame.style.display = "none";
    mainGame.style.display = "block";
    playAudioGame()
    onStart();
    setInterval(onStart, 5000);
}
function playAudioGame() {
    audio = new Audio();
    audio.src = "./public/images/music-game-main.mp3";
    audio.loop = true;
    audio.oncanplaythrough = (event) => {
        var playedPromise = audio.play();
        if (playedPromise) {
            playedPromise.catch((e) => {
                console.log(e)
                if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
                    console.log(e.name);
                }
            }).then(() => {
                console.log("playing sound !!!");
            });
        }
    }
    // Set object references
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);
    function playPause() {
        if (audio.paused) {
            audio.play();
            playbtn.style.background = "url(./public/images/pause.svg) no-repeat";
        } else {
            audio.pause();
            playbtn.style.background = "url(./public/images/play.svg) no-repeat";
        }
    }
    function mute() {
        if (audio.muted) {
            audio.muted = false;
            mutebtn.style.background = "url(./public/images/speaker.svg) no-repeat";
        } else {
            audio.muted = true;
            mutebtn.style.background = "url(./public/images/mute.svg) no-repeat";
        }
    }
}
// function closeNotigame() {
//     console.log("đã tắt");
//     noteGame.style.display = "none";
// }
noteGame.onclick = function () {
    noteGame.style.display = "none";
}
function continueGame() {
    coins -= coins;
    setTimeout(() => {
        count = 0;
        hunger = 100;
        hygienic = 100;
        happiness = 100;
        coins = 100;
        countFree = 2;
    }, 100);
    playAudioGame()
    onStart();
    setImageDog(hunger);
    setInterval(onStart, 5000);
    gameOver.style.display = "none";
}
function blackGame() {
    gameOver.style.display = "none";
    noteGame.style.display = "none";
    startGame.style.display = "block";
    mainGame.style.display = "none";
    audio.play();
}
let onStart = () => {
    hygienic -= 3;
    hunger -= 6;
    happiness -= 10;
    if (hygienic == 0 || hunger == 0 || happiness == 0) {
        gameOver.style.display = "block";

    }
    setCircleHungerProgress(hunger);
    setCircleHappinessProgress(happiness);
    setCircleHygienicProgress(hygienic);
    setImageDog(hunger);
}
window.onload = function () {
    gameOver.style.display = "none";
    noteGame.style.display = "none";
    startGame.style.display = "block";
    mainGame.style.display = "none";
}