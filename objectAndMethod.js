//オブジェクトの書き方
// postalCode = '123-4567'
const postal = {
    //①
    /* 
    checkPostalCode:function() {

    }
    */
   //②
   /* 
   checkPostalCode:(){}
   */

   postalcode:'123-4567',

   //this.postalcode thisはオブジェクト全体
   checkPostalCode(){
    const replaced = this.postalcode.replace('-','');
    const lengthStr = replaced.length;
    if(lengthStr === 7) {
        return true;
    }
    return false;
   }
    
};

console.log(postal.checkPostalCode());