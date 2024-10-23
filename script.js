//your JS code here. If required.

const codeInputs = document.querySelectorAll('.code');
 
codeInputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        if (e.target.value.length === 1 && index<codeInputs.length - 1) {
            codeInputs[index + 1].focus();
        }
    });
 
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index>0 && e.target.value.length === 0) {
            codeInputs[index - 1].focus();
            codeInputs[index - 1].select();
        }
    });
});
 
document.getElementById('code-1').focus();

/*
const inputs= document.querySelectorAll(".code");

inputs.forEach((input, i) => {
	// Add an event listener for the 'input' event
	input.addEventListener("input", function() {
		// If the input has a value (user typed a digit)
		if(input.value.length >= 1) {
			// Ensure only the first character is kept (if user inputs more)
			//console.log(input.value);
			input.value = input.value[input.value.length - 1];
			// Move focus to the next input if it exists
			if(i < inputs.length-1) {
		        setTimeout(() => {
		            inputs[i+1].focus();
		        }, 100);
			}
		}
		
		// If the input is cleared, move focus back to the previous input
		//if(input.value.length === 0 && i>0) {
		//	inputs[i-1].focus();
		//}
	});

	// Add event listener for keydown event
	input.addEventListener("keydown", function(e) {
		if (e.key === "Backspace") {
            // If input is empty, focus the previous input
            if (this.value.length === 0 && i > 0) {
                inputs[i - 1].focus();
            } else if (this.value.length > 0) {
                // Clear the current input if it has a value
                this.value = "";
            }
        }
	})
})
*/


