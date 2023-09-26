let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0;
let guestCount = 0;

let homePlus1 = document.getElementById("home-1")

function home1(){
    homeCount++
    homeScore.textContent = homeCount
}

function home2(){
    homeCount += 2
    homeScore.textContent = homeCount
}

function home3(){
    homeCount += 3
    homeScore.textContent = homeCount
}

function guest1(){
    guestCount++
    guestScore.textContent = guestCount
}

function guest2(){
    guestCount += 2
    guestScore.textContent = guestCount
}

function guest3(){
    guestCount += 3
    guestScore.textContent = guestCount
}

function reset(){
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}

function winner(){
    if (homeCount > guestCount){
        homeScore.classList.add("winner")
        guestScore.classList.remove("winner")
    } else if (homeCount < guestCount){
        guestScore.classList.add("winner")
        homeScore.classList.remove("winner")
    } else {
        homeScore.classList.remove("winner")
        guestScore.classList.remove("winner")
    }
}