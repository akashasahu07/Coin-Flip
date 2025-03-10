const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const statusLabel = document.querySelector('#status');
const heads = document.querySelector('#headsCount');
const tails = document.querySelector('#tailsCount');

let headsCount = 0;
let tailsCount = 0;
let isFlipping = false;

function processResult(result) {
    if (result === 'heads') {
        headsCount++;
        heads.textContent = headsCount;
    } else {
        tailsCount++;
        tails.textContent = tailsCount;
    }
    statusLabel.textContent = result.toUpperCase();
}

function flipCoin() {
    if (isFlipping) return; // Prevent multiple flips
    isFlipping = true;

    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    coin.classList.remove('animate-heads', 'animate-tails'); // Reset animation

    setTimeout(() => {
        coin.classList.add('animate-' + result);
    }, 10);

    setTimeout(() => {
        processResult(result);
        isFlipping = false;
    }, 3000);
}

button.addEventListener('click', flipCoin);