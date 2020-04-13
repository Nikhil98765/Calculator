var NumberController = function(value,id,options){

    ButtonController.call(this,value,id,options);

    var init = function(){

    }

    init();


}
NumberController.prototype = Object.create(ButtonController.prototype);
NumberController.prototype.constructor = NumberController;
