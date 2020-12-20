'use strict'
const postal = {

   postalcode:'123-4567',

   checkPostalCode(){
    const replaced = this.postalcode.replace('-','').length;
    // const lengthStr = replaced.length;
    if(replaced === 7) {
        return true;
    }
    return false;
   }
    
};

console.log(postal.checkPostalCode());