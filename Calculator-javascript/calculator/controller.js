var CalculatorController = function(id,options){

    var calcModel, calcView, numberButtons = [], operatorButtons = [], scope = this, displayCtrl, functionButtons = [];
    var init = function(){
            calcModel = new CalculatorModel(id,options);
            renderCalc();
        }

        var renderCalc = function() {

                    calcView = new CalculatorView(calcModel);
                    populateNumberButtons();
                    populateOperatorButtons();
                    populateFunctionButtons();
                    attachDisplay();


                }

        var populateNumberButtons = function() {
                  var btnCtrl, btnViews = [];
                  for(var i = 0; i < calcModel.options.numberButtons.length; i++){

                   btnCtrl = new NumberController('num-btn-'+i, calcModel.options.numberButtons[i]);

                   numberButtons.push(btnCtrl);

                   btnCtrl.clickHandle = function (event, id, value)  {
                        scope.onNumberClick (event, id, value) ;
                   }

                   btnViews.push(btnCtrl.getBtnElement());
                  }
                  calcView.addNumberButtons(btnViews);
                }


        var populateOperatorButtons = function() {
                  var opBtnCtrl, opBtnViews = [];
                  for(var i = 0; i < calcModel.options.operatorButtons.length; i++){

                    opBtnCtrl = new OperatorController('op-btn-'+i,calcModel.options.operatorButtons[i]);

                    operatorButtons.push(opBtnCtrl);

                    opBtnCtrl.clickHandle = function (event, id, value)  {
                        if(value === '='){
                              scope.onEqualBtnClick(event, id, value);
                               }else{

                                scope.onOperatorClick (event, id, value) ;
                        }
                    }

                    opBtnViews.push(opBtnCtrl.getBtnElement());
                  }

                  calcView.addOperatorButtons(opBtnViews);

                }


         var populateFunctionButtons = function(){
            var funcBtnCtrl, funcBtnViews = [];
                              for(var i = 0; i < calcModel.options.functionButtons.length; i++){

                               funcBtnCtrl = new ButtonController('func-btn-'+i, calcModel.options.functionButtons[i]);

                               functionButtons.push(funcBtnCtrl);

                               funcBtnCtrl.clickHandle = function (event, id, value)  {
                                     if(value === 'C'){
                                           scope.onClearBtnClick(event, id, value);
                                    }else if(value === '⌫'){
                                            scope.onDelClick(event, id, value);
                                    }else if(value === 'CE'){
                                            scope.onClearBtnClick(event, id, value);
                                                 }
                               }

                               funcBtnViews.push(funcBtnCtrl.getBtnElement());
                              }
                              calcView.addFunctionButtons(funcBtnViews);
         }


        var attachDisplay = function(){

                    displayCtrl = new DisplayController("dis-cmp");


                    calcView.addDisplay(displayCtrl.getDisplayElement());
                }




        this.onNumberClick = function (event, id, value) {

                var displayElement = displayCtrl.getDisplayElement().value;

                 var result = displayElement + event.target.value;

                displayCtrl.updateScreen(result);
        }


        this.onOperatorClick = function (event, id, value){

            var displayElement = displayCtrl.getDisplayElement().value;

            var result = displayElement + event.target.value;

            displayCtrl.updateScreen(result);
        }

        this.onEqualBtnClick = function(event, id, value){

            var expression = displayCtrl.getDisplayElement().value;

            var result = "" + eval(expression);

            displayCtrl.updateScreen(result);
        }

        this.onClearBtnClick = function(event, id, value){

            displayCtrl.updateScreen("");
        }

        this.onDelClick = function(event, id, value){
            var expression = displayCtrl.getDisplayElement().value;
            displayCtrl.updateScreen(expression.substring(0,expression.length-1));
        }



        init();
        return this;
    }
