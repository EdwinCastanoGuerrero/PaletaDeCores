
//Cores

let colorCards = document.querySelectorAll('div[id^="color_"]');
let mainColor = document.querySelector("#main_color"); //Quadrado principal

//Ranges
let red = document.querySelector("#range_red");
let green = document.querySelector("#range_green");
let blue = document.querySelector("#range_blue");

//cor base
let colors = [
    { red: 0, green: 0, blue: 0 },
    { red: 50, green: 0, blue: 0 },
    { red: 100, green: 0, blue: 0 },
    { red: 150, green: 0, blue: 0 },
    { red: 255, green: 0, blue: 0 },
];

//cor selecionada
let colorCardIndex = 0;

setDefaultColorCards();

setSelectedColorCard(colorCardIndex);

function setDefaultColorCards() {
    colorCards.forEach((card, index) => {
        card.style.backgroundColor = `rgb(${colors[index]?.red || 0},${colors[index]?.green || 0},${colors[index]?.blue || 0})`;
    });
}

function setSelectedColorCard(index) {
    
    // atualizar o índice da cor selecionada
    colorCardIndex = index;

    // remover todas as seleções visuais do HTML
    colorCards.forEach(card => {
        card.classList.remove('border-3', 'border-white');
    });

    // definir a cor selecionada (visualmente)
    colorCards[index].classList.add('border-3', 'border-white');


    //definindo a cor da caixa principal
    mainColor.style.backgroundColor = `rgb(${colors[index]?.red || 0},${colors[index]?.green || 0},${colors[index]?.blue || 0})`;

    red.value = colors[index]?.red || 0;
    green.value = colors[index]?.green || 0;
    blue.value = colors[index]?.blue || 0;
    
    // Atualizar os valores exibidos
    document.querySelector("#value_red").textContent = colors[index]?.red || 0;
    document.querySelector("#value_green").textContent = colors[index]?.green || 0;
    document.querySelector("#value_blue").textContent = colors[index]?.blue || 0;
}


red.addEventListener('input', () => {
    colors[colorCardIndex].red = red.value;
    document.querySelector("#value_red").textContent = red.value;
    updateMainColor();
    updateColorCard();
});
green.addEventListener('input', () => {
    colors[colorCardIndex].green = green.value;
    document.querySelector("#value_green").textContent = green.value;
    updateMainColor();
    updateColorCard();
});
blue.addEventListener('input', () => {
    colors[colorCardIndex].blue = blue.value;
    document.querySelector("#value_blue").textContent = blue.value;
    updateMainColor();
    updateColorCard();
});



//funções

function updateMainColor(){
    mainColor.style.backgroundColor = `rgb(${colors[colorCardIndex].red},${colors[colorCardIndex].green},${colors[colorCardIndex].blue})`;
}

function updateColorCard(){
    colorCards[colorCardIndex].style.backgroundColor = `rgb(${colors[colorCardIndex].red},${colors[colorCardIndex].green},${colors[colorCardIndex].blue})`;
}



colorCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        setSelectedColorCard(index);
    });
});

//exportar as cores

document.querySelector("#btn_export").addEventListener("click", () => {
    // Lógica para exportar as cores
    let colorSString = '';
    colors.forEach(color => {
        colorSString += `rgb(${color.red}, ${color.green}, ${color.blue})\n`;
    });
    navigator.clipboard.writeText(colorSString);
    document.querySelector("#export_message").classList.remove("hidden");
    setTimeout(() => {
        document.querySelector("#export_message").classList.add("hidden");
    }, 3000);
});

