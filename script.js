<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f5f5f5;
        }
        h1 {
            margin-bottom: 20px;
        }
        textarea {
            width: 100%;
            max-width: 600px;
            height: 100px;
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            padding: 10px;
            margin: 5px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
        }
        .output-container {
            width: 100%;
            max-width: 600px;
        }
        .output-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background: white;
            margin-top: 10px;
        }
        .copy-btn {
            padding: 5px 10px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Font Generator</h1>
    </style>
</head>
<body>
    <h1>Unicode Font Generator</h1>
    <textarea id="inputText" placeholder="Type your text here..."></textarea>
    <button onclick="generateFonts()">Generate Fonts</button>
    <div class="output-container" id="outputContainer"></div>

    <script>
        const fontTransformations = [
            text => text.replace(/[a-zA-Z]/g, char => String.fromCharCode(char.charCodeAt(0) + 1)), // Shift to next character
            text => text.replace(/[a-zA-Z]/g, char => char.toUpperCase()), // Uppercase transformation
            text => text.replace(/[a-zA-Z]/g, char => char.toLowerCase()), // Lowercase transformation
            text => text.replace(/[a-zA-Z]/g, char => `(${char})`), // Add parentheses around letters
            text => text.replace(/[a-zA-Z]/g, char => `*${char}*`) // Add asterisks around letters
        ];

        function generateFonts() {
            const inputText = document.getElementById('inputText').value;
            const outputContainer = document.getElementById('outputContainer');
            outputContainer.innerHTML = '';

            if (!inputText.trim()) {
                alert('Please enter some text!');
                return;
            }

            fontTransformations.forEach((transform, index) => {
                const transformedText = transform(inputText);
                const outputItem = document.createElement('div');
                outputItem.className = 'output-item';

                const outputText = document.createElement('div');
                outputText.className = 'output-text';
                outputText.textContent = transformedText;

                const copyButton = document.createElement('button');
                copyButton.className = 'copy-button';
                copyButton.textContent = 'Copy';
                copyButton.onclick = () => {
                    navigator.clipboard.writeText(transformedText).then(() => {
                        alert('Copied to clipboard!');
                    });
                };

                outputItem.appendChild(outputText);
                outputItem.appendChild(copyButton);
                outputContainer.appendChild(outputItem);
            });
        }
    </script>
</body>
</html>
