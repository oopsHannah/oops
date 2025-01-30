function convertText() {
    const inputText = document.getElementById("inputText").value;
    const outputContainer = document.getElementById("outputContainer");

    
    // Character mappings for three different fonts
            const fontMaps = {
  "font1": {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'Ƕ',  'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁',
        '0':'ꄲ', '1':'⥠','2':'Ձ','3':'Յ','4':'Ꮞ','5':'𝟓','6':'᱙',
        '7':'𝟕','8':'৪','9':'𖧁'
  },
  "font2": {
        'a': 'Ꭿ', 'b': 'ᖲ', 'c': 'ꉔ', 'd': 'ᖱ', 'e': '𐒢',
        'f': 'ᖴ', 'g': '❡', 'h': 'ꀿ',  'i': 'Ꭵ', 'j': 'ᒍ',
        'k': '𐌺', 'l': '⎣', 'm': '𐌼', 'n': 'ᥥ', 'o': 'ꄲ',
        'p': 'ᖰ', 'q': 'ᖳ', 'r': 'Ꭱ', 's': '𐒖', 't': 'ㄒ',
        'u': '𐒩', 'v': 'ⴸ', 'w': 'Ɯ', 'x': '꒽', 'y': '𐒦', 'z': 'Ⲍ',
        '0':'ꄲ', '1':'⥠','2':'ᒿ','3':'ჳ','4':'Ꮞ','5':'𝟓','6':'Ꮾ',
        '7':'𝟕','8':'৪','9':'୨'
  },
  "font3": {   
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
    
            // Function to apply font conversion
           function convertText() {
    const inputText = document.getElementById("inputText").value;

    
    // Character mappings for three different fonts
            const fontMaps = {
  "font1": {
        'a': 'Ꭿ', 'b': 'ᙖ', 'c': '᧙', 'd': 'ȡ', 'e': 'ꕊ',
        'f': 'ᖴ', 'g': '၅', 'h': 'Ƕ',  'i': 'Ꭵ', 'j': '၂',
        'k': '𐌺', 'l': 'ℓ', 'm': '᧗', 'n': 'ȵ', 'o': 'ᰔ',
        'p': '𐬮', 'q': '৭', 'r': '𐊯', 's': 'ୡ', 't': 'ȶ',
        'u': '৩', 'v': 'ⴸ', 'w': 'ຟ', 'x': '𑀌', 'y': 'ꌦ', 'z': '𐰁',
        '0':'ꄲ', '1':'⥠','2':'Ձ','3':'Յ','4':'Ꮞ','5':'𝟓','6':'᱙',
        '7':'𝟕','8':'৪','9':'𖧁'
  }
  "font2": {
        'a': 'Ꭿ', 'b': 'ᖲ', 'c': 'ꉔ', 'd': 'ᖱ', 'e': '𐒢',
        'f': 'ᖴ', 'g': '❡', 'h': 'ꀿ',  'i': 'Ꭵ', 'j': 'ᒍ',
        'k': '𐌺', 'l': '⎣', 'm': '𐌼', 'n': 'ᥥ', 'o': 'ꄲ',
        'p': 'ᖰ', 'q': 'ᖳ', 'r': 'Ꭱ', 's': '𐒖', 't': 'ㄒ',
        'u': '𐒩', 'v': 'ⴸ', 'w': 'Ɯ', 'x': '꒽', 'y': '𐒦', 'z': 'Ⲍ',
        '0':'ꄲ', '1':'⥠','2':'ᒿ','3':'ჳ','4':'Ꮞ','5':'𝟓','6':'Ꮾ',
        '7':'𝟕','8':'৪','9':'୨'
  }
  "font3": {   
        'a': 'α', 'b': 'ᑲ', 'c': 'ᥴ', 'd': 'ԃ', 'e': 'ჲ',
        'f': 'ƒ', 'g': 'ɠ', 'h': 'ի',  'i': 'ᎥᎥ', 'j': 'ʝ',
        'k': 'k', 'l': 'ᥣ', 'm': 'm', 'n': 'ɳ', 'o': '᥆',
        'p': '⍴', 'q': '𝗊', 'r': 'r', 's': '᥉', 't': '𝗍',
        'u': 'ᥙ', 'v': '᥎', 'w': 'ω', 'x': '᥊', 'y': 'ყ', 'z': 'z',
        '0':'ꄲ', '1':'⥠','2':'೩','3':'ᢃ',
        '4':'𐨰',
        '5':'𝟓','6':'᥀','7':'𝟕','8':'৪','9':'୨'
  }
};
    
            // Function to apply font conversion
           function convert(input, mapping) {
    return input.split('').map(char => mapping[char] || char).join('');
}

            // Update output boxes
            document.getElementById("outputFont1").textContent = convert(inputText, fontMaps["font1"]);
            document.getElementById("outputFont2").textContent = convert(inputText, fontMaps["font2"]);
            document.getElementById("outputFont3").textContent = convert(inputText, fontMaps["font3"]);
        }

        // Copy text to clipboard
        function copyToClipboard(elementId) {
            const text = document.getElementById(elementId).textContent;
            navigator.clipboard.writeText(text).then(() => {
                alert("copied to clipboard!");
            });

 


            // Update output boxes
            document.getElementById("outputFont1").textContent = convert(inputText, fontMaps["font1"]);
            document.getElementById("outputFont2").textContent = convert(inputText, fontMaps["font2"]);
            document.getElementById("outputFont3").textContent = convert(inputText, fontMaps["font3"]);
        }

        // Copy text to clipboard
        function copyToClipboard(elementId) {
            const text = document.getElementById(elementId).textContent;
            navigator.clipboard.writeText(text).then(() => {
                alert("copied to clipboard!");
            });

        }

 

