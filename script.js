const span = document.querySelector('.span');
const wordList = ['Prajwol.', 'Player.', 'Singer.', 'Dancer.'];

const word = 'Prajwol';
let alphabetIndex = 0;
let wordComplete = false;
let wordCountIndex = 0;
let updateStopper = 0;
setInterval(() => {
    if (updateStopper) {
        updateStopper--;
        return;
    }
    if (!wordComplete) {
        updateStopper = 2;
        span.innerText = span.innerText + wordList[wordCountIndex][alphabetIndex];
        alphabetIndex++;
    }
    else {
        span.innerText = span.innerText.slice(0, (span.innerText.length) - 1);
    }

    if (alphabetIndex === wordList[wordCountIndex].length) {
        updateStopper = 3;
        alphabetIndex = 0;
        wordComplete = true;
    }
    if (span.innerText.length === 0 && wordComplete) {
        wordComplete = false;
        wordCountIndex++;
    }

    if (wordCountIndex === wordList.length) {
        wordCountIndex = 0;
    }
}, 100)