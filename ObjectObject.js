//Object
const t= new Object();
//簡単な書き方
const test = {
    test1:10, //左側のtest1,test2などは''で囲まなくてよい
    test2:20,
    test3:30,
};
console.log(test);
console.log(Object.values(test));

for(v of Object.values(test)) {
    console.log(v);
}

// 郵便番号 7文字＆ハイフンチェック
const postalCode = '123-4567'

function checkPostalCode(string){
    const replaced = string.replace('-','');
    const lengthStr = replaced.length;
    if(lengthStr === 7) {
        return true;
    }
    return false;
}
console.log(checkPostalCode(postalCode));

