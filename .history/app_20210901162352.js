var colors = ["#8b5642","#f56766", "#fdac53" , "#f5df4d", "#f0f0f0"];

function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < Date.now() + 30000) {
    requestAnimationFrame(frame);
  }
}

window.addEventListener('scroll', function (){
  if(window.pageYOffset > 400){
    window.onload = frame();
  }
})

// window.onload = frame();

const text = document.querySelector('.text');
const charArr = text.textContent.split('');

let dataText = '';

charArr.forEach((element) => {
    console.log(hasWhiteSpace(element));
    if (hasWhiteSpace(element)) {
        dataText += `<span class="letter">&nbsp;</span>`;
    } else {
        dataText += `<span class="letter">${element}</span>`;
    }
});

text.innerHTML = dataText;

const arrNumberRandom = [];
for (let i = 0; i < charArr.length; i++) {
    arrNumberRandom.push(i);
}

let delay = 0;

setTimeout(() => {
    const letters = document.querySelectorAll('.letter');
    for (let i = 0; i < charArr.length; i++) {
        let indexRandom = randomNumber(arrNumberRandom.length);

        const posOfletter = arrNumberRandom[indexRandom];
        const letter = letters[posOfletter];

        letter.style.transitionDelay = `${(delay += 0.01)}s`;
        letter.style.animationDelay = `${(delay += 0.1)}s`;
        letter.classList.add('appear', 'go-down');

        arrNumberRandom.splice(indexRandom, 1);
    }
}, 1000);

function randomNumber(length) {
    return Math.floor(Math.random() * length);
}

function hasWhiteSpace(str) {
    return str.indexOf(' ') >= 0;
}

