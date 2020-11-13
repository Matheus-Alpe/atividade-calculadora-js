const inputResultado = document.getElementById("resultado");

document.querySelectorAll('button').forEach((elemento) => {
    elemento.addEventListener("click", function () {

        const v1 = Number(document.getElementById("v1").value);
        const v2 = Number(document.getElementById("v2").value);

        const resultado = resultadoOperacao(v1, elemento.value, v2);

        inputResultado.value = resultado;
    })
})


function resultadoOperacao(v1, operacao, v2) {

    switch (operacao) {
        case "+":
            return v1 + v2;
            break;
        case "-":
            return v1 - v2;
            break;
        case "*":
            return v1 * v2;
            break;
        case "/":
            return v1 / v2;
            break;
    }
}