function convertText() {
    const inputText = document.getElementById("inputText").value;
    const outputContainerFont1 = document.getElementById("outputContainerFont1");
    const outputContainerFont2 = document.getElementById("outputContainerFont2");
    const outputContainerFont3 = document.getElementById("outputContainerFont3");

    
   // Character mapping for Font 1 (with case-sensitive characters)
    const charMapFont1Lower = {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'ƕ',  'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁',
        '0':'ꄲ', 
        '1':'⥠',
        '2':'Ձ',
        '3':'Յ',
        '4':'Ꮞ',
        '5':'𝟓',
        '6':'᱙',
        '7':'𝟕',
        '8':'৪',
        '9':'𖧁'
    };
    const charMapFont1Upper = {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'H': 'Ƕ',  'I':'Ꮂ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'Q': 'Ⴍ', 'r': '𐊯', 's': 'ୡ', 'T':'Ԏ',
        'u': '৩', 'v': 'ⴸ', 'W':'ฬ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁',
    };

// Character mapping for Font 2 (Long font)
    const charMapFont2 = {
        'a': 'Ꭿ', 'b': 'ᖲ', 'c': 'ꉔ', 'd': 'ᖱ', 'e': '𐒢',
        'f': 'ᖴ', 'g': '❡', 'h': 'ꀿ',  'i': 'Ꭵ', 'j': 'ᒍ',
        'k': '𐌺', 'l': '⎣', 'm': '𐌼', 'n': 'ᥥ', 'o': 'ꄲ',
        'p': 'ᖰ', 'q': 'ᖳ', 'r': 'Ꭱ', 's': '𐒖', 't': 'ㄒ',
        'u': '𐒩', 'v': 'ⴸ', 'w': 'Ɯ', 'x': '꒽', 'y': '𐒦', 'z': 'Ⲍ',
        '0':'ꄲ', 
        '1':'⥠',
        '2':'ᒿ',
        '3':'ჳ',
        '4':'Ꮞ',
        '5':'𝟓',
        '6':'Ꮾ',
        '7':'𝟕',
        '8':'৪',
        '9':'୨'
    };
    
// Character mapping for Font 3 (Cutesy font)
    const charMapFont3 = {
        'a': 'α', 'b': 'ᑲ', 'c': 'ᥴ', 'd': 'ԃ', 'e': 'ჲ',
        'f': 'ƒ', 'g': 'ɠ', 'h': 'ի',  'i': 'ᎥᎥ', 'j': 'ʝ',
        'k': 'k', 'l': 'ᥣ', 'm': 'm', 'n': 'ɳ', 'o': '᥆',
        'p': '⍴', 'q': '𝗊', 'r': 'r', 's': '᥉', 't': '𝗍',
        'u': 'ᥙ', 'v': '᥎', 'w': 'ω', 'x': '᥊', 'y': 'ყ', 'z': 'z',
        '0':'ꄲ', 
        '1':'⥠',
        '2':'೩',
        '3':'ᢃ',
        '4':'𐨰',
        '5':'𝟓',
        '6':'᥀',
        '7':'𝟕',
        '8':'৪',
        '9':'୨'
    };
    
// Special mapping for 'ee' (only for Font 1)
    const charMapFont1Special = {
        'ee': 'ꔛ' // Example symbol for 'ee' in Font 1
    };
    
 // Function to replace characters for Font 1 (case-sensitive)
    function transformFont1(text) {
        text = text.replace(/ee/g, charMapFont1Special['ee']); // Replace 'ee' first
        return text.split('').map((char) => {
            if (char === char.toLowerCase()) {
                return charMapFont1Lower[char] || char;
            } else {
                return charMapFont1Upper[char] || char;
            }
        }).join('');
    }
    // Function to replace characters for Font 2
    function transformFont2(text) {
        return text.split('').map((char) => charMapFont2[char] || char).join('');
    }
// Function to replace characters for Font 3
    function transformFont3(text) {
        return text.split('').map((char) => charMapFont3[char] || char).join('');
    }
    
 // Apply the transformations
    const transformedFont1 = transformFont1(inputText);
    const transformedFont2 = transformFont2(inputText);
    const transformedFont3 = transformFont3(inputText);

    // Display the transformed text in the corresponding containers
    outputContainerFont1.innerHTML = `<div class="outputBox">${transformedFont1}</div>`;
    outputContainerFont2.innerHTML = `<div class="outputBox">${transformedFont2}</div>`;
    outputContainerFont3.innerHTML = `<div class="outputBox">${transformedFont3}</div>`;
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
