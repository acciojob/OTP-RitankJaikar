//your JS code here. If required.
const inputs= document.querySelectorAll(".code");

inputs.forEach((input, i) => {
	// Add an event listener for the 'input' event
	input.addEventListener("input", function() {
		// If the input has a value (user typed a digit)
		if(this.value.length >= 1) {
			// Ensure only the first character is kept (if user inputs more)
			//console.log(this.value);
			this.value = this.value[this.value.length - 1];
			// Move focus to the next input if it exists
			setTimeout(() => {
	            inputs[i+1].focus();
	        }, 10);
		}
		/*
		// If the input is cleared, move focus back to the previous input
		if(this.value.length === 0 && i>0) {
			inputs[i-1].focus();
		}
		*/
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


