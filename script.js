function convertText() {
    const inputText = document.getElementById("inputText").value;

    // Character mapping for Font 1 (Curly font)
    const charMapFont1 = {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'ƕ',  'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁',
        'H': 'Ƕ', 'I':'Ꮂ', 'Q': 'Ⴍ', 'T':'Ԏ', 'W':'ฬ', 
        'ee': 'ꔛ', 'EE':'ꔛ'
    };
// Character mapping for Font 2 (Long font)
    const charMapFont2 = {
        'a': 'Ꭿ', 'b': 'ᖲ', 'c': 'ꉔ', 'd': 'ᖱ', 'e': '𐒢',
        'f': 'ᖴ', 'g': '❡', 'h': 'ꀿ',  'i': 'Ꭵ', 'j': 'ᒍ',
        'k': '𐌺', 'l': '⎣', 'm': '𐌼', 'n': 'ᥥ', 'o': 'ꄲ',
        'p': 'ᖰ', 'q': 'ᖳ', 'r': 'Ꭱ', 's': '𐒖', 't': 'ㄒ',
        'u': '𐒩', 'v': 'ⴸ', 'w': 'Ɯ', 'x': '꒽', 'y': '𐒦', 'z': 'Ⲍ',
    };
// Character mapping for Font 3 (Cutesy font)
    const charMapFont3 = {
        'a': 'α', 'b': 'ᑲ', 'c': 'ᥴ', 'd': 'ԃ', 'e': 'ჲ',
        'f': 'ƒ', 'g': 'ɠ', 'h': 'ի',  'i': 'ᎥᎥ', 'j': 'ʝ',
        'k': 'k', 'l': 'ᥣ', 'm': 'm', 'n': 'ɳ', 'o': '᥆',
        'p': '⍴', 'q': '𝗊', 'r': 'r', 's': '᥉', 't': '𝗍',
        'u': 'ᥙ', 'v': '᥎', 'w': 'ω', 'x': '᥊', 'y': 'ყ', 'z': 'z',
    };
    
        // Function to convert text based on a specific font's character map
    function convertUsingMap(inputText, charMap) {
        return inputText.split('').map(char => {
            return charMap[char.toLowerCase()] || char;
        }).join('');
    }

    // Convert text for each font
    const convertedTextFont1 = convertUsingMap(inputText, charMapFont1);
    const convertedTextFont2 = convertUsingMap(inputText, charMapFont2);
    const convertedTextFont3 = convertUsingMap(inputText, charMapFont3);

    // Display the converted text for each font
    document.getElementById("outputContainerFont1").innerHTML = `
        <div class="outputBox">
            <span>${convertedTextFont1}</span>
            <button onclick="copyToClipboard('${convertedTextFont1}')">Copy Font 1</button>
        </div>
    `;
    document.getElementById("outputContainerFont2").innerHTML = `
        <div class="outputBox">
            <span>${convertedTextFont2}</span>
            <button onclick="copyToClipboard('${convertedTextFont2}')">Copy Font 2</button>
        </div>
    `;
    document.getElementById("outputContainerFont3").innerHTML = `
        <div class="outputBox">
            <span>${convertedTextFont3}</span>
            <button onclick="copyToClipboard('${convertedTextFont3}')">Copy Font 3</button>
        </div>
    `;
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
