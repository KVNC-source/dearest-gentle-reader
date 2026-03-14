const paper = document.getElementById("paper");
const letter = document.getElementById("letter");
const music = document.getElementById("bgmusic");

/* LADY WHISTLEDOWN MESSAGE */

const paragraphs = [
  "My dear Gorgeous Reader, ",

  "It has come to this author's attention that a certain diamond has once again succesfully captured his heart by her utter Beauty and Grace.",

  "Among the many figures gracing the ballrooms of society, I can safely and most confidently say that you have perfectly captivated the whole dance floor with your wit, elegance, and quiet confidence. Especially to eyes such as mine that seem as though they cannot help but stay magnatized to your whole being.",

  "Yet one must remember that playing within close proximity to this author's heart may lead to such heartwarming consequences. For that the author must warn you, dearest gentle reader, this game that you have been participating in has this author on such a chokehold. One might say you could most certainly be the 'bane of his existence', and yet the person of all his desires at the same exact time.",

  "For now, this author shall merely observe and record every memory of you, while offering his heart according to the portion he is capable of giving at this present moment. What is to come, should matters rise to greater heights, is an endeavour the author would prefer to keep to himself—for now, at least.",

  "With things as they are, this author would like to say that you, dearest reader, is the living reason on why he has strength to push forward everyday. And he couldn't have asked for a more flawless and enchanting woman to pour all his love into. You are beyond compare to any soul he has ever encountered",
];

/* TYPEWRITER VARIABLES */

let paragraphIndex = 0;
let charIndex = 0;

/* START WHEN PAGE LOADS */

window.onload = () => {
  paper.classList.add("open");

  /* START MUSIC */

  music.volume = 0;
  music.play();

  let vol = 0;

  const fade = setInterval(() => {
    if (vol < 0.3) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);

  setTimeout(startTyping, 900);
};

/* START TYPING */

function startTyping() {
  createParagraph();
}

/* CREATE PARAGRAPH */

function createParagraph() {
  if (paragraphIndex >= paragraphs.length) {
    showSignature();
    return;
  }

  const p = document.createElement("p");

  letter.appendChild(p);

  typeParagraph(p);
}

/* TYPE PARAGRAPH */

function typeParagraph(p) {
  const text = paragraphs[paragraphIndex];

  if (charIndex < text.length) {
    p.textContent += text.charAt(charIndex);

    charIndex++;

    setTimeout(() => typeParagraph(p), 25);
  } else {
    paragraphIndex++;
    charIndex = 0;

    setTimeout(createParagraph, 400);
  }
}

/* SIGNATURE */

function showSignature() {
  const signature = document.createElement("p");

  signature.className = "signature";

  signature.innerHTML = `
From one who notices you more than he should,<br>
<span>Your Kifa</span>
`;

  letter.appendChild(signature);
}
