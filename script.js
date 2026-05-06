// Seletores
const colorCards = document.querySelectorAll('div[id^="color_"]');
const mainColor = document.querySelector('#main_color');
const redInput = document.querySelector('#range_red');
const greenInput = document.querySelector('#range_green');
const blueInput = document.querySelector('#range_blue');
const valueRed = document.querySelector('#value_red');
const valueGreen = document.querySelector('#value_green');
const valueBlue = document.querySelector('#value_blue');
const exportButton = document.querySelector('#btn_export');
const exportMessage = document.querySelector('#export_message');

const colors = [
    { red: 0, green: 0, blue: 0 },
    { red: 50, green: 0, blue: 0 },
    { red: 100, green: 0, blue: 0 },
    { red: 150, green: 0, blue: 0 },
    { red: 255, green: 0, blue: 0 },
];

let selectedIndex = 0;

init();

function init() {
    setDefaultColorCards();
    setSelectedColorCard(selectedIndex);
    attachListeners();
}

function attachListeners() {
    colorCards.forEach((card, index) => {
        card.addEventListener('click', () => setSelectedColorCard(index));
    });

    redInput.addEventListener('input', ({ target }) => updateCurrentColor('red', target.value));
    greenInput.addEventListener('input', ({ target }) => updateCurrentColor('green', target.value));
    blueInput.addEventListener('input', ({ target }) => updateCurrentColor('blue', target.value));

    exportButton.addEventListener('click', exportColors);
}

function rgbString(color) {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`;
}

function setDefaultColorCards() {
    colorCards.forEach((card, index) => {
        card.style.backgroundColor = rgbString(colors[index] || { red: 0, green: 0, blue: 0 });
    });
}

function setSelectedColorCard(index) {
    selectedIndex = index;
    colorCards.forEach(card => card.classList.remove('border-3', 'border-white'));
    colorCards[index].classList.add('border-3', 'border-white');

    updateMainColor();
    updateSelectedInputs();
}

function updateSelectedInputs() {
    const color = colors[selectedIndex];
    redInput.value = color.red;
    greenInput.value = color.green;
    blueInput.value = color.blue;
    updateValueLabels(color);
}

function updateValueLabels(color) {
    valueRed.textContent = color.red;
    valueGreen.textContent = color.green;
    valueBlue.textContent = color.blue;
}

function updateCurrentColor(channel, value) {
    colors[selectedIndex][channel] = Number(value);
    updateValueLabels(colors[selectedIndex]);
    updateMainColor();
    updateColorCard();
}

function updateMainColor() {
    mainColor.style.backgroundColor = rgbString(colors[selectedIndex]);
}

function updateColorCard() {
    colorCards[selectedIndex].style.backgroundColor = rgbString(colors[selectedIndex]);
}

function exportColors() {
    const exportText = colors.map(rgbString).join('\n');
    navigator.clipboard.writeText(exportText);
    showExportMessage();
}

function showExportMessage() {
    exportMessage.classList.remove('hidden');
    setTimeout(() => exportMessage.classList.add('hidden'), 3000);
}

