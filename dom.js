// let c = document.getElementsByClassName("oldImg");
// for(let i=0; i<c.length; i++) {
//     console.log(c[i].src);
// }

let links = document.querySelectorAll('.box a');
for(link of links) {
    link.style.color = 'purple';
}


// selecting button and changing property

let b = document.querySelector('#btn');
b.style.backgroundColor = 'blue';
b.style.color = 'white';

//selecting h1 heading

let h = document.querySelector('h1');

h.innerText = 'DOM practice';
h.innerHTML = `<u> ${h.innerText}</u>`;
h.style.color = 'purple';

// selecting dom para

let p = document.querySelector('.dom');
p.innerHTML = `<b> Javascript </b> practice`;


// changing color with classList
let b1 = document.querySelector('.box');
b1.classList.add('yellow');





