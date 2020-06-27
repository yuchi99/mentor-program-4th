function join(arr, concatStr) {
    let newArr = ''
    for(let i=0; i<arr.length; i++){
        if(i<arr.length-1){
            newArr += arr[i] + concatStr
        }else{
            newArr += arr[i]
        }
    }
    return newArr
}

function repeat(str, times) {
    let newStr = ''
    for(let i=1; i<=times; i++){
        newStr += str
    }
    return newStr
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));