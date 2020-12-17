console.log('テスト');

// ""を含む文字は''で囲む。基本''で囲めば問題はない。
// 例
'テ"ス"ト'

//中身の変数の肩を見たい時 typeof
const TEST = 123;
const TEST2 = 'テスト';
console.log(typeof TEST);

//配列
const array = [1,2,3];
const array_2 = [
    ["赤","青","黄"],
    ["緑","紫","黒"]
];
console.log(array_2[0][2]);


//オブジェクト
//{}で囲むと作れる
const member = {
    //キー、バリュー
    'name':'本田君',
    'height':170,
    'hobby':'サッカー'
};
console.log(member['hobby']);
console.log(member.hobby);

//連想配列
const member_2 = {
    '本田':{
        'height':170,
        'hobby':'サッカー'
    },
    '香川':{
        'height':165,
        'hobby':'サッカー'
    }
};
console.log(member_2['香川']['height']);
console.log(member_2.香川.height); //ドットだと日本語表示がうまくいかないことがある

const member_3 = {
    '1kumi':{
        '本田':{
            'height':170,
            'hobby':'サッカー'
        },
        '香川':{

        }
    },
    '2kumi':{}
};
console.log(member_3['1kumi']['本田']['hobby']);

//演算子
const test_1 = 4;
const test_2 = 3;
const test_3 = test_1 + test_2;
console.log(test_3);

//if文
const height = 91;
console.log(typeof height);
if(height === 90) {
    console.log('伸長は' + height +'cmです');
} else {
    console.log('伸長は90cmではありません');
}

// == 一致
// === 型も一致
// !== 型も判定。基本的に!==を使う。

const signal_1 = 'red';
const signal_2 = 'blue';
if(signal_1 === 'red' && signal_2 === 'blue') {
    console.log('赤と青');
}

//三項演算子
const score = 80;
const comment = score > 80 ? 'good'  : 'not good' ;
console.log(comment);

//繰り返し
//for
//for in あまり使われない
//for of

const scores = [10,20,30];
    for( s of scores ) {
    console.log(s);
}

//switch

const data = 1;
switch(data) {
    case 1:
        console.log('1です');
        break;
    case 2:
        console.log('2です');
        break;
    case 3:
        console.log('3です');
        break;
    default:
        console.log('1-3ではありません');
        break;
}

