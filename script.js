// Define NATO alphabet mapping
const natoAlphabet = {
    'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
    'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
    'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
    'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
    'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee', 'Z': 'Zulu'
};

// Function to convert text to NATO alphabet with formatted output
function convertToNATO() {
    const inputText = document.getElementById('input-text').value.toUpperCase(); // Get input text and convert to uppercase
    let outputText = '';

    // Iterate over each character in input text
    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];

        // Check if character is a letter
        if (/[A-Z]/.test(char)) {
            // Append the formatted output for the character
            outputText += `${char} = ${natoAlphabet[char] || 'Unknown'}\n`;
        } else {
            // If not a letter, just append the character on a new line
            outputText += `${char}\n`;
        }
    }

    // Set output text to the output text input field
    document.getElementById('output-text').value = outputText.trim(); // Trim to remove trailing newline
}

document.addEventListener('DOMContentLoaded', function() {
    // Find the form element by its ID
    const form = document.getElementById('conversion-form');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent default form submission behavior
        event.preventDefault();
        
        // Call the convertToNATO function when the form is submitted (either by button click or Enter key press)
        convertToNATO();
    });

    // Optionally, you can also listen for key presses in the input field
    const inputField = document.getElementById('input-text');
    inputField.addEventListener('keypress', function(event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            // Prevent the default form submission behavior
            event.preventDefault();
            
            // Call the convertToNATO function
            convertToNATO();
        }
    });
});

