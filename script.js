function convertText() {
    const inputText = document.getElementById("inputText").value;
    const outputContainer = document.getElementById("outputContainer");

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
     // Special mapping for 'ee' (only for Font 1)
    const charMapFont1Special = {
        'ee': 'ꔛ' // Example symbol for 'ee' in Font 1
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
    
// Convert font 1 using the mapping
    let convertedTextFont1 = inputText.split('').map(char => {
        return charMap[char.toLowerCase()] || char;
    }).join('');

// Convert font 2 using the mapping
    let convertedTextFont2 = inputText.split('').map(char => {
        return charMap[char.toLowerCase()] || char;
    }).join('');
    
// *Convert font 3 using the mapping
    let convertedTextFont3 = inputText.split('').map(char => {
        return charMap[char.toLowerCase()] || char;
    }).join('');
    
//*Convert text for each font (not sure if this is needed)
    //const convertedTextFont1 = convertUsingMap(inputText, charMapFont1);
    //const convertedTextFont2 = convertUsingMap(inputText, charMapFont2);
    //const convertedTextFont3 = convertUsingMap(inputText, charMapFont3);

   
    // Display the converted text for each font
    outputContainer.innerHTML = `
        <div class="outputBox">
            <span>${convertedText}</span>
            <button onclick="copyToClipboard('${convertedTextFont1}')">Copy</button>
        </div>
    `;
     outputContainer.innerHTML = `
        <div class="outputBox">
            <span>${convertedText}</span>
            <button onclick="copyToClipboard('${convertedTextFont2}')">Copy</button>
        </div>
    `;
     outputContainer.innerHTML = `
        <div class="outputBox">
            <span>${convertedText}</span>
            <button onclick="copyToClipboard('${convertedTextFont3}')">Copy</button>
        </div>
    `;
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
