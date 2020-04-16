/**
 * Contains functions that help with validation
 */


export const valid = {

    /**
     * Returns True if the data is valid Json; False otherwise
     *
     * @param data {String}     The string you want to check for validation
     * @returns {boolean}       True if Json; False otherwise
     */
    'isJson': function(data){
        try{
            JSON.parse(data);
        }
        catch(e){
            return false;
        }
        return true;
    }
};