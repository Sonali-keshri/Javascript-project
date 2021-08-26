
let color = ['brown', 'barkblue', 'coral', 'tomato', 'hotpink', 'wheat', 'grey'];
let btn_elm = document.getElementById("btn");
let bgclor = document.querySelector('body');
 
let btnclick  = () => {
        let changecolor = Math.floor(Math.random()*color.length);
        bgclor.style.backgroundColor = color[changecolor];
}
