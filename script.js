<script>
    const textInput = document.getElementById('textInput');
    const preview = document.getElementById('preview');

// Character mapping (Modify this to change replacements)
    const replacementMap = {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'ƕ', 'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁'
        '0':'ꄲ', '1':'⥠','2':'Ձ','3':'Յ','4':'Ꮞ','5':'𝟓','6':'᱙',
        '7':'𝟕','8':'৪','9':'𖧁'
    };

    function transformText(text) {
      return text.split('').map(char => {
        const upperChar = char.toUpperCase();
        return replacementMap[upperChar] || char;
      }).join('');
    }

    function updatePreview() {
      const inputText = textInput.value;
      preview.textContent = inputText ? transformText(inputText) : 'font preview...';
    }

    function copyText() {
      navigator.clipboard.writeText(transformText(textInput.value));
      alert('copied to clipboard!');
    }

    function downloadText() {
      const blob = new Blob([transformText(textInput.value)], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'text.txt';
      link.click();
    }

    textInput.addEventListener('input', updatePreview);
  </script>

</body>
</html>
