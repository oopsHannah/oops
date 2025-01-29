function convertText() {
    const inputText = document.getElementById("inputText").value;
    const outputContainer = document.getElementById("outputContainer");

    // Character mapping for Font 1 (Curly font)
    const charMap = {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'ƕ',  'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁',
        'H': 'Ƕ', 'I':'Ꮂ', 'Q': 'Ⴍ', 'T':'Ԏ', 'W':'ฬ', 
        'ee': 'ꔛ', 'EE':'ꔛ'
    };
// Character mapping for Font 2 (Long font)
    const charMap = {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'ƕ',  'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁',
        'H': 'Ƕ', 'I':'Ꮂ', 'Q': 'Ⴍ', 'T':'Ԏ', 'W':'ฬ', 
        'ee': 'ꔛ', 'EE':'ꔛ'
    };
// Character mapping for Font 3 (Cutesy font)
    const charMap = {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'ƕ',  'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁',
        'H': 'Ƕ', 'I':'Ꮂ', 'Q': 'Ⴍ', 'T':'Ԏ', 'W':'ฬ', 
        'ee': 'ꔛ', 'EE':'ꔛ'
    };
    
    // Convert text using the mapping
    let convertedText = inputText.split('').map(char => {
        return charMap[char.toLowerCase()] || char;
    }).join('');

    // Display the converted text
    outputContainer.innerHTML = `
        <div class="outputBox">
            <span>${convertedText}</span>
            <button onclick="copyToClipboard('${convertedText}')">Copy</button>
        </div>
    `;
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
}
