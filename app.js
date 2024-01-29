let header = document.querySelector('.header');
let navbar = document.querySelector('.navbar');
let bars = document.getElementById('menu-bar');
let appoint = document.querySelector('.btn')

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

bars.addEventListener('click', () => {
    bars.style.color = 'black';
})


const gameOfTheYear = [{
        game: "Resident Evil 4 Remake",
        year: 2023,
        developer: "Capcom",
        score: 9.7,
        dlc: "Yes",
        gameYearWinner: "Yes"
    },

    {
        game: "Alan Wake 2",
        year: 2023,
        developer: "Remedy",
        score: 9.5,
        dlc: "No",
    },

    {
        game: "Baldur's Gate III",
        year: 2023,
        developer: "Larian Studios",
        score: 9.0,
        dlc: "No",
    },

    {
        game: "Spider-Man 2",
        year: 2023,
        developer: "Insomiac Game",
        score: 9.3,
        dlc: "TBD",
    },

    {
        game: "The Legend of Zelda: Tears of the Kingdom",
        year: 2023,
        developer: "Nintendo",
        score: 9.6,
        dlc: "TBD",
    }
]

const gameYearNoms = gameOfTheYear.map(game => `Game: ${game.game}, Year: ${game.year},`).join('\n');

console.log(`Nominees for Game of the Year are:\n${gameYearNoms}`);

const gameWinner = gameOfTheYear.filter((win) => win.gameYearWinner);
console.log(gameWinner);


const bestStoryGame = [{
        game: "Alan Wake 2",
        year: 2023,
        developer: "Remedy",
        score: 9.5,
        dlc: "No",
        gameStoryWinner: "Yes"
    },

    {
        game: "Final Fantasy 16",
        year: 2023,
        developer: "Square Enix",
        score: 8.6,
        dlc: "No",
    },

    {
        game: "Cyberpunk 2077: Phantom Liberty",
        year: 2023,
        developer: "CD Projekt Red",
        score: 8.8,
        dlc: "Yes",
    },

    {
        game: "Spider-Man 2",
        year: 2023,
        developer: "Insomiac Game",
        score: 9.3,
        dlc: "TBD",
    },

    {
        game: "Hogwarts Legacy",
        year: 2023,
        developer: "Portkey Games",
        score: 8.5,
        dlc: "TBD",
    },

    {
        game: "Baldur's Gate III",
        year: 2023,
        developer: "Larian Studios",
        score: 9.0,
        dlc: "No",
    },

    {
        game: "Starfield",
        year: 2023,
        developer: "Bethesda",
        score: 8.2,
        dlc: "TBD",
    },

    {
        game: "Star Wars Jedi Survivor",
        year: 2023,
        developer: "Respawn Entertainment",
        score: 8.2,
        dlc: "No",
    }
]