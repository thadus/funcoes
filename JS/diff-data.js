function dataInicial() {
    // http://stackoverflow.com/questions/2609513/jquery-calculate-day-difference-in-2-date-textboxes#answer-2609579
    // Data inicial é o última dia possível de tirar relatório
    var start = new Date('2016-05-01 GMT-0300');
    // Data final, dia atual
    var end = new Date;
    
    // Se diferença entre estas datas for menor que 6 meses (180 dias), data menor fixa em '01/05/2016'
    if ((end - start)/1000/60/60/24 < 180) {
        return '01/05/2016';
    }
    
    // Se não for, pega 6 meses atrás
    // http://stackoverflow.com/questions/5511323/javascript-yesterday#answer-5511376
    end.setDate(end.getDate() - 180);
    return end.toLocaleDateString();
}