// Ikoner fra font awesome
var bar_icon = "fa-bars";
var x_icon = "fa-times";

// Ved klikk på ikon
document.getElementById("icon").addEventListener("click", toggle_function);

function toggle_function(){
    // Endre ikon
    var toggle_icon = document.querySelector("#icon");
    toggle_icon.classList.toggle(bar_icon);
    toggle_icon.classList.toggle(x_icon);

    // Hent ut alle active-elements, elementer som skal endre synlighet ved klikk på ikonet
    var active_element_list = document.querySelectorAll(".active-element");
    // Kjør gjennom alle og endre 
    for (x = 0; x < active_element_list.length; x++ ){
        active_element_list[x].classList.toggle("active");
    }
        
}
