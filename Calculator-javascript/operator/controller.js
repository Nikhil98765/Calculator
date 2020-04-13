var OperatorController = function(value,id,options){

    ButtonController.call(this,value,id,options);

    var init = function(){

    }

    init();


}
OperatorController.prototype = Object.create(ButtonController.prototype);
OperatorController.prototype.constructor = OperatorController;