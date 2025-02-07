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
    
    // Get the current size of the button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    // Set the new size for the button
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Control and set the button's position
    const container = yesButton.parentElement; // Assuming the button is inside a container
    const containerHeight = container.offsetHeight;
    const buttonHeight = yesButton.offsetHeight;
    
    yesButton.style.position = 'absolute';
    yesButton.style.top = `${(containerHeight - buttonHeight) / 2}px`; // Center vertically
    yesButton.style.left = '50%'; // Center horizontally
    yesButton.style.transform = 'translateX(-50%)'; // Exact horizontal centering
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
