var submit = document.getElementById("boton-start");
submit.addEventListener("click", function() {

    if (document.getElementById("coordenadaX").value != "" && document.getElementById("coordenadaX").value <= 10
        && document.getElementById("coordenadaY").value != "" && document.getElementById("coordenadaY").value <= 6) {

        document.getElementById("area_de_dibujo").classList.toggle("hidden");
        document.getElementById("coordenadas").classList.toggle("hidden");

        document.addEventListener("keydown", dibujarTeclado);
        var cuadrito = document.getElementById("area_de_dibujo");
        var papel = cuadrito.getContext("2d");
        var x = document.getElementById("coordenadaX").value*70;
        var y = document.getElementById("coordenadaY").value*70;

        dibujarLinea("red",x-1, y-1, x+1, y+1, papel);
    } else {
        alert("Las coordenadas deben ser de máximo 10 en X y 6 en Y");
    }

    var teclas = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39
    };

    function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
      lienzo.beginPath();
      lienzo.strokeStyle = color;
      lienzo.lineWidth = 70;
      lienzo.moveTo (xinicial, yinicial);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
    }

    function dibujarTeclado(evento) {
      var color = "#E54E79";
      var movimiento = 70;
      switch(evento.keyCode)
      {
        case teclas.UP:
          dibujarLinea(color, x, y, x, y - movimiento, papel);
          y = y - movimiento;
        break;
        case teclas.DOWN:
          dibujarLinea(color, x, y, x, y + movimiento, papel);
          y = y + movimiento;
        break;
        case teclas.LEFT:
          dibujarLinea(color, x, y, x - movimiento, y, papel);
          x = x - movimiento;
        break;
        case teclas.RIGHT:
          dibujarLinea(color, x, y, x + movimiento, y, papel);
          x = x + movimiento;
        break;
        default:
          console.log("otra tecla");
        break;
      }
    }

});




