function showPage() {
    const id = location.hash.slice(1) || "aboutme";
    const target = document.getElementById(id);
    if (!target || !target.classList.contains("page")) return;

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    target.classList.add("active");
}

function openNav() {
    let sidenav = document.getElementById("sidenav");
    let main = document.getElementById("main");

    sidenav.style.width = "340px";
    main.style.marginLeft = "360px";

    let toHide = document.querySelectorAll(".navhide");
    toHide.forEach(c => c.classList.remove('is-hidden'));
}

function closeNav() {
    let sidenav = document.getElementById("sidenav");
    let main = document.getElementById("main");

    sidenav.style.width = "50px";
    main.style.marginLeft = "70px";

    let toHide = document.querySelectorAll(".navhide");
    toHide.forEach(c => c.classList.add('is-hidden'));
}

window.addEventListener("hashchange", showPage);
window.addEventListener("DOMContentLoaded", showPage);