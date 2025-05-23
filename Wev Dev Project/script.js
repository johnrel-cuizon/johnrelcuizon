document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};