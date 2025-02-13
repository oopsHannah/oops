function convertText() {
    const inputText = document.getElementById("inputText").value;
    const outputContainer = document.getElementById("outputContainer");

    // Character mapping (Modify this to change replacements)
    const charMap = {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'ƕ', 'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁'
        '0':'ꄲ', '1':'⥠','2':'Ձ','3':'Յ','4':'Ꮞ','5':'𝟓','6':'᱙',
        '7':'𝟕','8':'৪','9':'𖧁'
    };

    // Convert text using the mapping
    let convertedText = inputText.split('').map(char => {
        return charMap[char.toLowerCase()] || char;
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
