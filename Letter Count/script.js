let textarea = document.getElementById("charactershow");
let counting = document.getElementById("lettercount");
let countletter = () =>{
    counting.innerHTML = textarea.value.length;
}