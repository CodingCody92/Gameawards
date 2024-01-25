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
        score: 97,
        dlc: "Yes",
        winner: "Yes"
    },

    {
        game: "Alan Wake 2",
        year: 2023,
        developer: "Remedy",
        score: 95,
        dlc: "No",
        winner: "No"
    }
]

const gameWinner = gameOfTheYear.filter(win.win.winner);
console.log(gameWinner);