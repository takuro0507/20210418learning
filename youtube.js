// let youtuber = {
//     list: {
//         business:{
//         youtuber:[
//             {name:"タクロー",age:27,learningPrograming(){}},
//             {name:"あっちゃん",age:37,teachingHistory(){}}
//         ],
//         teach(){}
//     },
//         entertainment:{
//             youtuber:[
//             {name:"ヒカキン"},
//             {name:"あっちゃん"}
//         ],
//         makesmile(){}
//     }
//     },
//     plan(){}
//     uploadvideo(){}
// };

// window.console.log();
// alert();



// function isTweetable(text) {
//     return text.length <= 140;
    
// }

// const isTweetable = function(text) {
//     return text.length <= 140;
// }

// console.log(isTweetable('foo'));



// function alertTweetable(text) {
//     if (isTweetable(text)) {
//         alert("you can tweet!");
//     } 
// }

// alertTweetable("foo");

// // コールバック関数
// // function 高階関数(コールバック関数) {
// //     // 処理
// //     コールバック関数();
// // }

// // 高階関数を使わない場合
// function bring(food) {
//     if (/*手洗いが終えたら*/) {
//         // 食材を持ってきてもらう処理
//     }
// }
// function peer(food) {
//     if (/*手洗いが終えたら*/) {
//         // 食材を持ってきてもらう処理
//     }
// }
// function cut(food) {
//     if (/*手洗いが終えたら*/) {
//         // 食材を持ってきてもらう処理
//     }
// }

// // 高階関数を使う場合
// function washed(fn,food) {
//     if (/*手洗いが終えたら*/) {
//         fn();// コールバック関数の処理
//     }
// }

// function bring(food) {
//         // 食材を持ってきてもらう処理
//     }

// function peer(food) {
//         // 食材を持ってきてもらう処理
//     }

// function cut(food) {
//         // 食材を持ってきてもらう処理
//     }


// washed(peer,potato)

const unfollow = function() {
console.log('フォローを外しました');
}

const cancelTweet = function () {
console.log('ツイートをキャンセルしました');
}

// unfollow();
// cancelTweet();


// 実行したらレポジトリ削除
function confirmed(fn) {
    const input = window.prompt('実行しますか？');
    fn(input);
}

confirmed(function(input) {
    if (input === "実行") {
        console.log('リボジトリを削除');
        }
    });

// ボタンをクリックしたら処理実行
const btn = document.getElementById('button');
btn.addEventListener('click',function () {
console.log('フォロー解除');    
});

// 配列を繰り返す
const foods = ['にんじん','ジャガイモ','玉ねぎ'];

foods.forEach(function (foods) {
    console.log(foods);
});

