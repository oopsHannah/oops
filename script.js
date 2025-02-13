function convertText() {
    const inputText = document.getElementById("inputText").value;
    const outputContainer = document.getElementById("outputContainer");
    const selectedMap = document.getElementById("charMapSelect").value;


    // Character mapping
    const charMap = {
        map1: {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'ƕ', 'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁'
        '0':'ꄲ', '1':'⥠','2':'Ձ','3':'Յ','4':'Ꮞ','5':'𝟓','6':'᱙',
        '7':'𝟕','8':'৪','9':'𖧁'
    },
        map3: {
        'a': 'Ꭿ', 'b': 'ᖲ', 'c': 'ꉔ', 'd': 'ᖱ', 'e': '𐒢',
        'f': 'ᖴ', 'g': '❡', 'h': 'ꀿ',  'i': 'Ꭵ', 'j': 'ᒍ',
        'k': '𐌺', 'l': '⎣', 'm': '𐌼', 'n': 'ᥥ', 'o': 'ꄲ',
        'p': 'ᖰ', 'q': 'ᖳ', 'r': 'Ꭱ', 's': '𐒖', 't': 'ㄒ',
        'u': '𐒩', 'v': 'ⴸ', 'w': 'Ɯ', 'x': '꒽', 'y': '𐒦', 'z': 'Ⲍ',
        '0':'ꄲ', '1':'⥠','2':'ᒿ','3':'ჳ','4':'Ꮞ','5':'𝟓','6':'Ꮾ',
        '7':'𝟕','8':'৪','9':'୨'
  },
        map3: { 
        'a': 'α', 'b': 'ᑲ', 'c': 'ᥴ', 'd': 'ԃ', 'e': 'ჲ',
        'f': 'ƒ', 'g': 'ɠ', 'h': 'ի',  'i': 'Ꭵ', 'j': 'ʝ',
        'k': 'k', 'l': 'ᥣ', 'm': 'm', 'n': 'ɳ', 'o': '᥆',
        'p': '⍴', 'q': '𝗊', 'r': 'r', 's': '᥉', 't': '𝗍',
        'u': 'ᥙ', 'v': '᥎', 'w': 'ω', 'x': '᥊', 'y': 'ყ', 'z': 'z',
        '0':'ꄲ', '1':'⥠','2':'೩','3':'ᢃ',
        '4':'𐨰',
        '5':'𝟓','6':'᥀','7':'𝟕','8':'৪','9':'୨'
        }
};

    
    // Convert text using the mapping
    let convertedText = inputText.split('').map(char => {
        return charMap[selectedMap][char.toLowerCase()] || char;
    }).join('');

    // Display the converted text
    outputContainer.innerHTML = `
        <div class="outputBox">
            <span>${convertedText}</span>
            <button onclick="copyToClipboard('${convertedText}')">copy</button>
        </div>
    `;
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("copied to clipboard!");
    });
}
