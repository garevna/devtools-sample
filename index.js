var circle = document.querySelector ( ".circle" )
circle.style.visibility = "visible"

var button = document.querySelector ( "button" )

button.onclick = function ( event ) {
        circle.style.visibility = circle.style.visibility === "visible" ?
                                     "hidden" : "visible"
        button.innerHTML = button.innerHTML === "Показать" ? "Скрыть" : "Показать"
}
