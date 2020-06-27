function reverse(str) {
    let arr = str.split('')
    let change = ''
    for(let i=str.length-1; i>=0; i--){
        change += arr[i]
    }
    console.log(change)
}

reverse('hello');
