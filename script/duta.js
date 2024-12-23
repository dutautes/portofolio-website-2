// Burger
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    })
}

navSlide();

// hari
// const days = ['minggu','senin','selasa','rabu','kamis','jumat','sabtu'];
// const daysIndex = new Date().getDay();
// const dayName = days[daysIndex];

// alert(`sekarang adalah hari ${dayName}`)

console.log(window.innerWidth + 'pixels');