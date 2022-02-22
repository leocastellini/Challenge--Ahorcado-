
      

        let palabras = Array("Alura","Oracle","Sandia","Manzana","Pomelo","Melon");
        let palabraOc = "";//Palabra oculta
        let palabraAdi = "";//Palabra que adivina el usuario
        let vidas = 4;
        var inicio = iniciar();
        document.getElementById("boton").addEventListener("click",INICIARJUEGO);
       
        function iniciar() {
            
            palabraOc = palabras[Math.floor(Math.random() * palabras.length)];
            for (let i = 0; i < palabraOc.length; i++) {
                palabraAdi += "_ ";
            }
            document.getElementById("frase").innerHTML = palabraAdi;
        }
        
        function INICIARJUEGO(){
            let letra = document.getElementById("letra").value.toLowerCase();
            palabraOc = palabraOc.toLowerCase();
            let nuevo = "";
            for (let i = 0;i<palabraOc.length;i++) {
                if(letra == palabraOc[i]){
                    nuevo = nuevo + letra + " ";
                } else {
                    nuevo = nuevo + palabraAdi[i*2] + " ";
            }
         }
            if (nuevo ==palabraAdi) {
                vidas--;
                document.getElementById("vida").innerHTML = "El número de vidas que quedan son:" + vidas;
            }
            palabraAdi = nuevo;
            document.getElementById("frase").innerHTML = palabraAdi;
            if (vidas == 0) {
                alert("Perdiste :( ");
            }
            if (palabraAdi.search("_") == -1) {
                alert("Ganaste :D");
            }

            document.getElementById("letra").value = "";
            document.getElementById("letra").focus();
            dibujar();
        }
        var agregar = textoAgregado;  
        function agregar(palabras){
        var botonAgregar = document.querySelector("#nuevapalabra");
              alert("palabra agregada");
              event.preventDefault();
             console.log(clickeado);
         }
       