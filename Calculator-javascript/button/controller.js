var ButtonController = function(id, value, options){
    var btnModel, btnView, scope = this;

    var init = function(){
        btnModel = new ButtonModel(id, value, options);
        btnView = new ButtonView(btnModel);
        btnView.onclick = function(evt) {
            scope.clickHandle(evt, id, value);
        }
    }

    this.clickHandle = function (event, id, value) {

    }

    this.getBtnElement = function() {
        return btnView;
    }

    init();
    return scope;
}



