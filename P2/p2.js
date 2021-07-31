//MileidyMariaRibeiroEliasBento

function cDiaria(tipoquarto) {
    var diaria = 0;


    if (tipoquarto === 'single') {
        diaria = 139;

    }
    else if (tipoquarto === 'double') {
        diaria = 220;

    }
    else if (tipoquarto === 'triplo') {
        diaria = 340;

    }

    return (diaria);
}

var QuantidadeDeDias = {

    inDays: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2 - t1) / (24 * 3600 * 1000));
    },

}

function reservar(diaentrada, diasaida, tipoquarto) {
    var d1 = new Date(diaentrada);
    var d2 = new Date(diasaida);
    var tempo = QuantidadeDeDias.inDays(d1, d2);
    var numcrianca = parseFloat(document.getElementById("numcriancas").value);
    var precocrianca = 30 * numcrianca;
    var preco = (cDiaria(tipoquarto) + precocrianca) * tempo; 

    if (tipoquarto === 'single' && numcrianca > 3) { 
        alert('Número máximo de hóspedes atingido! Quantidade deve ser menor que 4 pessoas, incluindo as crianças!')
    } 
    else if (tipoquarto === 'double' && numcrianca >> 2) {
        alert('Número máximo de hóspedes atingido! Quantidade deve ser menor que 4 pessoas, incluindo as crianças!')

    }
    else if (tipoquarto === 'triplo' && numcrianca > 1) {
        alert('Número máximo de hóspedes atingido! Quantidade deve ser menor que 4 pessoas, incluindo as crianças!')

    } else {

        alert('Total da Hospedagem: R$ ' + preco);
    }


}