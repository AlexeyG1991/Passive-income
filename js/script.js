// -----------loader------------
let myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

// -------------Date---------------
let endDate = new Date("Sep 24, 2024 12:00:00").getTime();
let timer = setInterval(function () {
    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer-days").innerHTML = ("0" + days).slice(-3) +
            "<span class='label'>ДНЕЙ</span>";

        document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2) +
            "<span class='label'>ЧАСОВ</span>";

        document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) +
            "<span class='label'>МИНУТ</span>";

        document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) +
            "<span class='label'>СЕКУНД</span>";

    } else {
        document.getElementById("timer").innerHTML = "Обратный отсчет окончен!";

    }

}, 1000);

// --------------tabs--------------
const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector(".tabs li.active").classList.remove("active");
        document.querySelector(".tabs-panel.active").classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}
