const textInput = document.getElementById('textInput');
const previewFont1 = document.getElementById('previewFont1');
const previewFont2 = document.getElementById('previewFont2');
const previewFont3 = document.getElementById('previewFont3');

// Font maps
const charMapFont1Upper = {
  'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
  'f': 'ᖴ', 'g': '၅', 'h': 'Ƕ', 'i': 'Ꮂ', 'j': '၂',
  'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
  'p': '𐬮', 'q': 'Ⴍ', 'r': '𐊯', 's': '꯱', 't': 'Ԏ',
  'u': '৩', 'v': 'ⴸ', 'w': 'ฬ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁'
};

const charMapFont1Special = {
  'ee': 'ꔛ'
};

const charMapFont2 = {
  'a': 'Ꭿ', 'b': 'ᖲ', 'c': 'ꉔ', 'd': 'ᖱ', 'e': '𐒢',
  'f': 'ᖴ', 'g': '❡', 'h': 'ꀿ', 'i': 'Ꭵ', 'j': 'ᒍ',
  'k': '𐌺', 'l': '⎣', 'm': '𐌼', 'n': 'ᥥ', 'o': 'ꄲ',
  'p': 'ᖰ', 'q': 'ᖳ', 'r': 'Ꭱ', 's': '𐒖', 't': 'ㄒ',
  'u': '𐒩', 'v': 'ⴸ', 'w': 'Ɯ', 'x': '꒽', 'y': '𐒦', 'z': 'Ⲍ'
};

const charMapFont3 = {
  'a': 'α', 'b': 'ᑲ', 'c': 'ᥴ', 'd': 'ԃ', 'e': 'ჲ',
  'f': 'ƒ', 'g': 'ɠ', 'h': 'ի', 'i': 'Ꭵ', 'j': 'ʝ',
  'k': 'k', 'l': 'ᥣ', 'm': 'm', 'n': 'ɳ', 'o': '᥆',
  'p': '⍴', 'q': '𝗊', 'r': 'r', 's': '᥉', 't': '𝗍',
  'u': 'ᥙ', 'v': '᥎', 'w': 'ω', 'x': '᥊', 'y': 'ყ', 'z': 'z'
};

// Transform functions
function transformFont1(text) {
  let transformed = text.replace(/ee/gi, () => charMapFont1Special['ee']);
  return transformed.split('').map(char => {
    const lowerChar = char.toLowerCase();
    return charMapFont1Upper[lowerChar] || char;
  }).join('');
}

function transformFont2(text) {
  return text.split('').map(char => {
    const lowerChar = char.toLowerCase();
    return charMapFont2[lowerChar] || char;
  }).join('');
}

function transformFont3(text) {
  return text.split('').map(char => {
    const lowerChar = char.toLowerCase();
    return charMapFont3[lowerChar] || char;
  }).join('');
}

// Typing animation for each box
function typeText(element, text) {
  element.textContent = '';
  element.style.animation = 'none';
  element.offsetHeight;
  element.style.animation = 'pop 0.2s ease';

  let index = 0;
  const typingSpeed = 30;

  function typeLetter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, typingSpeed);
    }
  }
  typeLetter();
}

// Update previews
function updateAllPreviews() {
  const inputText = textInput.value;

  const font1Text = inputText ? transformFont1(inputText) : 'font 1 preview...';
  const font2Text = inputText ? transformFont2(inputText) : 'font 2 preview...';
  const font3Text = inputText ? transformFont3(inputText) : 'font 3 preview...';

  typeText(previewFont1, font1Text);
  typeText(previewFont2, font2Text);
  typeText(previewFont3, font3Text);
}

// Copy and sparkle and hearts
function copyText(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text);

  const button = event.target;
  button.classList.add('sparkle');

  setTimeout(() => {
    button.classList.remove('sparkle');
  }, 500);

  showToast();
  spawnHeart();
  playDing();
}

// Show "copied!" toast
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// Play ding sound
function playDing() {
  const ding = document.getElementById('dingSound');
  ding.currentTime = 0;
  ding.play();
}

// Spawn multiple random hearts
function spawnHeart() {
  const heartEmojis = ['💖', '💕', '💗', '💓'];
  const heartsContainer = document.getElementById('hearts-container');

  const numberOfHearts = Math.floor(Math.random() * 3) + 2; // 2-4 hearts

  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 90 + '%';
    heart.style.top = (80 + Math.random() * 10) + '%';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}

// Sparkle trail following mouse
document.addEventListener('mousemove', function(e) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = e.clientX + 'px';
  sparkle.style.top = e.clientY + 'px';
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 500);
});

// Event listener for typing
textInput.addEventListener('input', updateAllPreviews);
