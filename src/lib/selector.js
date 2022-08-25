/**
 * Returns the Element Object of target
 * - If target is a {string} it must be an HTMl selector (e.g. '#name' or 'name')
 *
 * @param target
 * @param checkExists
 * @returns {{nodeName}|*}
 */
export function ctd(target, checkExists = 0){
	// Return the target is an Element
	if(target && target.nodeName) return target;

	// If target is a string
	if (typeof target === 'string' || target instanceof String) {
		if (target.charAt(0) == '#') target = target.substring(1);		// Strip leading '#' if prepended to string
		let dom = document.getElementById(target);                  	// See if the string is an element's HTML ID
		if (dom) {                                                  	// If the string is an element's HTML ID; return the DOM
			return dom;
		}
	}
}