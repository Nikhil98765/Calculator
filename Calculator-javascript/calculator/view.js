var CalculatorView = function(model){
    var scope = this, calcView, displayShell,btnShell, numberBtnShell, operatorBtnShell,functionBtnShell;
    var init = function(){
        renderCalculatorShell();
    }

    var renderCalculatorShell = function(){
        calcView = document.createElement("div");

        calcView.id = model.id;
        calcView.className = "calc";

        displayShell = document.createElement("div");
        displayShell.className = "calc-display";

        btnShell = document.createElement("div");
        btnShell.className = "calc-btns";
        numberBtnShell = document.createElement("div");
        numberBtnShell.className = "number-buttons";
        operatorBtnShell = document.createElement("div");
        operatorBtnShell.className = "operator-buttons";
        functionBtnShell = document.createElement("div");
        functionBtnShell.className = "function-buttons";

        calcView.appendChild(displayShell);
        calcView.appendChild(btnShell);
        btnShell.appendChild(functionBtnShell);

        btnShell.appendChild(operatorBtnShell);
        btnShell.appendChild(numberBtnShell);
        document.body.appendChild(calcView);
        calcView.tabIndex = '0';
    }

     this.addNumberButtons = function(buttons) {
        for(var i =0; i < buttons.length;i++) {
            numberBtnShell.appendChild(buttons[i]);
        }
    }

    this.addOperatorButtons = function(buttons) {
        for(var i =0; i < buttons.length;i++) {
            operatorBtnShell.appendChild(buttons[i]);
        }
    }

    this.addDisplay = function (display) {
        displayShell.appendChild(display);
    }

    this.addFunctionButtons = function(buttons){
        for(var i = 0; i < buttons.length ; i++){
            functionBtnShell.appendChild(buttons[i]);
        }
    }

    init();
    return this;
}


