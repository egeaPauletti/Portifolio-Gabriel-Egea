function digitarTexto(elemento, texto, velocidade) {
            let index = 0;
            elemento.style.opacity = "1";

            function digitar() {
                if (index < texto.length) {
                    elemento.textContent += texto[index];
                    index++;
                    setTimeout(digitar, velocidade);
                } else {
                    elemento.style.borderRight = "none";
                }
            }
            digitar();
        }

        setTimeout(() => {
            
            let texto2 = document.querySelector(".textName");
            digitarTexto(texto2, "{Gabriel Egea}", 100);
        }, 1000);