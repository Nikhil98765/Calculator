var DisplayModel = function(id, options){
    if(options == undefined){
        options = {};
    }
    this.options = {
//        rows : ((options.rows) || ("4")),
//        cols : ((options.cols) || ("33" )),
//        backgroundColor : ((options.backgroundColor) || ("grey")),
//        height : ((options.height) || ('50%')),
        width : ((options.width) || ('200px')),
        color : ((options.color) || ("white"))
    }
    this.id = id

}
