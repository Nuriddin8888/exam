const navAnim = () => {

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-list");
    const navList = document.querySelectorAll(".nav-list li");


    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");


        navList.forEach((link, index) => {
            if (link.style.animation) {
            link.style.animation = "";
            } else {
                link.style.animation = `navListMove 0.5s ease forwards ${
                    index / 7 +0.35
                }s`;
            }
        });        


        burger.classList.toggle("toggle");

    });
};

navAnim();