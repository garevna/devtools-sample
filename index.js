var scheme = document.querySelector ( "#block-scheme" )
circle.style.visibility = "visible"

var button = document.querySelector ( "button" )

button.onclick = function ( event ) {
        scheme.style.visibility = scheme.style.visibility === "visible" ?
                                     "hidden" : "visible"
        button.innerHTML = button.innerHTML === "Показать" ? "Скрыть" : "Показать"
}
