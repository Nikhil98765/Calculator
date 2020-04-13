var ButtonModel = function(id, value, options) {
    if(options == undefined){
        options = {};
    }
    this.options = {
//        width :  ((options.width) || ('25%')),
//        height : ((options.height) || ('60px'))
    }

    this.value = value;
    this.id = id;
}
