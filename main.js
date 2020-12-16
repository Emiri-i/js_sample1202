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
