const messages = [
    "Emin misin?",
    "Ciddili mi??",
    "Harbili mi?",
    "Woki pokim lütfen...",
    "Bir sans dahaaa!",
    "Yoook deme düsün...",
    "Üzülüyom...",
    "Koskocaman üzülüyom...",
    "Tmm, gidiyom...",
    "Saka yaptim, gitmiyom! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
