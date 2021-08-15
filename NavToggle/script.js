var bar_icon = "fa-bars";
var x_icon = "fa-times";

// Ved klikk - kjør funksjon
document.getElementById("icon").addEventListener("click", toggle_function);

// Funksjon
    // Finn nav-list
    // Toggle active
    // Endre icon
function toggle_function(){
    var toggle_icon = document.querySelector("#icon");
    if (toggle_icon.classList.contains(bar_icon)){
        toggle_icon.classList.add(x_icon);
        toggle_icon.classList.remove(bar_icon);
    }
    else {
        toggle_icon.classList.add(bar_icon);
        toggle_icon.classList.remove(x_icon);
    }
    var nav_list = document.querySelector(".active-element");
    nav_list.classList.toggle("active");
}
