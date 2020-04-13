var ButtonView = function(model){
     var btElement;
     var init = function(){
         createButton();
     }

     var createButton = function(){
         btElement = document.createElement("button");
//         btElement.style.width = model.options.width;
//         btElement.style.height = model.options.height;
         btElement.value = model.value;
         btElement.innerHTML = model.value;
         btElement.id = model.id;

     }

     init();
     return btElement;
 }

