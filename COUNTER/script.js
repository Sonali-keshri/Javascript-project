
let counter = document.getElementById("counter");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let count = 0;
let counterDecrement = () => {
    count--
    counter.innerHTML = count;
    if (counter.innerHTML < 0) {
        counter.style.color = "rgb(236, 197, 21)";
    }
    else if (counter.innerHTML == 0) {
        counter.style.color = "white"
    }

}
let counterIncrement = () => {
    count++
    counter.innerHTML = count;
    if (counter.innerHTML > 0) {
        counter.style.color = "green"
    }
    else if (counter.innerHTML == 0) {
        counter.style.color = "white"
    }

}
