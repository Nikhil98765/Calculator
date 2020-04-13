var CalculatorModel = function(id,options){
    if(options == undefined){
        options = {};
    }
    this.options = {
        operatorButtons : ((options.operatorButtons) || (['/','*','-','+','='])) ,
        numberButtons : ((options.numberButtons) || (['7','8','9','4','5','6','1','2','3','00','0','.']) ),
        functionButtons : ((options.functionButtons) || (['C','CE','⌫'])),
        type : ((options.type) || ('basic'))
    }

    this.id = id;

}
