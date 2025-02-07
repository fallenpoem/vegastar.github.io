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
    
    // Get the current font size of the button
    const currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    // Increase the font size
    const newFontSize = currentFontSize * 1.5;
    yesButton.style.fontSize = `${newFontSize}px`;

    // Get the current dimensions of the button
    const currentWidth = yesButton.offsetWidth;
    const currentHeight = yesButton.offsetHeight;
    
    // Calculate new dimensions for the button (assuming you want it to grow proportionally)
    const growthFactor = 1.5; // Adjust this value to control the growth rate
    yesButton.style.width = `${currentWidth * growthFactor}px`;
    yesButton.style.height = `${currentHeight * growthFactor}px`;

    // Center the button within its container if necessary
    const container = yesButton.parentElement;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    yesButton.style.position = 'absolute';
    yesButton.style.left = `${(containerWidth - yesButton.offsetWidth) / 2}px`;
    yesButton.style.top = `${(containerHeight - yesButton.offsetHeight) / 2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
