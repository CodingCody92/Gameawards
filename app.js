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



const scroll = document.querySelector(".scroll");
var isDown = false;
var scrollX;
var scrollLeft;

// Mouse Up Function
// happens when you release the mouse button
scroll.addEventListener("mouseup", () => {
    isDown = false;
    scroll.classList.remove("active");
});

// Mouse Leave Function
// The onmouseleave event occurs when the mouse pointer leaves an element.
scroll.addEventListener("mouseleave", () => {
    isDown = false;
    scroll.classList.remove("active");
});

// Mouse Down Function
scroll.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDown = true;
    scroll.classList.add("active");
    scrollX = e.pageX - scroll.offsetLeft;
    scrollLeft = scroll.scrollLeft;
});

// Mouse Move Function
scroll.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    var element = e.pageX - scroll.offsetLeft;
    var scrolling = (element - scrollX) * 2;
    scroll.scrollLeft = scrollLeft - scrolling;
});