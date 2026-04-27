
//Cores

let colorCards = document.querySelectorAll('div[id^="color_"]');
let mainColor = document.querySelector("#main_color"); //Quadrado principal

//Ranges
let red = document.querySelector("#range_red");
let green = document.querySelector("#range_green");
let blue = document.querySelector("#range_blue");

//cor base
let colors = [
    {red: 0, green: 0, blue: 0},
    {red: 0, green: 0, blue: 0},
    {red: 0, green: 0, blue: 0},
    {red: 0, green: 0, blue: 0},
    {red: 0, green: 0, blue: 0},
];

//cor selecionada
let colorCardIndex = 0;

setDefaultColorCards();

setSelectedColorCard(colorCardIndex);

function  setDefaultColorCards(){
    colorCards.forEach((card, index) => {
        card.style.backgroundColor = `rgb(${colors[index]?.red || 0},${colors[index]?.green || 0},${colors[index]?.blue || 0})`;
    });
}

function setSelectedColorCard(index){

    // remover todas as seleções visuais do HTML
    colorCards.forEach(card => {
        card.classList.remove('border-3', 'border-white');
    });

    // definir a cor selecionada (visualmente)
    colorCards[index].classList.add('border-3', 'border-white');

}

colorCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        setSelectedColorCard(index);
    });
});