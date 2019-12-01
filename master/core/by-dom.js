/***********************************************************
 *  All DOM related functions
 ***********************************************************/


/**
 * Add a class to the specified DOM
 *
 * @param dom           DOM to add a class to
 * @param className     The class name to add
 */
export function addClass(dom, className){
    dom.classList.add(className);
}

/**
 * Show an element (if it was previously hidden)
 *
 * @param dom        The specified DOM
 */
export function show(dom) {
    dom.classList.remove('hide');
}

export function holda(){
    console.log("at holda");
}