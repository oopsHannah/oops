function convertText() {
    const inputText = document.getElementById("inputText").value;
    const outputContainer = document.getElementById("outputContainer");

    // Character mapping (Modify this to change replacements)
    const charMap = {
        'a': 'l', 'b': 'm', 'c': 'n', 'd': 'o', 'e': 'p',
        'f': 'q', 'g': 'r', 'h': 's', 'i': 't', 'j': 'u',
        'k': 'v', 'l': 'w', 'm': 'x', 'n': 'y', 'o': 'z',
        'p': 'a', 'q': 'b', 'r': 'c', 's': 'd', 't': 'e',
        'u': 'f', 'v': 'g', 'w': 'h', 'x': 'i', 'y': 'j', 'z': 'k'
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
