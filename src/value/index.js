/**
 * Contains Value related functions
 */


export const val = {

    /**
     * Return true if the value is a Key in an Object
     *
     * @param obj {Object} The object to search
     * @param value {String|Number} The value to search for
     */
    isKey: function(obj, value){
        return obj.hasOwnProperty(value);
    },

    /**
     * Return True if the specified value exists in an array
     *
     * @param haystack  The array
     * @param needle    The value being searched
     * @returns {boolean} True if the value is in the array
     */
    inArray: function(haystack, needle){
        return haystack.indexOf(needle) > -1;
    },
};