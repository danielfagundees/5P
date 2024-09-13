function data() {
    let datum = new Date();
    let horas = datum.getHours();
    let minutos = datum.getMinutes();
    let segundos = datum.getSeconds();
    let horario = horas + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);

    let novaDatum = datum.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    alert("Seu cadastro foi feito no dia " + novaDatum + ", às " + horario);
}
