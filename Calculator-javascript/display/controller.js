var DisplayController = function(id,options){
    var displayModel, displayView , scope = this;
    var init = function(){
        displayModel = new DisplayModel(id,options);
        displayView = new DisplayView(displayModel);

    }

    this.updateScreen = function(val){

        displayView.value = val;

        return displayView;
    }




    this.getDisplayElement = function(){
        return displayView;
    }

    init();
    return scope;

}
