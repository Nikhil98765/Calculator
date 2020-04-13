var OperatorModel = function(value,id,options){

    if(options == undefined){
        options = {};
    }
    ButtonModel.call(this,value,id,options);
    this.type = "operator";

}

OperatorModel.prototype = Object.create(ButtonModel.prototype);
OperatorModel.prototype.constructor = OperatorModel;