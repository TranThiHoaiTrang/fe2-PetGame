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
let coin = document.querySelector('.coinAnimation');
audio = new Audio();
let pickUpCoin = () => {
    coins += 20;
    coinTab.textContent = coins;
    coin.style.display = "none";
}
let randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

setInterval(() => {
    setTimeout(() => {
        coin.style.left = randomNumber(200, 1140) + "px";
        coin.style.display = "block";

    }, 10001);
}, 10000);
function setCircleHungerProgress(hunger) {
    var radius = circleHungerProgress.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circleHungerProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    circleHungerProgress.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - hunger / 100 * circumference;
    console.log('setCircleHungerProgress: ' + offset);
    circleHungerProgress.style.strokeDashoffset = offset;
}
function setCircleHappinessProgress(happiness) {
    var radius = circleHappinessProgress.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circleHappinessProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    circleHappinessProgress.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - happiness / 100 * circumference;
    console.log('setCircleHappinessProgress: ' + offset);
    circleHappinessProgress.style.strokeDashoffset = offset

}
function setCircleHygienicProgress(hygienic) {
    var radius = circleHygienicProgress.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circleHygienicProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    circleHygienicProgress.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - hygienic / 100 * circumference;
    console.log('setCircleHygienicProgress : ' + offset);
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
        if (countFree < 0) {
            // free.textContent = 0;
            free.style.display = "none";
            if (coins < 20) {
                showNoti();
                notiGameTile.innerHTML = `
                    <span>Số tiền không đủ để mua</span>
                    <br>
                    <b>Thức ăn</b>
                `
                //    show thông báo số tiền không đủ
            }
            else if (coins >= 20) {
                foodDog.src = "./public/images/dodungtas-removebg.png"
                eatFood += 2;
                countFree = Math.round(eatFood / 2);
                coins -= price;
                // hunger += price;
                // if (coins < 0) { coins = 0; };
                // if (hunger > 100) { hunger = 100; };
                coinTab.textContent = coins;
                // setCircleHungerProgress(hunger);
            }
        }
        else {
            if (coins < 20) {
                showNoti();
                notiGameTile.innerHTML = `
                    <span>Số tiền không đủ để mua</span>
                    <br>
                    <b>Thức ăn</b>
                `
                //    show thông báo số tiền không đủ
            }
            else if (coins >= 20) {
                foodDog.src = "./public/images/dodungtas-removebg.png"
                eatFood += 2;
                countFree = Math.round(eatFood / 2);
                free.style.display = "block";
                free.textContent = countFree;
                coins -= price;
                // coins -= price;
                // hunger += price;
                // if (coins < 0) { coins = 0; };
                // if (hunger > 100) { hunger = 100; };
                coinTab.textContent = coins;
                // setCircleHungerProgress(hunger);
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

dogFeel.onclick = function () {
    happiness += 1;
    if (happiness > 100) { happiness = 100; }
    setCircleHappinessProgress(happiness);

}

foodDog.onclick = function () {
    if (hunger >= 100) {
        showNoti();
        notiGameTile.innerHTML = `
            <span>Thức ăn đã</span>
            <br>
            <b>đầy đủ</b>
        `
        //    show thông báo thức ăn đã 100%
    } else {
        if (countFree == 0) {
            free.style.display = "none";
        }
        eatFood = eatFood - 1;
        countFree = Math.round(eatFood / 2);
        // alert("🖕🖕");
        free.textContent = countFree;
        if (eatFood >= 0) {
            hunger += 20;
            if (coins < 0) { coins = 0; };
            if (hunger > 100) { hunger = 100; };
            setCircleHungerProgress(hunger);
        }
        else {
            eatFood = 0;
            foodDog.src = "./public/images/trong-removebg-preview.png"
        }
        if (eatFood == 0) {
            foodDog.src = "./public/images/trong-removebg-preview.png"
            free.style.display = "none";
        }
    }
}

function onStartGame() {
    startGame.style.display = "none";
    mainGame.style.display = "block";
    playAudioGame()
    onStart();
    setInterval(onStart, 5000);
}
function playAudioGame() {
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
    audio.pause();
    coins -= coins;
    setTimeout(() => {
        count = 0;
        hunger = 100;
        hygienic = 100;
        happiness = 100;
        coins = 100;
        countFree = 2;
    }, 100);
    // audio.play();
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
    hygienic = 100;
    hunger = 100;
    happiness = 100;
    audio.pause();
    audio.src = "";
    // audio.play();
}
let onStart = () => {
    setTimeout(() => {
        hygienic -= 3;
        hunger -= 6;
        happiness -= 10;
    }, 5000);
    if (hygienic <= 0 || hunger <= 0 || happiness <= 0) {
        audio.pause();
        gameOver.style.display = "block";
        circleHygienicProgress.style.strokeDashoffset = 0;
        circleHappinessProgress.style.strokeDashoffset = 0;
        circleHungerProgress.style.strokeDashoffset = 0;
    } else {
        setCircleHungerProgress(hunger);
        setCircleHappinessProgress(happiness);
        setCircleHygienicProgress(hygienic);
        setImageDog(hunger);

    }
}
window.onload = function () {
    gameOver.style.display = "none";
    noteGame.style.display = "none";
    startGame.style.display = "block";
    mainGame.style.display = "none";
}