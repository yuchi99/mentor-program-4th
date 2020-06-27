function capitalize(str) {
    let arr = str.split('')
    for(let i=0; i<=str.length; i++){
        let code = arr[0].charCodeAt()
        if(code >=97 && code <= 122){
            arr[0] = arr[0].toUpperCase()
        }
    }
    return arr.join('')
}

console.log(capitalize('hello'));
