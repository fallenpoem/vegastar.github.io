const messages = [
    "Emin misin?",
    "Ciddili mi??",
    "Harbili mi?",
    "Seni sikerim...",
    "Kendini domalttırma!",
    "Bir düşün...",
    "İletişim kur...",
    "Yarrama bak...",
    "En büyük oçum...",
    "❤️"
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
