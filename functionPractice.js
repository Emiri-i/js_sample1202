// ユーザ定義関数
function test() {
    console.log('テスト');
}
test();

const comment ='コメント';
function getComment(string) {
    console.log(string);
}
getComment(comment);

function getNumberOfComment() {
    return 5;
}
console.log(getNumberOfComment());

function sumPrice(int1,int2){
    let int3 = int1 + int2;
    return int3;
}

const total = sumPrice(3,5);
console.log(total);