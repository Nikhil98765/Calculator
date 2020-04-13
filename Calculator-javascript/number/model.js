var NumberModel = function(value,id,options){

    if(options == undefined){
            options = {};
        }

    ButtonModel.call(this,value,id,options);
    this.type = "number";

}

NumberModel.prototype = Object.create(ButtonModel.prototype);
NumberModel.prototype.constructor = NumberModel;
