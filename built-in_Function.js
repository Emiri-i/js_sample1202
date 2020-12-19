//built in function
//concat
const test = 'テスト';
const test_2 = 'です';
console.log(test.concat(test_2));

//trim
const greeting = '  Hello World!  ';
console.log(greeting);
console.log(greeting.trim());

//substring
const str = 'Mozilla';
console.log(str.substring(1,3));

//replace
const test_3 = 'テストです';
console.log(test_3.replace('テスト','ファイト'));


//map
const myMap = new Map();
myMap.set('id',3);
myMap.set('name','本田');
console.log(myMap);
console.log(myMap.get('name'));
console.log(myMap.keys());
const valueList = myMap.values();
console.log(valueList);
for(v of valueList){
    console.log(v);
}
