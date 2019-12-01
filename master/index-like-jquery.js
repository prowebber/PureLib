
// Found on

let Constructor = function (selector){
    if (!selector) return;
    if (selector === 'document') {
        this.elems = [document];
    } else if (selector === 'window') {
        this.elems = [window];
    } else {
        this.elems = document.querySelectorAll(selector);
    }
};

Constructor.prototype.test = function(){
    console.log("This is not friendly...");
};

// let init = function(selector){
//     return new Constructor(selector);
// };




// export default init();
export default function(selector){
    return new Constructor(selector);
}