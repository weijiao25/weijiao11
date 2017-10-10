/**
 * Created by 我是你的小可爱 on 2017/10/9.
 */
var arr = [1, 1, 2, 5, 3, 6];
//function fun(arr) {
//    var brr = [];
//    for (var i = 0; i < arr.length; i++) {
//        if (brr.indexOf(arr[i]) == -1) {
//            brr.push(arr[i])
//        }
//    }
//    return brr;
//}
//console.log(fun(arr));


function fun1(arr) {
    var res = [];
    var json = {};
    for (var i = 0; i < arr.length; i++) {
        if(!json[arr[i]]){
            res.push(arr[i]);
            json[arr[i]]=1;
        }
    }
    return res
}
console.log(fun1(arr))