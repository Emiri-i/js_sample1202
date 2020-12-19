// const fruits = new Array();
const fruits = [
    'リンゴ','バナナ'
];
console.log(fruits);

fruits.push('みかん');
console.log(fruits);   //constで定義しても後から配列を追加できる

//callBack関数 inputの中に関数が入ってくるもの
fruits.forEach(function(input){
    console.log(input);
});

//一般的な関数の作り方
//function getItem (){}

// コールバック関数 名前がない関数（無名関数）
// ES6 アロー関数
// 関数の名前在り
// const getItem = () => {console.log('アロー')};
const getItem = () => console.log('アロー');
getItem();

//関数の名前なし
fruits.forEach((input) => {
    console.log(input);
});
fruits.forEach( input =>  console.log(input));


//Array.filter
const scores = [10,20,30,40];
const newScores = scores.filter(input => input >= 30);
/* 
const newScores = scores.filter(function(input){
    return input >= 30;
});
*/
console.log(newScores);


//Array.find
const members = ['本田','香川','長友'];
const member = members.find(input => input === '長友');
console.log(member);

//Array.map
const userList = [10,20,30,40];
const userIdList = userList.map((value) => `user_${value}`);
console.table(userIdList);