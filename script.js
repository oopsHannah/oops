const textInput = document.getElementById('textInput');
const preview = document.getElementById('preview');
const fontSelect = document.getElementById('fontSelect');

// Font maps
const charMapFont1Upper = {
  'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
  'f': 'ᖴ', 'g': '၅', 'h': 'Ƕ', 'i': 'Ꮂ', 'j': '၂',
  'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
  'p': '𐬮', 'q': 'Ⴍ', 'r': '𐊯', 's': 'ୡ', 't': 'Ԏ',
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
  'f': 'ƒ', 'g': 'ɠ', 'h': 'ի', 'i': 'ᎥᎥ', 'j': 'ʝ',
  'k': 'k', 'l': 'ᥣ', 'm': 'm', 'n': 'ɳ', 'o': '᥆',
  'p': '⍴', 'q': '𝗊', 'r': 'r', 's': '᥉', 't': '𝗍',
  'u': 'ᥙ', 'v': '᥎', 'w': 'ω', 'x': '᥊', 'y': 'ყ', 'z': 'z'
};

// Functions
function transformText(text) {
  const selectedFont = fontSelect.value;
  let transformed = text;

  if (selectedFont === 'font1') {
    // Handle 'ee' first
    transformed = transformed.replace(/ee/gi, () => {
      return charMapFont1Special['ee'];
    });
    transformed = transformed.split('').map(char => {
      const lowerChar = char.toLowerCase();
      return charMapFont1Upper[lowerChar] || char;
    }).join('');
  } else if (selectedFont === 'font2') {
    transformed = transformed.split('').map(char => {
      const lowerChar = char.toLowerCase();
      return charMapFont2[lowerChar] || char;
    }).join('');
  } else if (selectedFont === 'font3') {
    transformed = transformed.split('').map(char => {
      const lowerChar = char.toLowerCase();
      return charMapFont3[lowerChar] || char;
    }).join('');
  }

  return transformed;
}

function updatePreview() {
  const inputText = textInput.value;
  preview.textContent = inputText ? transformText(inputText) : 'font preview...';

  // Restart animation
  preview.style.animation = 'none';
  preview.offsetHeight; // Trigger reflow
  preview.style.animation = 'pop 0.2s ease';
}

function copyText() {
  navigator.clipboard.writeText(preview.textContent);
  alert('copied to clipboard!');
}

// Event listeners
textInput.addEventListener('input', updatePreview);
fontSelect.addEventListener('change', updatePreview);
