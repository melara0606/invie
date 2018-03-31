var $menu = document.getElementById("menu")
var $burgenButton = document.getElementById("burger-button")

var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery)

function mediaQuery() {
  if(consulta.matches){
    $burgenButton.addEventListener('touchstart', ToggleMenu, true)
  }else{
    $burgenButton.removeEventListener('touchstart', ToggleMenu, false)
  }
}
function ToggleMenu() {
  $menu.classList.toggle('active')
}
mediaQuery();

var bLazy = new Blazy({
  selector: 'img'
});

function showMenu() {
  $menu.classList.add('active')
}

function hideMenu() {
  $menu.classList.remove('active')
}

// Eventos para la app
var $body = document.body
var gestos = new Hammer($body);

gestos.on('swipeleft', hideMenu)

gestos.on('swiperight', showMenu)