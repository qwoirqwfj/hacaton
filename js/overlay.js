document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".slider-item").forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});