function CalcularPorcentagem(){
    const valor = parseFloat(document.getElementById("valor").value);
    const porcent = parseFloat(document.getElementById("porcent").value);

    const aumento = valor * (porcent / 100);
    const novo_valor = valor + aumento;

    document.querySelector("p").innerHTML = novo_valor;
}