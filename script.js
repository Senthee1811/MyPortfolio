const toTop = document.querySelector(".back-top"); 

document.addEventListener("DOMContentLoaded", () => {
    const toTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 75) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });

    toTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
