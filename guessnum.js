document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart-button');
    const changeBgButton = document.getElementById('change-bg-button');

    let randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log('Random number:', randomNumber);

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
            message.textContent = 'Please enter a number between 1 and 50.';
            return;
        }

        if (userGuess === randomNumber) {
            message.textContent = `Congrats! You guessed my number ${randomNumber}!`;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too Low. Try again.';
        } else {
            message.textContent = 'Too High. Try again.';
        }
    });

    restartButton.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 50) + 1;
        console.log('New random number:', randomNumber);
        guessInput.value = '';
        message.textContent = '';
    });

    changeBgButton.addEventListener('click', () => {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
