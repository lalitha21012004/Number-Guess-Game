let btn = document.getElementById("start");

btn.addEventListener("click", function() {
    let secret = Math.floor(Math.random() * 10) + 1;
    let guess;
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
        guess = Number(prompt(`Attempt ${attempts + 1}/${maxAttempts}: Guess a number (1-10):`));
        attempts++;

        if (guess === secret) {
            alert("Correct! You Win!!!");
            return; // Exit the function early since they won
        } else if (guess > secret) {
            alert("Too high!");
        } else {
            alert("Too low!");
        }
    }

    // If the loop finishes without a 'return', the user ran out of tries
    alert(`Game Over! You've used all ${maxAttempts} attempts. The number was ${secret}.`);
});
