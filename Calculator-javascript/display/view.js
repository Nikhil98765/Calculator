var DisplayView = function(model){
    var displayElement;
    var init = function(){
        createDisplay();
    }

    var createDisplay = function(){
        displayElement = document.createElement("INPUT");

        displayElement.style.backgroundColor = model.options.backgroundColor;
        displayElement.style.color = model.options.color;
//        displayElement.style.height = model.options.height;
        displayElement.style.width = model.options.height;
//        displayElement.setAttribute("disabled");
        displayElement.id = model.id;
    }

    



    init();
    return displayElement;
}
