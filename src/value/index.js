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
    }
};