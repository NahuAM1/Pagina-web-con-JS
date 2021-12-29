const menu = document.querySelector('.menu');
const menu_nav = document.querySelector('.menu-navegacion');

// console.log(menu); //ESTE ES EL ICONITO DE MENU
// console.log(menu_nav);

menu.addEventListener('click', ()=>{ // ESTO ES PARA LLAMAR A LA CLASE SPREAD LA CUAL MUESTRA LA BARRA DE NAVEGACION
    menu_nav.classList.toggle("spread")
});

window.addEventListener('click', e=>{ //lo que hace este evento es etiquetar todo lo que se haga click
    if(menu_nav.classList.contains("spread") && e.target != menu && e.target != menu_nav){
        menu_nav.classList.toggle("spread")
        
    }
})